// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

router.post('/add', doctorController.addDoctor);
router.put('/update/:id', doctorController.updateProfile);
router.delete('/delete/:id', doctorController.deleteDoctor);
router.get('/list', doctorController.listDoctors);

module.exports = router;
