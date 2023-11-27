describe('All the positive and negative test cases of Orange HRM Dashboard Page', () => {
    it('Dashboard test cases', () => {
    cy.visit('/')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('[type="submit"]').click()
    cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()
    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').type('Admin')
    // cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(2) > div > div:nth-child(2)').click().select(0)
    // cy.select('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(1) > div > div:nth-child(2) > input').select('Admin')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    // cy.get('oxd-select-dropdown').select('Admin')
    // cy.contains('.dropdown-item', 'Option 2').click();
    // cy.get('[placeholder="Type for hints..."]').click().type('Wasif')
    // cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(4) > div > div:nth-child(2)').click().select('Enabled')
    // cy.get('[type="submit"]').click
    // cy.get('select[class='oxd-select-dropdown']').select('Admin')
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

  //  cy.get('.oxd-layout-context').click();
    cy.get('.oxd-select-text oxd-select-text--active >').find('option:Admin').click('Admin');
    

})
  })







