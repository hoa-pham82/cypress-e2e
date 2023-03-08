const NEW_TRANSFER = '.MuiButton-label'

class homePage {
	get newTransferButton() {
		return cy.get(NEW_TRANSFER).contains('New')
	}

	verifyHomePageIsDisplaying() {
		return expect(cy.contains('Account Balance'))
	}
}

module.exports = new homePage()
