describe('WW Subscriptions Plan', () => {
  beforeEach(() => {
    // Prevent Cypress from failing on specific frontend errors
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('checkConditions is not defined')) {
        return false;
      }
      return true;
    });
  });

  it('Completes full subscription flow using 2nd radio options', () => {
    // Step 1: Open Intro Page
    cy.visit('https://dev.nimbushealthcare.com/intro?plan=weightloss&med=semaglutide');

    // Step 2: Click "Get Started"
    cy.get('#go_to_step2').should('be.visible').click();

    // Step 3: Select State and Accept Terms
    cy.url().should('include', '/select-state');
    cy.wait(2000);
    cy.get('select').should('be.visible').select('Arizona').trigger('change');
    cy.get('input[type="checkbox"]').check({ force: true }).should('be.checked');
    cy.get('button').contains('Continue').click();

    // Step 4: Set Weight
    cy.url().should('include', '/set-weight');
    cy.wait(2000);
    cy.get('input[placeholder="Enter your weight in pounds"]').type('130');
    cy.get('button').contains('Next').click();

    // Step 5: Set Goal – Click 1nd Option via Label
    cy.url().should('include', '/set-goal');
    cy.wait(2000);
    cy.get('label').eq(0).should('be.visible').click({ force: true }); // Click the label, not the hidden input
    cy.get('button').contains('Next').click();

    // Step 5: Set Goal – Click 1nd Option via Label
    cy.url().should('include', '/set-goal');
    cy.wait(2000);
    cy.get('label').eq(1).should('be.visible').click({ force: true }); // Click the label, not the hidden input
    cy.get('button').contains('Next').click();

    // Step 5: Set Goal – Click 1nd Option via Label
    cy.url().should('include', '/set-goal');
    cy.wait(2000);
    cy.get('label').eq(2).should('be.visible').click({ force: true }); // Click the label, not the hidden input
    cy.get('button').contains('Next').click();

    // step 6: Recommendation - click continue with sema button
    cy.url().should('include', '/recommendations');
    cy.wait(2000);
    cy.get('a').contains('Continue with semaglutide ').click();
    
    // step 6: Program-intro - click continue 
    cy.url().should('include', '/program-intro');
    cy.wait(2000);
    cy.get('a').contains('Next').click();


    // step 7: Signin page - click continue 
    cy.url().should('include', '/signin');
    cy.wait(2000);
    cy.get('input[id="enter_email"]').type('man2423@test.io');
    cy.get('a').contains('Continue').click();
    cy.get('input[id="login_password"]').type('dual1983');
    cy.get('button').contains('Continue').click();
    //cy.url().should('include', '/dashboard/weightloss');


     // Step 8: Final Verification
    //cy.wait(2000);
    //cy.url().should('not.include', '/weight-loss-journey');
    //cy.log('✅ Subscription flow completed successfully');
  });
});

/// test