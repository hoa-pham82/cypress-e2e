const { defineConfig } = require('cypress')
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

module.exports = defineConfig({
	e2e: {
		specPattern: ['cypress/e2e/**/*.test.{js,jsx,ts,tsx}', '**/*/*.feature'],
		screenshotOnRunFailure: true,
		video: false,
		async setupNodeEvents(on, config) {
			// implement node event listeners here
			await addCucumberPreprocessorPlugin(on, config)
			on(
				'file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				}),
			)
			return config
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
		baseUrl: 'https://marsair.recruiting.thoughtworks.net/HoaPham',
	},
	env: {
		baseUrl: 'https://marsair.recruiting.thoughtworks.net/HoaPham',
	},
})
