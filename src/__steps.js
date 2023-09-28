/*
* goto console.firebase.google.com
* Create a project without google analytic
* Register app (create project config for web)
* Install firebase : npm install firebase
* Add to config file in project
* Go to Visit : Firebase > Console > Documents > Build > Authentication > Web > Get started
* Export app from firebase config file
* In login route page : Import getAuth from firebase/Auth
*   Create variable : const auth = getAuth(app)
*   Import googleAuthProvider and create - new provider ()
* Use signInWithPopup and pass auth and provider
* Activate different sign in method (google, facebook, github, twitter, etc)
* ================ more provider ================
        * Activate the auth provider. (create app, provide redirect url, Client id and secret)
*/