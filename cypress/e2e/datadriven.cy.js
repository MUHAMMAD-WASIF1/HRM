
import login from '../fixtures/example.json'

describe('Data driven testing Demo', () => {

  it('Should login user', () => {

    cy.visit('/')

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(login.name)

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(login.pass)

    cy.get('.oxd-button').click()

  })

})