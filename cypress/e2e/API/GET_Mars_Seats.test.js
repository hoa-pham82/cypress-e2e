import { OPTION_TITLE, DEFAULT_MESSAGE } from '../../utils/codeMapping'
import {
	getMessageFromResponse,
	getStatusCodeSuccessful,
} from '../../utils/common'

describe('Test suites for searching seats from MARSAIR', () => {
	it('The potential customer is able to search without promotional code and get available seats', () => {
		cy.searchASeat(
			OPTION_TITLE.JULY_THIS_YEAR,
			OPTION_TITLE.DECEMBER_NEXT_2_YEAR,
		).then(res => {
			getStatusCodeSuccessful(res.status)
			expect(getMessageFromResponse(res.body)).equal(
				DEFAULT_MESSAGE.SEAT_AVAILABLE,
			)
		})
	})

	it('The potential customer is able to search without promotional code and get no available seats', () => {
		cy.searchASeat(
			OPTION_TITLE.JULY_THIS_YEAR,
			OPTION_TITLE.JULY_NEXT_2_YEAR,
		).then(res => {
			getStatusCodeSuccessful(res.status)
			expect(getMessageFromResponse(res.body)).equal(
				DEFAULT_MESSAGE.NO_SEAT_AVAILABLE,
			)
		})
	})
})
