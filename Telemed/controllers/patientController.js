const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const patientModel = require('../models/patientModel');

const registerPatient = (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        const newPatient = { name, email, password: hash };
        patientModel.createPatient(newPatient, (error, result) => {
            if (error) return res.status(500).json({ error: error.message });
            res.status(201).json({ message: 'Patient registered successfully' });
        });
    });
};

const loginPatient = (req, res) => {
    const { email, password } = req.body;
    patientModel.findPatientByEmail(email, (err, results) => {
        if (err || results.length === 0) return res.status(404).json({ error: 'Patient not found' });
        
        const patient = results[0];
        bcrypt.compare(password, patient.password, (error, isMatch) => {
            if (error || !isMatch) return res.status(403).json({ error: 'Invalid credentials' });
            
            const token = jwt.sign({ id: patient.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        });
    });
};

exports.updateProfile = (req, res) => {
    // Your logic for updating the profile
    res.json({ message: 'Profile updated successfully' });
};


module.exports = { registerPatient, loginPatient };
