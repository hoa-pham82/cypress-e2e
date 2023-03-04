describe('Test suite for PUT - Update existing Pet', () => {
	const petName = 'pineapple'
	const newStatus = 'Sold'
	it(`Update an existing pet`, () => {
		cy.updatePet(petName, newStatus).then(res => {
			expect(res.status).to.equal(200)
			expect(res.body.status).to.equal(newStatus)
		})
	})
})
