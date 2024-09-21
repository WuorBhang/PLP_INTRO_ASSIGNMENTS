// app.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: process.env.SECRET_KEY,  // Use the secret key from environment variables
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Change to true in production for HTTPS
}));

// Routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
