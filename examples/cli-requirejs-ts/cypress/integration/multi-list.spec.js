/// <reference types="Cypress" />

context('sortable with multiple lists', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
      .viewport(1920, 1280)
      .clearLocalStorage();
  })

  it('should be able to swap item 1 and 2 in the group A', () => {

    // Act
    cy.get('[data-test=itemList1-0]')
      .trigger('mousedown', { button : 0 })
      .trigger('dragstart');

    cy.get('#listA li:nth-of-type(3)')
      .trigger('dragenter');
      
    cy.get('[data-test=itemList1-0]:last')
      .trigger('drop', { force: true });

    // Assert
    cy.get('[data-test=itemList1-0]').should('have.text', "item 2");
    cy.get('[data-test=itemList1-1]').should('have.text', "item 1");
  });


})
