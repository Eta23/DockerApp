describe('login', () => {
    it('should successfully log into our app', () => {
      cy.login()
        .then((resp) => {
          return resp.body;
        })
        .then((body) => {
          const {access_token, expires_in, id_token} = body;
          const auth0State = {
            nonce: '',
            state: 'some-random-state'
          };
          const callbackUrl = "http://localhost:3000";
          cy.visit(callbackUrl, {
            onBeforeLoad(win) {
              win.document.cookie = 'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
            }
          });
        })
    });
  });