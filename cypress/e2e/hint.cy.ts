/// <reference types="cypress" />

describe('hint', () => {
  it('solve the game', () => {
    cy.visit('/');
    cy.get('.game__cell')
      .not('.game__cell--filled')
      .each(($el) => {
        cy.wrap($el).click();
        cy.get('.status__action-hint').click();
      });
    cy.get('.overlay__text').contains('You solved it').should('be.visible');
  });
});

export {};
