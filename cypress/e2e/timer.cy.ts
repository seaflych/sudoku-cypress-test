/// <reference types="cypress" />

describe('Timer', () => {
  it('show timer running 10 seconds ', () => {
    cy.visit('/');
    for (let i = 1; i < 10; i++) {
      cy.contains('.status__time', `00:0${i}`);
    }
  });

  it.only('shows minutes and seconds since the game starts', () => {
    // use it before
    cy.clock();
    cy.visit('/');
    cy.contains('.status__time', '00:00');
    cy.tick(180_000);
    cy.contains('.status__time', '03:00');
    cy.tick(520_000);
    cy.contains('.status__time', '11:40');
  });
});
