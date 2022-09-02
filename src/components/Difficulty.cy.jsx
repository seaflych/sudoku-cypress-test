/// <reference types="cypress" />
import React from 'react';
import { Difficulty } from './Difficulty';
import '../App.css';
import { SudokuContext } from '../context/SudokuContext';

describe('Difficulty', () => {
  it('show difficulty', () => {
    cy.mount(
      <SudokuContext.Provider value={{ difficulty: 'Easy' }}>
        <section className="status">
          <Difficulty onChange={cy.stub().as('change')} />
        </section>
      </SudokuContext.Provider>
    );
    cy.get('select').should('have.value', 'Easy').select('Medium');
    cy.get('@change').should('have.been.calledOnce').its('firstCall.args.0.target.value').should('eq', 'Medium');
  });
});
