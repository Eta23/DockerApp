describe("Verify Browser Stack Home Page", () => {
  it("log in to React User Authentication app with email and password", () => {
    cy.visit("http://localhost:3000");
    // assert Log in page have text "React User Authentication"
    cy.get('.appName').should("have.text", "React User Authentication")
    cy.get('.btn').should("have.text", "Log In").click();

    //confirm redirection to Authentication page, fill in email and pass and click continue
    cy.origin("https://dev-3l6yvehtxci8kqg7.us.auth0.com/", () => {
      cy.get('#username').type(Cypress.env("auth_username"))
      cy.get('#password').type(Cypress.env("auth_password"))
      cy.get('button[name="action"]').click();
    });
    //confirm you are logged in and log out
    cy.get('.btn').should("have.text", "Log Out");
    cy.get('#userInfo1').contains("Name")
    cy.get('.btn').should("have.text", "Log Out").click();

    //verify you're on Log In page
    cy.get('.btn').should("have.text", "Log In").should("be.visible");
  });
});