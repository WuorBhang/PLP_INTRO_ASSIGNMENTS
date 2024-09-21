// controllers/appointmentController.js
const { bookAppointment, updateAppointment, cancelAppointment, listAppointments } = require('../models/userModel');

exports.book = async (req, res) => {
    try {
        await bookAppointment(req.body);
        res.status(201).send('Appointment booked successfully!');
    } catch (error) {
        res.status(500).send('Error booking appointment');
    }
};

exports.update = async (req, res) => {
    try {
        await updateAppointment(req.params.id, req.body);
        res.send('Appointment updated successfully');
    } catch (error) {
        res.status(500).send('Error updating appointment');
    }
};

exports.cancel = async (req, res) => {
    try {
        await cancelAppointment(req.params.id);
        res.send('Appointment canceled successfully');
    } catch (error) {
        res.status(500).send('Error canceling appointment');
    }
};

exports.list = async (req, res) => {
    try {
        const appointments = await listAppointments(req.query);
        res.json(appointments);
    } catch (error) {
        res.status(500).send('Error fetching appointments');
    }
};
