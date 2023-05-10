# Books API built on NodeJS & Mongo DB using JWT for auth

## API documentation

_http://[site]:[port]/api/endpoints_

## Endpoints: 
### /user
* *user/signup* [POST]
   - Sign up as a new user
   - Required json body params - ‘email’, ‘password’
* *user/login* [POST]
   - Login with existing creds
   - Required json body params - ‘email’, ‘password’

### /store
* */store* [GET] 
  - Get list of books available in store
* */store/title* [GET] 
  - Get book filtered by title
* */store* [POST]
  - Add new books to the store
  - Required json body params - ‘title’, ‘desc’, ‘price’
  - Requires authToken in header
* */store/id* [DELETE]
  - delete a book by ID (mongoDB ID) 
  - Requires authToken in header
* */store/book/id* [GET]
  - Get details of a particular book by ID
* */store/book/id* [PUT]
  - Updates book details by id
  - Required json body params - ‘title’, ‘desc’, ‘price’
  - Requires authToken in header



### NOTE: 
* API requires authorization bearer token to be provided in headers, which is generated after successful login and stored in localStorage.

* Create a file db.js in /backend/config/
    ```console
    // db.js
    module.exports = '{URL}'; 
    ```
