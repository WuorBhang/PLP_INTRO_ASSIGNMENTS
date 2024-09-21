const db = require('../config/db');

const createPatient = (patient, callback) => {
    const query = 'INSERT INTO patients SET ?';
    db.query(query, patient, callback);
};

const findPatientByEmail = (email, callback) => {
    const query = 'SELECT * FROM patients WHERE email = ?';
    db.query(query, [email], callback);
};

// More methods for read, update, and delete

module.exports = { createPatient, findPatientByEmail };
