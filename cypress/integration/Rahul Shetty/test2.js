/// <reference types="Cypress" />

describe('My Second Test Suite', function() {
	it('My Second Test case', function() {
		cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);
		//selenium get hit url in browser, cypress get acts like findElement of selenium

		//Parent child chaining
		cy.get('.products').as('productLocator');

		cy.get('@productLocator').find('.product').each(($el, index, $list) => {
			const textVeg = $el.find('h4.product-name').text();
			if (textVeg.includes('Cashews')) {
				cy.wrap($el).find('button').click();
			}

			//assert if logo text is correctly displayed
			// cy.get('.brand').should('have.text', 'GREENKART');

			// //this is to print in logs
			// cy.get('.brand').then(function(logoelement) {
			// 	cy.log();
			// });

			cy.get('.cart-icon > img').click();
			cy.contains('PROCEED TO CHECKOUT').click();
			cy.contains('Place Order').click();
		});
	});
});
