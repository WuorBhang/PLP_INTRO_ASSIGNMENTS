// Handle form submission for login
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Placeholder: You would make an API call to authenticate the user
    console.log('Login submitted:', email, password);

    // Redirect to dashboard
    window.location.href = 'patient-dashboard.html';
});

// Handle form submission for registration
document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Placeholder: API call to register user
    console.log('Register submitted:', { name, email, password, role });

    // Redirect to login
    window.location.href = 'index.html';
});

// Handle form submission for appointment booking
document.getElementById('appointment-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Placeholder: API call to book appointment
    console.log('Appointment booked:', { doctor, date, time });

    // Redirect to patient dashboard
    window.location.href = 'patient-dashboard.html';
});
