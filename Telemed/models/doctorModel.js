const db = require('../config/db');

// Create a new doctor
const createDoctor = (doctor, callback) => {
    const query = 'INSERT INTO doctors SET ?';
    db.query(query, doctor, callback);
};

// Get a list of all doctors
const getAllDoctors = (callback) => {
    const query = 'SELECT * FROM doctors';
    db.query(query, callback);
};

// Get a single doctor by ID
const getDoctorById = (id, callback) => {
    const query = 'SELECT * FROM doctors WHERE id = ?';
    db.query(query, [id], callback);
};

// Update a doctor's information
const updateDoctor = (id, updatedData, callback) => {
    const query = 'UPDATE doctors SET ? WHERE id = ?';
    db.query(query, [updatedData, id], callback);
};

// Delete a doctor
const deleteDoctor = (id, callback) => {
    const query = 'DELETE FROM doctors WHERE id = ?';
    db.query(query, [id], callback);
};

module.exports = { createDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor };
