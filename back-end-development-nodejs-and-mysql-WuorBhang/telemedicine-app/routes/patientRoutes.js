// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

router.post('/register', patientController.register);
router.post('/login', patientController.login);
router.put('/update', patientController.updateProfile);
router.delete('/delete', patientController.deleteAccount);

module.exports = router;
