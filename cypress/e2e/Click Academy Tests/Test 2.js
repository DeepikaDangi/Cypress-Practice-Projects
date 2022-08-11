/// <reference types = 'cypress' />

describe('My First Test Suite', () => {
	beforeEach(() => {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
	});

	it('Pop up Test', () => {
		cy.get('#alertbtn').click();
		cy.get('[value="Confirm"]').click();

		//window alert
		cy.on('window:alert', (str) => {
			expect(str).to.equal('Hello , share this practice page and share your knowledge');
		});

		//window confirm
		cy.on('window:confirm', (str) => {
			expect(str).to.equal('Hello , Are you sure you want to confirm?');
		});
	});
});
