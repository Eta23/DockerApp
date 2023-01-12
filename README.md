# MyDockerApp

Basic Auth0 application used to login with your 3rd party provider like Google for example.

App is using auth0 'domain' and 'clientID' to login to auth0 Application.

NOTE: 'domain' and 'clientID' are setup in src/index.js . Since app is using old version of webpack, it is not compatilble with dotenv package in turn not able to use dynamic .env passing.

