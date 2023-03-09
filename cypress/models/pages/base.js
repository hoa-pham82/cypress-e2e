const HEADER = 'h2'

export const getPageHeader = () => {
	return cy.get(HEADER)
}

export const getBaseUrl = () => {
	return Cypress.env('baseUrl')
}

export const goToHomePage = () => {
	cy.visit(getBaseUrl())
}
