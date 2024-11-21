describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display all sections', () => {
    cy.get('section').should('have.length.at.least', 5);
  });

  it('should have working social links', () => {
    cy.get('a[href*="linkedin.com"]').should('exist');
    cy.get('a[href*="github.com"]').should('exist');
  });
});