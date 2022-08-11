/// <reference types="Cypress" />

import HomePage from '../pageObjects/HomePage';
import ProductsPage from '../pageObjects/ProductsPage';

describe('My Second Test Suite', function() {
	before(function() {
		// runs once before all tests in the block
		cy.fixture('example').then(function(data) {
			this.data = data;
		});
	});

	it('should fill the attribute fields', function() {
		const homePage = new HomePage();
		const productPage = new ProductsPage();
		cy.visit(Cypress.env('url') + '/angularpractice/');

		homePage.getEditBox().type(this.data.name);
		homePage.getGender().type(this.data.gender);
		homePage.getTwoWayDataBinding().should('have.value', this.data.name);
		homePage.getEditBox().should('have.attr', 'minlength', '2');
		homePage.getEntrepreneur().should('be.disabled');
		// cy.pause();
		///navigating to shop
		homePage.getShopTab().click();
		this.data.productName.forEach(function(element) {
			cy.selectProduct(element);
		});

		productPage.getCheckoutButton().click();
		let sum = 0;
		//validate the total of shopping cart
		cy
			.get('tr td:nth-child(4) > strong')
			.each(($el, index, $list) => {
				const actualText = $el.text();
				let result = actualText.split(' ');
				sum += Number(result[1].trim());
			})
			.then(() => {
				cy.log(sum);
			});

		//validate total of all products with the total before checkout

		cy.get('h3 >strong').then(($el) => {
			let actualTextTotal = $el.text();
			let actualNum = actualTextTotal.split(' ');
			expect(Number(actualNum[1].trim())).to.equal(sum);
		});
		cy.get('.btn.btn-success').click();
	});

	it('should select country and complete checkout', () => {
		cy.get('#country').type('Ind');
		// Cypress.config('pageLoadTimeout', 20000); //cy will only wait till it find the element upto a max of set time in sec
		// cy.wait(20000); //cypress will explicitly wait for 20 sec
		cy.get('.suggestions > :nth-child(1) > li > a', { timeout: 10000 }).each(($el, index, $list) => {
			if ($el.text() === 'India') {
				cy.wrap($el).click();
			}
		});
		cy.get('#country').should('have.value', 'India');

		//checkbox
		cy.get('#checkbox2').click({ force: true });
		cy.get('.btn.btn-success.btn-lg').click();

		//validate alert
		// cy.get('.alert').should('have.text', 'Thank you! Your order will be delivered in next few weeks'); --won't work cz the text has sonme extra spaces
		cy.get('.alert').then(function(element) {
			const actualText = element.text();
			expect(actualText.includes('Success')).to.be.true;
		});
	});
});
