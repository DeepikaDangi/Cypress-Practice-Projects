/// <reference types="cypress" />

import PageObjectHomePage from './PageObject/PageObjectHomepage';

describe('First test', () => {
	beforeEach(function (){
		//has login data and runs before all test cases
		cy.fixture('example').then(function(data){
			this.data = data;
			console.log(this.name)
		})
	})

	it('visits site', () => {
		cy.visit('https://automationteststore.com/');
		cy.get('#customer_menu_top >li >a').click();
	});

	it('fills the login details', function(){
		const homePage = new PageObjectHomePage();

		homePage.getLoginName().type(this.data.name);
		homePage.getPassword().type(this.data.password);
		homePage.getLoginbutton().click();
	})

})
