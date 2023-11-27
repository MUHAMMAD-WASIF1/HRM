beforeEach(() => {
    cy.visit('/')
      cy.get('[name="username"]').type('Admin')
      cy.get('[name="password"]').type('admin123')
      cy.get('[type="submit"]').click()
  });


describe('Test cases of Orange HRM Leave Page', () => {
    it('TCLeave 1 | LEAVE PAGE ASSERTION', () => {
        cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a > span').click()

        cy.contains('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(1) > div > div:nth-child(1) > div > div.oxd-input-group__label-wrapper > label','From Date').should('be.visible')
        cy.contains(':nth-child(1) > .oxd-grid-4 > :nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label','To Date').should('be.visible')
        cy.contains(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label','Show Leave with Status').should('be.visible')
        cy.contains(':nth-child(4) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label','Leave Type').should('be.visible')
        cy.contains(':nth-child(2) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label','Employee Name').should('be.visible')
        cy.contains(':nth-child(2) > .oxd-grid-4 > :nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label','Sub Unit').should('be.visible')
        cy.contains('.orangehrm-leave-filter > .oxd-text','Include Past Employees').should('be.visible')
        cy.contains('.oxd-form-actions > .oxd-text','* Required').should('be.visible')


        cy.get(':nth-child(3) > .oxd-icon-button').should('be.visible')
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').should('be.visible')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('be.visible')
        cy.get('.oxd-autocomplete-text-input > input').should('be.visible')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').should('be.visible')
        cy.get('.oxd-switch-input').should('be.visible')


        cy.contains('.oxd-topbar-body-nav > ul > :nth-child(1)','Apply').should('be.visible')
        cy.contains('.oxd-topbar-body-nav > ul > :nth-child(2)','My Leave').should('be.visible')
        cy.contains('.oxd-topbar-body-nav > ul > :nth-child(3)','Entitlements').should('be.visible')
        cy.contains('.oxd-topbar-body-nav > ul > :nth-child(4)','Reports').should('be.visible')
        cy.contains('.oxd-topbar-body-nav > ul > :nth-child(5)','Configure').should('be.visible')
        cy.contains('.oxd-topbar-body-nav > ul > :nth-child(6)','More').should('be.visible')
        cy.contains('.oxd-button--ghost','Reset').should('be.visible')
        cy.contains('.oxd-button--secondary','Search').should('be.visible')


        
    })
    
    
    
    it('TCLeave 2 | SEARCHING SYSTEM USERS', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a > span').click()
    cy.get("form > div:nth-of-type(1) > div > div:nth-of-type(1) i").click();
    cy.get("div.--today").click({ multiple: true });
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div:nth-child(2) > div > div.oxd-grid-item.oxd-grid-item--gutters.orangehrm-leave-filter.--span-column-2 > div > label > span').click()
    cy.get('.oxd-autocomplete-text-input > input').type('WASIF')
    cy.get('.oxd-button--secondary').click()
})



    it('TCLeave 3 | SELECTING FROM TASKBAR DROPDOWN MENU', () => {
    cy.get('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(3) > a > span').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(4)').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(5)').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()

    cy.get('.oxd-topbar-body-nav > ul > :nth-child(6)').click()
    cy.get(':nth-child(2) > li > .oxd-topbar-body-nav-tab-link').click()
    })
})


