describe('Test suite for POST - Add new pet to the store', () => {
	const statuses = ['available', 'pending', 'sold']
	const invalid_status = 'invalid'
	const petName = 'pineapple'
	for (const status of statuses) {
		it(`Add new pet to the store successfully with ${status}`, () => {
			cy.addNewPet(petName, status).then(res => {
				expect(res.status).to.equal(200)
				expect(res.body.id).to.exist
				expect(res.body.status).to.equal(status)
			})
		})
	}

	it(`Add new pet with ${invalid_status} status to the store`, () => {
		cy.addNewPet(petName, invalid_status).then(res => {
			expect(res.status).to.equal(200, 'The response status is not correct')
		})
	})
})
