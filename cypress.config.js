const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}',
		video: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		reporter: 'mochawesome',
		reporterOptions: {
			reportDir: 'cypress/results',
			// disable overwrite to generate many JSON reports
			overwrite: false,
			// do not generate intermediate HTML reports
			html: false,
			// generate intermediate JSON reports
			json: true,
		},
		baseUrl: 'http://localhost:3000/',
	},
	env: {
		baseUrl: 'https://petstore.swagger.io/v2/pet',
	},
})
