export function getMessageFromResponse(response) {
	const parser = new DOMParser()
	const dom = parser.parseFromString(response, 'text/html')
	const text = dom.querySelector('p').textContent
	return text
}

export function getStatusCodeSuccessful(res) {
	expect(res).equal(200)
}

export const buildPromotionMessage = (code, isValid, discount = 0) => {
	if (isValid)
		return `Promotional code ${code} used: ${
			discount * 10
		}% discount!” message.`
	else {
		return `Sorry, code ${code} is not valid`
	}
}
