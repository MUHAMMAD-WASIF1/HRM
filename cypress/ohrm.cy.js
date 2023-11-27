  
  
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    
    //check the heading and its text should be 'login' using contain command and it should be visible
    cy.contains('h5', 'Login').should('be.visible');

    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type('Admin');
    
    cy.get('[name="password"]').type('admin123')
    
    // cy.get('.orangehrm-login-button').click();
    
    //check the text of the element
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.orangehrm-login-forgot > p').should(($element) => {
      expect($element).to.have.text("Forgot your password? ");
      });

    //check the text of the login button using should command
    cy.get('.orangehrm-login-button').should('include.text', 'Login').click();

   

  })
