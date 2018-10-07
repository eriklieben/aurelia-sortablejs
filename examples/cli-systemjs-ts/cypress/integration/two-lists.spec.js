/// <reference types="Cypress" />

context('sortable with two lists', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234')
      .viewport(1920, 1280)
      .clearLocalStorage();
  })

  it('should be able to swap item 1 and 2 in the first list', () => {

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

  it('should be able to swap item 1 and 2 in the second list', () => {

    // Act
    cy.get('[data-test=itemList2-0]')
      .trigger('mousedown', { button : 0 })
      .trigger('dragstart');

    cy.get('#listB li:nth-of-type(3)')
      .trigger('dragenter');
      
    cy.get('[data-test=itemList2-0]:last')
      .trigger('drop', { force: true });

    // Assert
    cy.get('[data-test=itemList2-0]').should('have.text', "item 9");
    cy.get('[data-test=itemList2-1]').should('have.text', "item 8");
  });

  it('should be able to move item 1 of list one to list two', () => {

    // Act
    cy.get('[data-test=itemList1-0]')
      .trigger('mousedown', { button : 0 })
      .trigger('dragstart');

    cy.get('#listB li:nth-of-type(1)')
      .trigger('dragenter');
      
    cy.get('[data-test=itemList1-0]:last')
      .trigger('drop', { force: true });

    // Assert
    cy.get('[data-test=itemList1-0]').should('have.text', "item 2");
    cy.get('[data-test=itemList2-1]').should('have.text', "item 1");
  });

  it('should update the underlaying lists', () => {

    // Act
    cy.get('[data-test=itemList1-0]')
      .trigger('mousedown', { button : 0 })
      .trigger('dragstart');

    cy.get('#listB li:nth-of-type(1)')
      .trigger('dragenter');
      
    cy.get('[data-test=itemList1-0]:last')
      .trigger('drop', { force: true });

    // Assert
    cy.get('#listA').then(x => {
      
      const list1 = x[0].au.sortable.container.root.viewModel.itemList1;
      const list2 = x[0].au.sortable.container.root.viewModel.itemList2;

      expect(list1).to.have.length(6);
      expect(list1[0]).to.eq('item 2');
      expect(list1[1]).to.eq('item 3');
      expect(list1[2]).to.eq('item 4');
      expect(list1[3]).to.eq('item 5');
      expect(list1[4]).to.eq('item 6');

      expect(list2).to.have.length(5);
      expect(list2[0]).to.eq('item 8');
      expect(list2[1]).to.eq('item 1');
      expect(list2[2]).to.eq('item 9');
      expect(list2[3]).to.eq('item 10');
      expect(list2[4]).to.eq('item 11');

    });
  });

})
