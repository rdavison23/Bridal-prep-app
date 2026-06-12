# Testing for Bridal Prep App

### Frontend Tests

    `Signup page`
    * testing renders name, email, password and confirm password fields
    * testing renders a sign up button

    `Login page`
    * testing renders email and password fields
    * shows error when email is empty

### Backend Tests

    `server.test.js`
    * testing quiz endpoint 
    * testing checklist items

    `auth.test.js`
    * testing signup success
    * testing signup duplicate
    * testing me endoing for unauthorized user

    `routes/test/login.test.js`
    * login success test
    * password wrong test
    * server failed test