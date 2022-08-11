const { And } = require("cypress-cucumber-preprocessor/steps/index");

describe('My second test suite', function() {
	it('Tests smaller functionalities', function() {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
		// cy.get('.mouse-hover-content').invoke('show');
		// cy.contains('Top').click()
		// cy.url().should('include', 'top');	

		cy.document().should('have.property', 'title').and('eq', 'Practice Page')

		cy.title().then(text =>{
			expect(text).to.eq('Practice Page')
		})
	})
});
