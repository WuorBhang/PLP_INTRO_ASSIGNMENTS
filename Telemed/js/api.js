// Placeholder for making API requests

const API_URL = 'http://localhost:3000';  // Adjust this to your backend API

// Example API function for login
async function loginUser(email, password) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    return response.json();
}

// Example API function for registering a user
async function registerUser(userData) {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });

    return response.json();
}
