const express = require('express');
const { bookAppointment, getAppointmentById, getAppointmentsByUser, updateAppointment, cancelAppointment } = require('../controllers/appointmentController');

const router = express.Router();

router.post('/book', bookAppointment);                 // Book a new appointment
router.get('/:id', getAppointmentById);                // Get appointment by ID
router.get('/user/:userId/:role', getAppointmentsByUser); // Get all appointments by doctor or patient
router.put('/:id', updateAppointment);                 // Update appointment details
router.delete('/:id', cancelAppointment);              // Cancel an appointment

module.exports = router;
