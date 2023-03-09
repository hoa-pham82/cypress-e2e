// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const header = { authority: 'marsair.recruiting.thoughtworks.net' }
const buildQuery = (departing, returning, promotionCode = '') => {
	return {
		departing: departing,
		returning: returning,
		promotional_code: promotionCode,
	}
}

// Create a command to send a search request
Cypress.Commands.add('searchASeat', (departing, returning, promotionCode) => {
	cy.request({
		method: 'POST',
		url: Cypress.env('baseUrl'),
		headers: header,
		qs: buildQuery(departing, returning, promotionCode),
	})
})
