// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//******Customized Command for Login******//
import 'cypress-localstorage-commands';

Cypress.Commands.add('login', (email, password) => {
	before(() => {
		cy.fixture('example', (user) => {
			this.user = user;
		});
	});
	it('Custom Command Test', function() {
		cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F');
		cy.get('#Email').type(this.user.email); //type email address
		cy.get('#Password').type(this.user.password); //type password
		cy.get('button[type="submit"]').contains('Log in').click();
	});
});

//command to select product
Cypress.Commands.add('selectProduct', (productName) => {
	cy.get('h4.card-title').each(($el, index, $list) => {
		if ($el.text().includes(productName)) {
			cy.get('button.btn.btn-info').eq(index).click();
		}
	});
});
