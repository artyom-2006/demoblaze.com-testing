import {LoginModal} from "./pageObjects/LoginModal";

const loginModal = new LoginModal();
const data = {
    username: "Joyce",
    password: "IDontKnow"
};

describe('demoblaze tests', () => {
    it('Test login with valid credentials', () => {
        cy.visit('https://demoblaze.com/');

        // Log In
        loginModal.openLoginModal();
        cy.wait(500);
        loginModal.login(data.username, data.password);
        cy.wait(500);
        loginModal.checkLoginSuccess(data.username);
    });

    it('Add product to the cart and check it exists or not', () => {
        cy.visit('https://demoblaze.com/prod.html?idp_=6');

        // Click Add to cart button
        cy.get('.btn-success').click();

        // Click Cart link in the navbar
        cy.get('.nav-link[href="cart.html"]').click();

        // Check URL
        cy.url().should('include', 'cart.html');

        // 
        cy.get('.success td:nth-child(2)').should('have.text', "Sony xperia z5");
        cy.get('.success td:nth-child(3)').should('have.text', "320");
    });
});