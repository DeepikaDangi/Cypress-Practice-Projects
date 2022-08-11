/// <reference types = 'cypress' />

describe('My First Test Suite', () => {
	beforeEach(() => {
		cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
	});

	it('Web Table Test', () => {
		cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
			const text = $el.text();
			if (text.includes('Python')) {
				cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
					const priceText = price.text();
					expect(priceText).to.equal('25');
				});
			}
		});

		// cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
		// 	const text = $el.text();
		// 	if (text === 'Python') {
		// 		cy.get('tr td:nth-child(2)').eq(index).next();
		// 	}
		// });
	});
});
