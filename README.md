# Book Management
This project is a web application that provides a dashboard for managing books, as well as signup and login functionality. It allows users to view, add, edit, and delete books in a bookstore.


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


## Steps to get Token
* Signup
    - Test email : abcde@gmail.com
    - Test password : 12345
    <p align="center"><img src="https://github.com/PremKarira/Book-Management/blob/main/images/signup.png?raw=true"></p><br>

* Login
    - using test email and password
    <p align="center"><img src="https://github.com/PremKarira/Book-Management/blob/main/images/login.png?raw=true"></p><br>

* View Token in browser storage
    - in form of key value pair
    <p align="center"><img src="https://github.com/PremKarira/Book-Management/blob/main/images/token.png?raw=true"></p><br>

## Dashboard Walkthrough
* Books in Store
    - The dashboard displays a list of books available in the store.
    - Each book entry includes the title, description, and price.
    - To edit a book, click the "Edit" button next to the book entry.
    - To delete a book, click the "Delete" button next to the book entry.
    <p align="center"><img src="https://github.com/PremKarira/Book-Management/blob/main/images/dashboard.png?raw=true"></p><br>

* Add New Book
    - To add a new book to the store, fill in the "Title," "Description," and "Price" fields in the "Add New Book" section.
    - Click the "Add Book" button to add the book to the store.
    - The book will be displayed in the "Books in Store" section.
    <p align="center"><img src="https://github.com/PremKarira/Book-Management/blob/main/images/addbook.png?raw=true"></p><br>

* Edit Book
    - When you click the "Edit" button next to a book, the form in the "Edit Book" section will be populated with the book's details.
    - Modify the desired fields (e.g., title, description, price) in the form.
    - Click the "Update Book" button to save the changes.
    - The book's details will be updated in the "Books in Store" section.
    <p align="center"><img src="https://github.com/PremKarira/Book-Management/blob/main/images/editbook.png?raw=true"></p><br>

* Cancel Edit
    - If you wish to cancel the edit without saving any changes, click the "Cancel" button in the "Edit Book" section.
The form will be cleared, and the edit section will be hidden.
