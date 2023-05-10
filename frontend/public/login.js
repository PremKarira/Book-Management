function navigateToSignup(event) {

    event.preventDefault();
    window.location.href = '/signup';
}

function login(event) {

    event.preventDefault();
    // Get the email and password from the input fields
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Create a request payload
    const payload = {
        email: email,
        password: password
    };
    // Send a POST request to the '/user/login' endpoint
    fetch('http://localhost:3000/api/user/login', {
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
                return response.json().then(errorData => {
                    throw new Error(errorData.message); // Throw an error with the message from the backend
                });
            }
        })
        .then(data => {
            console.log(data.authToken)
            // Extract the JWT token from the response headers
            const token = data.authToken;
            //   console.log(token)
            // Save the token to local storage
            localStorage.setItem('token', token);
            // Redirect to the dashboard or display a success message
            window.location.href = '/dashboard';
        })
        .catch(error => {
            // Display an error message
            console.error('Error:', error);
        });
}