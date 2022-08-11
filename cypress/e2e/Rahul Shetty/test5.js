///<reference types = "Cypress"/>

describe('My second test suite', function() {
	it('Tests smaller functionalities', function() {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
		cy.get('#alertbtn').click()
		//window:alert
		cy.on('window:alert', (str)=>{
			expect(str).to.equal('Hello , share this practice page and share your knowledge')
		})

		//window:confirm
		cy.get('#confirmbtn').click()
		cy.on('window:confirm', (string)=>{
			expect(string).to.equal('Hello , Are you sure you want to confirm?')
		})
		
		//handle child tab
		cy.get('#opentab').invoke('removeAttr', 'target').click()
		
		cy.go('back')
		
	});
});
