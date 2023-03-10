import { goToHomePage } from '../../models/pages/base'
import homePage from '../../models/pages/homePage'
import searchResultPage from '../../models/pages/searchResultPage'
import { DEFAULT_MESSAGE, OPTION_TITLE } from '../../utils/codeMapping'
let PROMOTION_CODE

describe('The customer want to search with promotional code', () => {
	before(() => {
		goToHomePage()
		cy.fixture('promotion').then(data => {
			cy.log(data)
			PROMOTION_CODE = data.INVALID_CODE
		})
	})

	it('The potential customer is able to search with the invalid promotional code and get available seats', () => {
		homePage.selectDeparturingOptionByIndex(OPTION_TITLE.JULY_THIS_YEAR)

		homePage.selectReturningOptionByIndex(OPTION_TITLE.DECEMBER_NEXT_2_YEAR)

		homePage.inputPromotionCode(PROMOTION_CODE)

		homePage.clickSearchButton()

		searchResultPage.getMessage(DEFAULT_MESSAGE.SEAT_AVAILABLE)

		searchResultPage.getPromotionMessage(PROMOTION_CODE, false)
	})
})
