const express = require('express');
const { registerPatient, loginPatient } = require('../controllers/patientController');
const { authenticateToken } = require('../middlewares/auth');
const { updateProfile } = require('../controllers/patientController'); // Adjust path as needed
const router = express.Router();

router.post('/register', registerPatient);
router.post('/login', loginPatient);

// Protected routes
router.put('/profile', authenticateToken, updateProfile);
router.delete('/account', authenticateToken, deleteAccount);

module.exports = router;
