const express = require('express');
const { addDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor } = require('../controllers/doctorController');

const router = express.Router();

router.post('/add', addDoctor);           // Add a doctor
router.get('/', getAllDoctors);           // Get all doctors
router.get('/:id', getDoctorById);        // Get a single doctor by ID
router.put('/:id', updateDoctor);         // Update doctor information
router.delete('/:id', deleteDoctor);      // Delete a doctor

module.exports = router;
