// script.js

function registerUser() {
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate form data (you may add more validation)
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    // Display registered user information (you would typically send this data to a server for storage)
    alert('Registration successful!\n\nUsername: ' + username + '\nEmail: ' + email);
    
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
