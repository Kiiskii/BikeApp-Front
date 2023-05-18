describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
  });
  it('clicking "journeys" navigates to journeys component', () => {
    cy.visit('/');
    cy.contains('Journeys').click();

    cy.url().should('include', '/journeys');
  });

  it('clicking "stations" navigates to stations component', () => {
    cy.visit('/');
    cy.contains('Stations').click();

    cy.url().should('include', '/stations');
  });
});
