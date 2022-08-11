class ProductsPage {
	getCheckoutButton() { //first checkout button on products page
		return cy.get('.nav-link.btn.btn-primary');
	}

	clickFinalCheckout(){ //second checkout button on checkout page
		return cy.get('.btn.btn-success');
	}

	typeCountry(){  //types country name to get dropdown suggestions
		return cy.get('#country');
	}

	selectCountry(){ //selects country from dropdown menu
		return cy.get('.suggestions');
	}

	checksAgreebox (){ //checks the agree t&c box
		return cy.get('#checkbox2');
	}

	clicksPurchase (){ //clicks on purchase button
		return cy.get('.btn.btn-success.btn-lg');
	}
}

export default ProductsPage;
