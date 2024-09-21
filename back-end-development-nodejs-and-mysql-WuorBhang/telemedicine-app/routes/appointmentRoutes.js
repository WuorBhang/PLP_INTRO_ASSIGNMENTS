// routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.post('/book', appointmentController.book);
router.put('/update/:id', appointmentController.update);
router.delete('/cancel/:id', appointmentController.cancel);
router.get('/list', appointmentController.list);

module.exports = router;
