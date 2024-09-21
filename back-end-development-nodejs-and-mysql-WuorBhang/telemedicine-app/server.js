const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 3600000 } // 1-hour session
}));

// Patient Controller (Controller Logic)
const patientController = {
    registerPatient: (req, res) => {
        // Logic for patient registration
        res.send('Patient registered');
    },
    loginPatient: (req, res) => {
        // Logic for patient login
        res.send('Patient logged in');
    },
};

// Doctor Controller (Controller Logic)
const doctorController = {
    addDoctor: (req, res) => {
        // Logic for adding a doctor
        res.send('Doctor added');
    },
    listDoctors: (req, res) => {
        // Logic to list doctors
        res.send('List of doctors');
    },
};

// Appointment Controller (Controller Logic)
const appointmentController = {
    bookAppointment: (req, res) => {
        // Logic for booking an appointment
        res.send('Appointment booked');
    },
    cancelAppointment: (req, res) => {
        // Logic for canceling an appointment
        res.send('Appointment canceled');
    },
};

// Routes

// Patients Routes
app.post('/patients/register', patientController.registerPatient);
app.post('/patients/login', patientController.loginPatient);

// Doctors Routes
app.post('/doctors/add', doctorController.addDoctor);
app.get('/doctors/list', doctorController.listDoctors);

// Appointments Routes
app.post('/appointments/book', appointmentController.bookAppointment);
app.post('/appointments/cancel', appointmentController.cancelAppointment);

// Basic Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
