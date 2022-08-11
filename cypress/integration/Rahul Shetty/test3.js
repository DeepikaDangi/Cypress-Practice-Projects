///<reference types = "Cypress"/>

describe('My first test suite', function() {
	it('Visit the website', function() {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		// cy.get('.product:visible').should('have.length', 4);

		//parent-child
		cy.get('.products').find('.product').should('have.length', 4);
		// cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();

		cy.get('.products').find('.product').each(($el, index, $list) => {
			const textVeg = $el.find('h4.product-name').text();
			if (textVeg.includes('Cashews')) {
				cy.wrap($el).find('button').click();
			}
		});

		// cy.get('.brand').should('have.text', 'GREENKART');

		// cy.get('.brand').then(function(logoelement) {
		// 	cy.log(logoelement.text());
		// });

		cy.get('.cart-icon > img').click();
		cy.contains('PROCEED TO CHECKOUT').click();
		cy.get(':nth-child(14)').click();
	});
});
