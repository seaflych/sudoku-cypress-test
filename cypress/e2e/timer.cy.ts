/// <reference types="cypress" />

describe('Timer', () => {
  it('show timer running 10 seconds ', () => {
    cy.visit('/');
    for (let i = 1; i < 10; i++) {
      cy.contains('.status__time', `00:0${i}`);
    }
  });
});
