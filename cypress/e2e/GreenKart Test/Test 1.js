/// <reference types = 'cypress' />

describe('My First Test Suite', () => {
	it('First test', () => {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);
		cy.get('.product:visible').should('have.length', 4);

		//parent child chaining
		cy.get('.products').as('productName');
		cy.get('@productName').find('.product').should('have.length', 4);
		cy.get('@productName').find('.product').eq(1).contains('ADD TO CART').click();

		//iterate over an array of elements and select them dynamically
		cy.get('@productName').find('.product').each(($el, index, $list) => {
			const textVeg = $el.find('h4.product-name').text();
			if (textVeg.includes('Cashews')) {
				cy.wrap($el).find('button').click();
			}
		});

		//assert if logo is correctly displayed
		cy.get('.brand').should('have.text', 'GREENKART');

		cy.get('.brand').then((logElem) => {
			cy.log(logElem.text());
		});
	});
});
