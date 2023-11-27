beforeEach(() => {
  cy.visit('/')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
});
describe('Test cases of Orange HRM Admin Dashboard Page', () => {
    it('TCD 1 | SEARCHING SYSTEM USERS', () => {
    cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type('Admin')
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2)').click()
  
    })

    it('TCD 2 | SELECTING FROM FOUND RECORDS', () => {
    cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()
    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
    cy.wait(5000)
    cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
    cy.wait(3000)

    })

    it('TCD 3 | SELECTING FROM TASKBAR DROPDOWN MENU', () => {
    cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > :nth-child(1)').click()

    })


  })

  