/// <reference types="Cypress" />

import HomePage from '../../pageObjects/HomePage';
import ProductsPage from '../../pageObjects/ProductsPage';
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const homePage = new HomePage();
const productPage = new ProductsPage();

Given('I open Ecommerce Page', function() {
	cy.visit(Cypress.env('url') + '/angularpractice/');
});

//when I add items to cart
When('I add items to cart', function() {
	homePage.getShopTab().click();
	this.data.productName.forEach(function(element) {
		cy.selectProduct(element);
	});
	productPage.getCheckoutButton().click();
});

//Validate the total prices
And('Validate the total prices', function() {
	let sum = 0;
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
});

//Select the country, submit and verify Thankyou message
Then('Select the country, submit and verify Thankyou message', () => {
	cy.get('.btn.btn-success').click();
	cy.get('#country').type('Ind');
	cy.get('.suggestions > :nth-child(1) > li > a', { timeout: 10000 }).each(($el, index, $list) => {
		if ($el.text() === 'India') {
			cy.wrap($el).click();
		}
	});
	cy.get('#country').should('have.value', 'India');

	//checkbox
	cy.get('#checkbox2').click({ force: true });
	cy.get('.btn.btn-success.btn-lg').click();
	cy.get('.alert').then(function(element) {
		const actualText = element.text();
		expect(actualText.includes('Success')).to.be.true;
	});
});

//fill the form on home page
When('I fill the form details', function() {
	homePage.getEditBox().type(this.data.name);
	homePage.getGender().type(this.data.gender);
});

//Then validate the forms behaviour
Then('validate the forms behaviour', function() {
	homePage.getTwoWayDataBinding().should('have.value', this.data.name);
	homePage.getEditBox().should('have.attr', 'minlength', '2');
	homePage.getEntrepreneur().should('be.disabled');
});

//And select the shop Page
And('select the shop Page', function() {
	homePage.getShopTab().click();
});
