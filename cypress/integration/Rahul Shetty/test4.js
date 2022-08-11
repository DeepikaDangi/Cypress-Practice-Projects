///<reference types = "Cypress"/>

describe('My second test suite', function() {
	it('Tests smaller functionalities', function() {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
		// cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
		// cy.get('#checkBoxOption1').uncheck();
		// cy.get('input[type="checkbox"]').check([ 'option2', 'option3' ]);

		//static dropdown
		cy.get('select').select('option2');
	});
});
