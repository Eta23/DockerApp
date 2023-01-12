describe("Verify Browser Stack Home Page", () => {
  it("log in to React User Authentication app with email and password", () => {
    cy.visit("http://localhost:3000");
    //cy.wait(500);
    // assert Log in page have text "React User Authentication"
    cy.get('.appName').should("have.text", "React User Authentication")
    cy.get('.btn').should("have.text", "Log In").click();

    /*confirm redirection to Authentication page, fill in email and pass and click continue

    
    cy.get('.btn').should("have.text", "Log Out");
    cy.get('#userInfo1').contains("ana.milenicbg@gmail.com")
    cy.get('.btn').should("have.text", "Log Out").click();

    //verify you're on Log In page
    cy.get('.btn').should("have.text", "Log In").should("be.visible");
    */

    cy.wait(3000);

    var urlRedirects = []

    cy.on('url:changed', (url) => {
      urlRedirects.push(url)
    })

    cy.visit(urlRedirects)
  });
});