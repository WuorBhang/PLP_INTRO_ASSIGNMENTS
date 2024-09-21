const db = require('../config/db');

// Create a new appointment
const bookAppointment = (appointment, callback) => {
    const query = 'INSERT INTO appointments SET ?';
    db.query(query, appointment, callback);
};

// Get appointment by ID
const getAppointmentById = (id, callback) => {
    const query = 'SELECT * FROM appointments WHERE id = ?';
    db.query(query, [id], callback);
};

// Get all appointments for a specific doctor or patient
const getAppointmentsByUser = (userId, role, callback) => {
    let query;
    if (role === 'doctor') {
        query = 'SELECT * FROM appointments WHERE doctorId = ?';
    } else if (role === 'patient') {
        query = 'SELECT * FROM appointments WHERE patientId = ?';
    }
    db.query(query, [userId], callback);
};

// Update an appointment
const updateAppointment = (id, appointmentData, callback) => {
    const query = 'UPDATE appointments SET ? WHERE id = ?';
    db.query(query, [appointmentData, id], callback);
};

// Delete (Cancel) an appointment
const cancelAppointment = (id, callback) => {
    const query = 'DELETE FROM appointments WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = { bookAppointment, getAppointmentById, getAppointmentsByUser, updateAppointment, cancelAppointment };
