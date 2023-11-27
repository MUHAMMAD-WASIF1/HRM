var name='Admin'
var pass='admin123'

beforeEach(() => {
  cy.visit('/');

});

describe('All the test cases of Login form', () => {

 
      
    it('TCL-01 | VISITING THE WEBSITE TESTING API', () => {

    })

     it('TCL-02 | ASSERTION OF THE "ORANGE HRM" LOGO', () => {
      cy.get('[src="/web/images/ohrm_branding.png?v=1689053487449"]').should('be.visible')
        })

     it('TCL-03 | ASSERTING THE LOGIN HEADING', () => {
      cy.contains('h5', 'Login').should('be.visible');
      })

      it('TCL-04 | ASSERTION OF USERNAME FIELD', () => {
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').should('be.visible');
      })

     it('TCL-05 | ASSERTION OF PASSWORD FIELD', () => {
      cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input').should('be.visible');
      })

      it('TCL-06 | ASSERTION OF LOGIN BUTTON', () => {
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').should('be.visible');
      })

     it('TCL-07 | LOGIN WITH CORRECT DATA -POSITIVE-', () => {
      
      cy.get('[name="username"]').type(name);
      cy.get('[name="password"]').type(pass)
      cy.get('.orangehrm-login-button').click();
      })

     it('TCL-08 | LOGIN WITH WRONG DATA -NEGATIVE-', () => {
      cy.get('[name="username"]').type('wasif');
        cy.get('[name="password"]').type('muqeet')
        cy.get('.orangehrm-login-button').click();
        cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p',"Invalid credentials").should('be.visible');  
      })

     it('TCL-09 | CLICKING ON LOGIN WITHOUT ENTERING USER NAME -NEGATIVE-', () => {
      cy.get('[type="submit"]').click()
        cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > span','Required').should('be.visible')  
      })

      it('TCL-10 | CLICKING ON LOGIN WITHOUT ENTERING PASSWORD -NEGATIVE-', () => {
        cy.get('[type="submit"]').click()
        cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > span','Required').should('be.visible')    
      })

      it('TCL-11 | CLICKING ON LOGIN WITHOUT ENTERING USER NAME and PASSWORD -NEGATIVE-', () => {
        cy.get('[type="submit"]').click()
        cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > span','Required').should('be.visible') 
        cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > span','Required').should('be.visible') 
      })

      it('TCL-12 | ASSERTION OF FORGOT YOUR PASSWORD', () => {
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.orangehrm-login-forgot > p')
        .should(($abc) => {
            expect($abc).to.have.text("Forgot your password? ");
            
        });
        })

     it('TCL-13 | CLICKING ON FORGOT YOUR PASSWORD, NAVIGATE TO RESET PASSWORD PAGE', () => {
      cy.contains('Forgot your password? ').click();
        cy.contains('Reset Password').should('be.visible');    
      })

      it('TCL-14 | ASSERTING FOOTER TEXT 1', () => {
      cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-footer > div.orangehrm-copyright-wrapper > p:nth-child(1)', 'OrangeHRM OS 5.5').should('be.visible');
      })

      it('TCL-15 | ASSERTING FOOTER TEXT 2', () => {
      cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-footer > div.orangehrm-copyright-wrapper > p:nth-child(2)', '© 2005 - 2023 ').should('be.visible');
      cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-footer > div.orangehrm-copyright-wrapper > p:nth-child(2)', 'OrangeHRM, Inc').should('be.visible');
      cy.contains('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-footer > div.orangehrm-copyright-wrapper > p:nth-child(2)', '. All rights reserved.').should('be.visible');
     })
     
     it('TCL-16 | CLICKING ON THE "OrangeHRM, Inc" HYPERLINK IN FOOTER TEXT 2 WILL REDIRECT THE USER TO THEIR WEBSITE', () => {
      cy.get('[href="http://www.orangehrm.com"]').click()
      })

     it('TCL-17 | CLICKING ON THE LINKEDIN ICON WILL REDIRECT THE USER TO THEIR LINKEDIN ACCOUNT', () => {
      cy.get('[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').click()
      })

      it('TCL-18 | CLICKING ON THE FACEBOOK ICON WILL REDIRECT THE USER TO THEIR FACEBOOK ACCOUNT', () => {
        cy.get('[href="https://www.facebook.com/OrangeHRM/"]').click()
      })

      it('TCL-19 | CLICKING ON THE TWITTER ICON WILL REDIRECT THE USER TO THEIR TWITTER ACCOUNT', () => {
      cy.get('[href="https://twitter.com/orangehrm?lang=en"]').click()
      })

      it('TCL-20 | CLICKING ON THE YOUTUBE ICON WILL REDIRECT THE USER TO THEIR YOUTUBE ACCOUNT', () => {
        cy.get('[href="https://www.youtube.com/c/OrangeHRMInc"]').click()
      })
 })