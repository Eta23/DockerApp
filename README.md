# MyDockerApp

Basic Auth0 application used to login with your 3rd party provider like Google for example.

App is using auth0 'domain' and 'clientID' to login to auth0 Application.

NOTE: 'domain' and 'clientID' are setup in src/index.js . Since app is using old version of webpack, it is not compatilble with dotenv package in turn not able to use dynamic .env passing.

### TESTS:

We have two e2e tests in cypress/e2e. 
For these tests to be succesfull we need to setup env variables/secrets in cypress.env.json (remove -example from existing one):

  auth_audience: For this one, you will have to replace my_tenant.auth0.com with your own Auth0 domain (e.g., blog-samples.auth0.com). You can find this information on the Auth0 application you created before.

  auth_url: Here, you will have to do the same thing. You will have to replace my_tenant.auth0.com with your own Auth0 domain.

  auth_client_id: In this case, you will have to use the Client ID property of the Auth0 Application you created before.

  auth_client_secret: Lastly, for this property, you will have to use the Client Secret property of the Auth0 Application you created.

  For the last two properties (auth_username and auth_password) you will have to use the credentials used while creating the end-to-end testing user.

You can obtain these from Auth0 App admin.

1. test - login-request:

This test will do a simple POST request to login to Auth0 using predefined user.

2. test - ui-test:

This will test UI functionality. It will use auth_username and auth_password passed from cypress.env.json file. 
