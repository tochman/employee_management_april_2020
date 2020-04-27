describe('Display list of employees', () => {
  it('when user visits the main view of the application', () => {
    cy.visit('http://localhost:3000')
    cy.get('section[name="header"]')
      .should('contain', "Employee list")

    cy.get('section[name="main"]')
      .within(() => {
        cy.get('li')
          .should('have.length', 4)
      })
  });
});