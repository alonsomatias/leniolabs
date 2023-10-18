const usernameField = () => cy.get('[data-test=username]');
const passwordField = () => cy.get('[data-test=password]');
const submitButton = () => cy.get('[data-test=login-button]');
const errorMessageContainer = (message) => cy.get('[data-test=error]').contains(message)

export function Login(username, password) {
    usernameField()
      .should('be.visible').type(username);
    passwordField()
      .should('be.visible').type(password);
    submitButton()
      .should('be.visible').click();
}

export function ValidateErrorMessage(errorMessage) {
  errorMessageContainer(errorMessage)
    .should('be.visible')
}