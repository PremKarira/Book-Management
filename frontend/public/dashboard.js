// JWT token received after successful login
// let token;

function getToken() {
  // Retrieve the token from localStorage
  token = localStorage.getItem('token');

  // Use the token for further processing
  console.log(token); // Example: Display the token in the console

}

function refreshBooks() {
  fetch('http://localhost:3000/api/store', {
    method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch books');
      }
    })
    .then(data => {
      const books = data.result;

      // Clear the existing book list
      const bookList = document.getElementById('book-list');
      bookList.innerHTML = '';

      // Iterate over the books and add them to the book list
      books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
          <button onclick="editBook('${book._id}')">Edit</button>
          <button onclick="deleteBook('${book._id}')">Delete</button>
          <strong style="font-size: 16px;">($${book.price}) - ${book.title}</strong> - <span style="font-size: 12px;">${book.desc}</span>
          `;
        bookList.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function addBook() {
  getToken()
  const form = document.getElementById('add-book-form');
  const title = form.elements.title.value;
  const desc = form.elements.desc.value;
  const price = form.elements.price.value;

  const payload = {
    title: title,
    desc: desc,
    price: price
  };

  fetch('http://localhost:3000/api/store', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to add book');
      }
    })
    .then(data => {
      // Book added successfully, do something with the response data if needed
      console.log(data);
      // Book added successfully, display confirmation message
      const confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.textContent = 'Book added successfully!';
      confirmationMessage.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


function deleteBook(bookId) {
  getToken()

  fetch(`http://localhost:3000/api/store/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to delete book');
      }
    })
    .then(data => {
      // Book deleted successfully, refresh the book list
      refreshBooks();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}



function editBook(id) {
  const editForm = document.getElementById('edit-book-form');
  const editBookId = document.getElementById('edit-book-id');
  const editBookTitle = document.getElementById('edit-book-title');
  const editBookDesc = document.getElementById('edit-book-desc');
  const editBookPrice = document.getElementById('edit-book-price');

  // Find the book in the books array by its id
  // const book = Books.find(book => book._id === id);

  // Populate the form fields with the book details
  editBookId.value = id;
  // editBookTitle.value = book.title;
  // editBookDesc.value = book.desc;
  // editBookPrice.value = book.price;

  fetch(`http://localhost:3000/api/store/book/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch book details');
      }
    })
    .then(data => {
      const book = data.result;

      // Fill the form with the book details
      editBookTitle.value = book.title;
      editBookDesc.value = book.desc;
      editBookPrice.value = book.price;

      // Show the edit form
      editForm.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Show the edit form
  editForm.style.display = 'block';
}

function updateBook() {
  const editForm = document.getElementById('edit-book-form');
  const editBookId = document.getElementById('edit-book-id');
  const editBookTitle = document.getElementById('edit-book-title');
  const editBookDesc = document.getElementById('edit-book-desc');
  const editBookPrice = document.getElementById('edit-book-price');
  id = editBookId.value
  const payload = {
    //   id: editBookId.value,
    title: editBookTitle.value,
    desc: editBookDesc.value,
    price: editBookPrice.value
  };

  fetch(`http://localhost:3000/api/store/book/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to update book');
      }
    })
    .then(data => {
      // Hide the edit form
      editForm.style.display = 'none';

      // Refresh the book list
      refreshBooks();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function cancelEdit() {
  const editForm = document.getElementById('edit-book-form');
  editForm.style.display = 'none';
}
