declare namespace Cypress {
	interface Chainable<Subject> {
		searchASeat(
			departing: any,
			returning: any,
			promotionCode: any,
		): Chainable<any>
	}
}
