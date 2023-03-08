const USERNAME_FIELD = '#username'
const PASSWORD_FIELD = '#password'
const SIGNIN_BUTTON = '[data-test="signin-submit"]'

class logIn {
	elements = {
		usernameInput: () => cy.get(USERNAME_FIELD),
		passwordInput: () => cy.get(PASSWORD_FIELD),
		signinBtn: () => cy.get(SIGNIN_BUTTON),
	}

	login(username, password) {
		this.elements.usernameInput().type(username)
		this.elements.passwordInput().type(password)
		this.elements.signinBtn().click()
	}
}

module.exports = new logIn()
