const SEARCH_NAME = '#user-list-search-input'
const USER_RESULT_LIST = '[data-test="users-list"]'
const CHOSEN_USER = '[^data-test="user-list-item"]'
const AMOUNT = '#amount'
const ADD_NOTE = '#transaction-create-description-input'
const REQUEST_BTN = '[data-test="transaction-create-submit-request"]'
const PAY_BTN = '[data-test="transaction-create-submit-payment"]'

class TransactionPage {
	elements = {
		searchName: () => cy.get(SEARCH_NAME),
		resultList: () => cy.get(USER_RESULT_LIST),
		chosenUser: () => cy.get(CHOSEN_USER),
		amountInput: () => cy.get(AMOUNT),
		addNote: () => cy.get(ADD_NOTE),
		requestButton: () => cy.get(REQUEST_BTN),
		payButton: () => cy.get(PAY_BTN),
	}

	searchRecipientByName(name) {
		this.elements.searchName().type(name)
	}

	chooseFirstRecipient() {
		this.elements.resultList().first().click()
	}

	inputAmountAndNote(amount, note) {
		this.elements.amountInput().type(amount)
		this.elements.addNote().type(note)
	}

	requestTransaction() {
		this.elements.requestButton().click()
	}

	payTransaction() {
		this.elements.payButton().click()
	}

	verifyTransferIsSuccessful(amount, note) {
		cy.contains(`Requested $${amount}.00 for ${note}`)
	}
}

module.exports = new TransactionPage()
