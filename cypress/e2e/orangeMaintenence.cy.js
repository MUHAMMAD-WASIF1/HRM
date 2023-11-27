beforeEach(() => {
    cy.visit('/')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('admin123')
      cy.get('[type="submit"]').click()
  });

describe('"Maintainence" Section of the Orange HRM ', () => {
 
 
    it('All the Test Cases of the Maintinence Module', () => {
    cy.get('[href="/web/index.php/maintenance/viewMaintenanceModule"]').click()
    
    cy.get('[type="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.get('.oxd-autocomplete-text-input > input').type('BRO BRO BRO BROOOOOOOOOOOOOOOOOOOOOO')
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-card-container > form > div.oxd-form-actions > button').click()
    

    cy.get('.--parent').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-button').click()

})


})