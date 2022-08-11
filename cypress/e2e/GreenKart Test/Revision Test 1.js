/// <reference types = 'cypress' />

describe('My First Test Suite', () => {
	it('First Test Case', () => {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/'); //visit site
		cy.get('input.search-keyword').type('ca'); //find search bar and type
		cy.get('.product:visible', { timeout: 3000 }).should('have.length', 4); //assert the number of products visible

		cy.get(':nth-child(1) > .product-action > button').click(); //click ATC through CY selector playground

		cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click(); //click ATC through devtools CSS selector

		//click ATC through iteration method with condition
		cy.get('.products').find('.product').each(($el, index, $list) => {
			const vegText = $el.find('h4.product-name').text();
			if (vegText.includes('Cashews')) {
				cy.wrap($el).find('button').click();
			}
		});

		//clicking on cart icon and moving to checkout
		cy.get('.cart-icon > img').click();
		cy.contains('PROCEED TO CHECKOUT').click();
		cy.get(':nth-child(14)').click();

		//working with dropdown menu
		cy.get('div select option', { force: true }).invoke('val');
	});
});
