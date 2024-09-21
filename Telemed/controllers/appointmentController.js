const appointmentModel = require('../models/appointmentModel');

// Book a new appointment
const bookAppointment = (req, res) => {
    const { doctorId, patientId, date, time } = req.body;
    const newAppointment = { doctorId, patientId, date, time };
    
    appointmentModel.bookAppointment(newAppointment, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Appointment booked successfully' });
    });
};

// Get appointment by ID
const getAppointmentById = (req, res) => {
    const { id } = req.params;
    
    appointmentModel.getAppointmentById(id, (err, result) => {
        if (err || result.length === 0) return res.status(404).json({ error: 'Appointment not found' });
        res.status(200).json(result[0]);
    });
};

// Get all appointments by doctor or patient
const getAppointmentsByUser = (req, res) => {
    const { userId, role } = req.params;
    
    appointmentModel.getAppointmentsByUser(userId, role, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Update an appointment
const updateAppointment = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    appointmentModel.updateAppointment(id, updatedData, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Appointment updated successfully' });
    });
};

// Cancel an appointment
const cancelAppointment = (req, res) => {
    const { id } = req.params;
    
    appointmentModel.cancelAppointment(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Appointment canceled successfully' });
    });
};

module.exports = { bookAppointment, getAppointmentById, getAppointmentsByUser, updateAppointment, cancelAppointment };
