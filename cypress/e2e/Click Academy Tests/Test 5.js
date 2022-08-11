/// <reference types = 'cypress' />

describe('My First Test Suite', () => {
	beforeEach(() => {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
	});

	it('Mouse Hover Test', () => {
		cy.get('div.mouse-hover-content').invoke('show');
		cy.contains('Top').click();
		cy.url().should('include', 'top');
	});
});
