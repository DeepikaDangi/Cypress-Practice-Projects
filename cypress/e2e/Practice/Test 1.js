/// <reference types = 'cypress' />

describe('My First Test Suite', () => {
	it('First Test Case', () => {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(5000);
		// cy.get('.product:visible', { timeout: 6000 }).should('have.length', 4);
		// cy.get('.products').find('.product').should('have.length', 4);

		//adding product statically
		// cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click();
		// cy.get('.cart-icon > img').click();

		//adding product dynamically
		cy.get('.products').find('.product').each(($el, index, $list) => {
			const textVeg = $el.find('h4.product-name').text();
			if (textVeg.includes('Cashews')) {
				cy.wrap($el).find('button').click();
			}
		});

		cy.get('.brand').should('have.text', 'GREENKART');

		cy.get('.cart-icon > img').click();
		cy.contains('PROCEED TO CHECKOUT').click();
		cy.get(':nth-child(14)').click();
	});
});
