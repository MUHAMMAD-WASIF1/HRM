beforeEach(() => {
    cy.visit('/')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('admin123')
      cy.get('[type="submit"]').click()
  });


describe('Test cases of Orange HRM Admin Dashboard Page', () => {
    

    it('TCDirectory 1 | ASSERTION OF DIRECTORY PAGE', () => {
        cy.get(':nth-child(9) > .oxd-main-menu-item').click()
        cy.contains('.oxd-topbar-header-breadcrumb > .oxd-text','Directory').should('be.visible')
        cy.contains('.oxd-table-filter-header-title > .oxd-text','Directory').should('be.visible')
        cy.contains(':nth-child(1) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label','Employee Name').should('be.visible')
        cy.contains(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label','Job Title').should('be.visible')
        cy.contains(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label','Location').should('be.visible')
        cy.contains('.oxd-button--ghost','Reset').should('be.visible')
        cy.contains('.oxd-button--secondary','Search').should('be.visible')

        cy.get('.oxd-userdropdown-tab').should('be.visible')
        cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button').should('be.visible')
        cy.get('.oxd-autocomplete-text-input > input').should('be.visible')
        cy.get('.oxd-autocomplete-text-input > input').should('be.visible')
        cy.get('.oxd-autocomplete-text-input > input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').should('be.visible')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('be.visible')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').should('be.visible')


        cy.get('body').should('be.visible')
        cy.get(':nth-child(2) > .oxd-sheet').should('be.visible')
        cy.get(':nth-child(3) > .oxd-sheet').should('be.visible')

    })
    
    it('TCDirectory 2 | VIEWING DIRECTORY USERS DETAILS', () => {
    cy.get(':nth-child(9) > .oxd-main-menu-item').click()
    cy.get('.oxd-autocomplete-text-input > input').type('WAASI')
    cy.get(':nth-child(2) > .oxd-sheet').click()
    
    })

    
})