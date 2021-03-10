# Brian DiRito Bennie Takehome

The following repository contains my code for the Bennie takehome code-challenge. It is built with React and uses the following libraries:

* React Router Dom
* Sass

The application supports mobile, tablet, and desktop design and was styled using mobile-first design practices.

## Application Instillation

To install this application you will want to navigate to the `bennie-takehome` directory and then run `npm install`. Node Package Manager will handle the rest from there.

## ENV Variables

To simulate a Production Environment, a `.env` file is used for the API callouts. To configure this file and variable:
    1. Navigate to the root directory and create a file named `.env`
    2. Inside of said file, add the following variable:
          1. `REACT_APP_CALLOUT_URL="https://jsonplaceholder.typicode.com"`
    3. If your server is currently running, please restart it for `.env` files to take effect

Please make sure to implement this file and variable. If they are missing the application will only display the header and `Create New User` button and display the following error message in the Developer Console:
    *`Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0`

If you see either of these, errors, please see the steps above to resolve.

## Running the Application

To run the application you can simply run `npm start`. The application will be hosted at `http://localhost:3000/`.

If you have any questions, please reach out, and I will be happy to answer tha,

Enjoy!