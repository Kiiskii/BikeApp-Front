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

  it('clicking "home" navigates to home component', () => {
    cy.visit('/');
    cy.contains('Home').click();

    cy.url().should('include', '/home');
  });

  it('check if journeys has table in it', () => {
    cy.visit('/journeys');
    cy.get('table').should('be.visible');
  });

  it('check if stations has table in it', () => {
    cy.visit('/stations');
    cy.get('table').should('be.visible');
  });

  it('clicking small arrows in journeys increases or decreases page number', () => {
    cy.visit('/journeys');
    cy.wait(500);
    cy.get('.nextPage').click({ force: true });
    cy.get('.currentPage').should('have.text', '2');
    cy.wait(500);
    cy.get('.prevPage').click({ force: true });
    cy.get('.currentPage').should('have.text', '1');
  });

  it('check if links in name column take user to details', () => {
    cy.visit('/stations');
    cy.get('.stationLink').first().click();

    cy.url().should('include', '/details');
  });
});
