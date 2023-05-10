function signup(event) {

  event.preventDefault();
  // Get the email and password from the input fields
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Create a request payload
  const payload = {
    email: email,
    password: password
  };

  // Send a POST request to the '/user/signup' endpoint
  fetch('http://localhost:3000/api/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (response.ok) {
        // Redirect to the dashboard or display a success message
        return response.json();
      } else {
        // Display an error message
        throw new Error('Signup failed');
      }
    })
    .then(data => {
      // Redirect to the dashboard or display a success message
      window.location.href = '/login';
    })
    .catch(error => {
      console.error('Error:', error);
    });
}