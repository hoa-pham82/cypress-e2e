const DEPARTURE = 'select#departing'
const RETURNING = 'select#returning'
const PROMOTION_CODE = '#promotional_code'
const SEARCH_BUTTON = '[value="Search"]'

class homePage {
	elements = {
		departing: () => cy.get(DEPARTURE),
		returning: () => cy.get(RETURNING),
		promotion: () => cy.get(PROMOTION_CODE),
		searchBtn: () => cy.get(SEARCH_BUTTON),
	}

	selectDeparturingOptionByIndex(index) {
		this.elements.departing().select(index.toString()).should('exist')
	}

	selectReturningOptionByIndex(index) {
		this.elements.returning().select(index.toString()).should('exist')
	}

	inputPromotionCode(code) {
		this.elements.promotion().type(code)
	}

	clickSearchButton() {
		this.elements.searchBtn().click()
	}
}

module.exports = new homePage()
