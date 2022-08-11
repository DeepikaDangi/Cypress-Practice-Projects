class HomePage {
	getEditBox() {
		return cy.get('div .form-group input[name="name"]');
	}
	getTwoWayDataBinding() {
		return cy.get('h4 input[name="name"]');
	}

	getGender() {
		return cy.get('div .form-group select.form-control');
	}

	getEntrepreneur() {
		return cy.get('#inlineRadio3');
	}

	getShopTab() {
		return cy.get(':nth-child(2) > .nav-link');
	}
}
export default HomePage;
