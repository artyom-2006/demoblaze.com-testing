class LoginModal {
    get usernameInput() {
        return cy.get('#loginusername');
    }

    get passwordInput() {
        return cy.get('#loginpassword');
    }

    get loginButton() {
        return cy.get('.btn-primary[onclick="logIn()"]');
    }

    get loginNavigationLink() {
        return cy.get('#login2');
    }

    openLoginModal() {
        this.loginNavigationLink.click();
    }

    login(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.loginButton.click();
    }

    checkLoginSuccess(username) {
        this.loginNavigationLink.should('not.be.visible');
        cy.get('#logout2').should('be.visible');
        cy.get('#logout2').should('have.text', "Log out");
        cy.get('#nameofuser').should('have.text', `Welcome ${username}`);
    }
}

export {LoginModal};