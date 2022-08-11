///<reference types = 'Cypress'/>

describe('Verifying variables, cypress commands and jquery commands', () => {
	it('Navigating to specific product pages', () => {
		cy.visit('https://automationteststore.com/');
		cy.get("a[href*= 'product/category&path=']").contains('Makeup').click();
		// cy.get("a[href*= 'product/category&path=']").contains('Skincare').click();

		// const header = cy.get('.maintext');
		// cy.log(header.text());

		cy.get('.maintext').then(($headerText) => {
			const headerText = $headerText.text();
			cy.log(headerText);
			expect(headerText).is.eq('Makeup');
		});
	});

	it.only('Validate properties of the Contact Us page', () => {
		cy.visit('https://automationteststore.com/index.php?rt=content/contact');

		//uses cypress commands and chaining
		cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
		cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_12').should('contain', 'Email');
		cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_13').should('contain', 'Enquiry');

		//jquery approach
		// cy.contains('#ContactUsFrm', 'Contact Us Form').then((text) => {
		//     const firstNameText
		// });
		//embeded commands(closure)
	});
});
