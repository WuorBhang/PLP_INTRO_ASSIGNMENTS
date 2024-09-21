// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const { isAuthenticated } = require('../middleware/auth');

router.post('/book', isAuthenticated, appointmentController.bookAppointment);
router.post('/book', appointmentController.book);
router.put('/update/:id', appointmentController.update);
router.delete('/cancel/:id', appointmentController.cancel);
router.get('/list', appointmentController.list);
// Import patient controller
const patientController = require('../controllers/patientController');

// Register route
router.post('/register', patientController.registerPatient);

// Login route
router.post('/login', patientController.loginPatient);


module.exports = router;
