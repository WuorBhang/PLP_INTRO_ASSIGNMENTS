// models/userModel.js
const db = require('./db');
const bcrypt = require('bcrypt');

// Register a new patient
async function registerPatient(patientData) {
    const { first_name, last_name, email, password, phone, date_of_birth, gender, address } = patientData;
    const password_hash = await bcrypt.hash(password, 10);

    const [result] = await db.query(
        `INSERT INTO Patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [first_name, last_name, email, password_hash, phone, date_of_birth, gender, address]
    );

    return result;
}

// Authenticate patient
async function authenticatePatient(email, password) {
    const [rows] = await db.query(`SELECT * FROM Patients WHERE email = ?`, [email]);

    if (rows.length === 0) return null;

    const patient = rows[0];
    const isMatch = await bcrypt.compare(password, patient.password_hash);
    
    return isMatch ? patient : null;
}

// Update patient profile
async function updatePatientProfile(patientId, updatedData) {
    const fields = Object.keys(updatedData).map(field => `${field} = ?`).join(', ');
    const values = Object.values(updatedData);

    await db.query(`UPDATE Patients SET ${fields} WHERE id = ?`, [...values, patientId]);
}

// Delete patient account
async function deletePatientAccount(patientId) {
    await db.query(`DELETE FROM Patients WHERE id = ?`, [patientId]);
}

// Functions for doctors and appointments can be defined similarly...
module.exports = {
    registerPatient,
    authenticatePatient,
    updatePatientProfile,
    deletePatientAccount
};
