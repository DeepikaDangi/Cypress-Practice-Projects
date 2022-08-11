/// <reference types = 'cypress' />

describe('My First Test Suite', () => {
	beforeEach(() => {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
	});

	it('Child Window Test', () => {
		cy.get('#opentab').invoke('removeAttr', 'target').click();
		cy.url().should('include', 'rahulshettyacademy');
		cy.go('back');
	});
});
