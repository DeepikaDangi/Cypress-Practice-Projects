/// <reference types = 'cypress' />

const { should } = require('chai');

describe('select and add a tee to cart and checkout', () => {
	before(() => {
		cy.clearLocalStorageSnapshot();
	});

	beforeEach(() => {
		cy.restoreLocalStorage();
	});

	afterEach(() => {
		cy.saveLocalStorage();
	});

	it('selects the category', () => {
		cy.visit('http://automationpractice.com/index.php');
		cy.get('.sf-with-ul').contains('Women').click();
		cy.get(':nth-child(2) > .subcategory-image > .img > .replace-2x').click();
		cy.get('.product-container').should('have.length', 5);
		cy.get('#color_43').click();
	});

	it('adds to cart', () => {
		cy.get('#group_1').select('M').should('have.value', '2');
		cy.get('.icon-plus').click();
		cy.get('#quantity_wanted').should('have.value', '2');
		cy.get('.exclusive > span').click();
	});

	it('proceeds to checkout', () => {
		cy.wait(10000);
		cy.get('div#layer_cart').invoke('show');
		// cy.get('#layer_cart_product_quantity').should('have.value', '2');
		cy.get('.cross').click();
		// cy.find('.button-medium').click();
	});

	// it('validates the total of cart', () => {
	// 	cy.get('#total_product').should((element) => {
	// 		const text = element.text();
	// 		cy.log(text);
	// 	});
	// });
});
