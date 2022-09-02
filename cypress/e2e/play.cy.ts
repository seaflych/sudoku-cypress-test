/// <reference types="cypress" />
import { starting, solved } from '../fixtures/sudoku.json';

describe('hint', () => {
  it('play the game', () => {
    cy.visit('/', {
      onBeforeLoad: (window) => {
        (window.starting = starting), (window.solved = solved);
      },
    });
    cy.get('.game__cell:contains(0)').should('have.length', 3);
    starting.forEach((cell, index) => {
      if (cell === '0') {
        cy.get('.game__cell').eq(index).click();
        cy.contains('.status__number', solved[index]).click().wait(1000, { log: false });
      }
    });
  });
});
