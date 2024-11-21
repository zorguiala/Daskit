describe('Theme Toggle', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle Redux theme', () => {
    cy.get('[aria-label="Toggle theme (Redux)"]').click();
    cy.get('html').should('have.class', 'dark');
    cy.get('[aria-label="Toggle theme (Redux)"]').click();
    cy.get('html').should('have.class', 'light');
  });

  it('should toggle Context theme', () => {
    cy.get('[aria-label="Toggle theme (Context)"]').click();
    cy.get('html').should('have.class', 'dark');
    cy.get('[aria-label="Toggle theme (Context)"]').click();
    cy.get('html').should('have.class', 'light');
  });

  it('should persist theme preference', () => {
    cy.get('[aria-label="Toggle theme (Redux)"]').click();
    cy.reload();
    cy.get('html').should('have.class', 'dark');
  });
});