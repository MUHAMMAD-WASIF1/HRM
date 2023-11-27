beforeEach(() => {
    cy.visit('/')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('admin123')
      cy.get('[type="submit"]').click()
  });

describe('buzz page of orange hrm ', () => {
 
 
    it('TCB 1 | ASSERTION OF BUZZ PAGE', () => {
    cy.get('[href="/web/index.php/buzz/viewBuzz"]').click() 
   
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-header > div.orangehrm-buzz-profile-image > img').should('be.visible') 
    cy.get('.oxd-buzz-post-input').should('be.visible')  
    cy.get('.oxd-buzz-post-slot > .oxd-button').should('be.visible')  
    cy.get('.orangehrm-buzz-create-post-actions > :nth-child(1)').should('be.visible') 
    cy.get('.orangehrm-buzz-create-post-actions > :nth-child(2)').should('be.visible')
    
    })

    it('TCB 1 | POST ON BUZZ PAGE', () => {
    cy.get('[href="/web/index.php/buzz/viewBuzz"]').click() 
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--white.orangehrm-buzz-create-post > div.orangehrm-buzz-create-post-header > div.orangehrm-buzz-create-post-header-text > form > div > textarea').type('STIXOR TECHNOLOGIES') 
    cy.get('.oxd-buzz-post-slot > .oxd-button').click()
    
    cy.get('.orangehrm-buzz-create-post-actions > :nth-child(1)').click()
    cy.get('.oxd-dialog-close-button').click() 
    cy.get('.oxd-buzz-post-slot > .oxd-button').click()  
    cy.get('#heart-svg').click()
   
})
})