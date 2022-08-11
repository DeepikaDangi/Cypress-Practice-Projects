///<reference types = 'Cypress'/>

describe('Test Contact Us Form Via Automation Test Store', () => {
	it('Should be able to submit a successful submission via contact us form', () => {
		cy.visit('https://automationteststore.com/');
		cy.get('a[href$="contact"]').click().then(function(itemHeaderText) {
			// cy.log('Clicked on the button ' + itemHeaderText.text());
		});
		cy.get('#ContactUsFrm_first_name').type('John');
		cy.get('#ContactUsFrm_email').type('john@email.com');
		cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
		cy.get('#ContactUsFrm_enquiry').type('Hello World');
		cy.get('button[title="Submit"]').click();
		cy
			.get('.mb40 > :nth-child(3)')
			.should('have.text', 'Your enquiry has been successfully sent to the store owner!');
		cy.log('Test has completed!');
	});

	// it.only('random tests for practice', () => {
	// 	cy.visit('https://automationteststore.com/');
	// 	cy.get('a[href*="product/category&path="]').contains('Makeup').click();
	// 	cy.get('a[href*="product/product&product_id="]').click('.productcart');
	// });
});
