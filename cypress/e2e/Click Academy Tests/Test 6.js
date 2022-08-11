/// <reference types = 'cypress' />

describe('My First Test Suite', () => {
	beforeEach(() => {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
	});

	it('Child Tab Test', () => {
		cy.get('#opentab').then((el) => {
			const url = el.prop('href');
			cy.visit(url);
		});
	});
});
