import homePage from '../../models/pages/homePage'
import TransactionPage from '../../models/pages/transactionPage'
import logIn from '../../models/pages/loginPage'
import { username, password, recipient } from '../../fixtures/profile.json'

describe('New transfer flow', () => {
	before(() => {
		cy.visit('/signin')
		logIn.login(username, password)
	})
	it('Should transfer money successfully', () => {
		homePage.newTransferButton.click()
		homePage.verifyHomePageIsDisplaying()

		TransactionPage.searchRecipientByName(recipient)
		TransactionPage.chooseFirstRecipient()
		TransactionPage.inputAmountAndNote('100', 'chicken')
		TransactionPage.requestTransaction()
		TransactionPage.verifyTransferIsSuccessful(100, 'chicken')
	})
})
