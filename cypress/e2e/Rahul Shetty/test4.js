///<reference types = "Cypress"/>

describe('My second test suite', function() {
	it('Tests smaller functionalities', function() {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
		cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
		cy.get('#checkBoxOption1').uncheck();
		cy.get('input[type="checkbox"]').check([ 'option2', 'option3' ]);

		//static dropdown
		cy.get('select').select('option2');

		//dynamic dropdown
		cy.get('#autocomplete').type('ind')
		cy.get('.ui-menu-item div').each(($el, each, $list)=>{
			if ($el == 'India'){
				$el.click();
			}
		})

		//hidden elements
		cy.get('#displayed-text').should('be.visible');
		cy.get('#hide-textbox').click();
		cy.get('#displayed-text').should('not.be.visible')

		//radio buttons
		cy.get('input[value="radio1"]').check().should('be.checked');
	});
});
