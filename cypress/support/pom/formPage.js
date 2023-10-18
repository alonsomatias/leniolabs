const firstNameField = () => cy.get('[data-test=firstName]')
const lastNameField = () => cy.get('[data-test=lastName]')
const postalCodeField = () => cy.get('[data-test=postalCode]')
const continueButton = () => cy.get('[data-test=continue]')
const finishButton = () => cy.get('[data-test=finish]')
const completeHeaderLabel = () => cy.get('.complete-header')

export function FillForm(userData) {
    firstNameField()
        .should('be.visible')
        .type(userData.firstName)
    lastNameField()
        .should('be.visible')
        .type(userData.lastName)
    postalCodeField()
        .should('be.visible')
        .type(userData.zipCode)
    continueButton()
        .should('be.visible')
        .click()

    // TODO: Make a method to check total price is correct
    finishButton().click()
    completeHeaderLabel()
        .should('be.visible')
        .should('contain.text', 'Thank you for your order!')
}