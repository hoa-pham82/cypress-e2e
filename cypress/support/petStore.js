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

const header = { accept: 'application/json' }
let postBody = (name, status) => {
	return {
		name: name,
		photoUrls: ['string'],
		status: status,
	}
}

// Get pet status
Cypress.Commands.add('getPet', status => {
	cy.request({
		method: 'GET',
		url: Cypress.env('baseUrl') + '/' + 'findByStatus',
		headers: header,
		qs: {
			status,
		},
	})
})

// Add new pet to the store
Cypress.Commands.add('addNewPet', (name, status) => {
	cy.request({
		method: 'POST',
		url: Cypress.env('baseUrl'),
		headers: header,
		body: postBody(name, status),
	})
})

// Update existing pet
Cypress.Commands.add('updatePet', (petName, newStatus) => {
	cy.request({
		method: 'PUT',
		url: Cypress.env('baseUrl'),
		headers: header,
		body: postBody(petName, newStatus),
	})
})
