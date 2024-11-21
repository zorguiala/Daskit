describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should submit contact form', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('textarea[name="message"]').type('Hello, this is a test message');
    cy.get('button[type="submit"]').click();
  });

  it('should validate required fields', () => {
    cy.get('button[type="submit"]').click();
    cy.get('input:invalid').should('have.length', 2);
    cy.get('textarea:invalid').should('have.length', 1);
  });
});