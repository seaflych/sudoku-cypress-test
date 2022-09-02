/// <reference types="cypress" />
import React from 'react';
import { Numbers } from './Numbers';
import '../App.css';

describe('Numbers', { viewportHeight: 1000, viewportWidth: 1000 }, () => {
  it('show numbers', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers />
        </section>
      </div>
    );
  });

  it('calls on click number', () => {
    cy.mount(
      <div className="innercontainer">
        <section className="status">
          <Numbers onClickNumber={cy.stub().as('click')} />
        </section>
      </div>
    );
    cy.contains('.status__number', '1').click();
    cy.get('@click').should('have.been.calledOnceWith', '1');
  });
});
