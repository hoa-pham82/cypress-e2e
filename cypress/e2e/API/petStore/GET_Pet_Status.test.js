describe('Test suite for GET pet status', () => {
	const statuses = ['available', 'pending', 'sold']
	const invalidStatus = 'new'
	for (const status of statuses) {
		it(`Verify get pet status with ${status} status`, () => {
			cy.getPet(status)
				.then(response => {
					expect(response.status).equal(200)
				})
				.then(response => {
					for (const res of response.body) {
						expect(res.status).to.equal(status)
					}
				})
		})
	}

	it('Get pet status with invalid status', () => {
		cy.getPet(invalidStatus).then(response => {
			expect(response.status).equal(200)
			expect(response.body).to.be.empty
		})
	})
})
