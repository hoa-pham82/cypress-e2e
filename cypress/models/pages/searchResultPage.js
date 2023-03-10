const { buildPromotionMessage } = require('../../utils/common')

const MESSAGE = 'div > p'
const BACK_BUTTON = 'p > a'

class ResultPage {
	elements = {
		header: () => cy.get(HEADER),
		message: () => cy.get(MESSAGE),
		back: () => cy.get(BACK_BUTTON),
	}

	getMessage(text) {
		return this.elements.message().contains(text).should('be.visible')
	}

	clickBack() {
		this.elements.back().click()
	}

	getPromotionMessage(code, isValid) {
		return this.elements
			.message()
			.contains(buildPromotionMessage(code, isValid))
			.should('be.visible')
	}
}

module.exports = new ResultPage()
