describe('Login Page Tests', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('https://dev.nimbushealthcare.com/patient');
    });
  
    it('should display the login form', () => {
      cy.get('form').should('be.visible');
    });
  
    it('should require email and password', () => {
      // Attempt to submit the form without entering any data
      cy.get('form').submit();
      cy.get('.error').should('contain', 'Email is required');
      cy.get('.error').should('contain', 'Password is required');
    });
  
    //it('should display an error for an invalid email', () => {
      //cy.get('input[name=email]').type('invalid-email');
      //cy.get('input[name=password]').type('password');
      //cy.get('form').submit();
      //cy.get('.error').should('contain', 'Invalid email');
      //cy.get('.error').should('contain', 'Invalid password');
    //});
  
    //it('should display an error for incorrect credentials', () => {
      //cy.get('input[name=email]').type('man2422@test.io');
      //cy.get('input[name=phonenumber]').type('1234');
      //cy.get('form').submit();
      //cy.get('.error').should('contain', 'Incorrect email or phonenumber');
    //});
  
    it('should login successfully with correct credentials', () => {
      cy.get('input[name=email]').type('man2423@test.io');
      cy.get('input[name=password]').type('dual1983');
      cy.get('form').submit();
      // Assuming a successful login redirects to the dashboard
      cy.url().should('include', '/dashboard');
    });
  });
  