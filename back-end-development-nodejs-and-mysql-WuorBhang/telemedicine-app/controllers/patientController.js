// controllers/patientController.js
const { registerPatient, authenticatePatient, updatePatientProfile, deletePatientAccount } = require('../models/userModel');

exports.register = async (req, res) => {
    try {
        await registerPatient(req.body);
        res.status(201).send('Patient registered successfully!');
    } catch (error) {
        res.status(500).send('Error registering patient');
    }
};

exports.login = async (req, res) => {
    try {
        const patient = await authenticatePatient(req.body.email, req.body.password);

        if (!patient) {
            return res.status(401).send('Invalid email or password');
        }

        req.session.patientId = patient.id;
        res.send('Logged in successfully');
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updated = await updatePatientProfile(req.session.patientId, req.body);
        res.send('Profile updated successfully');
    } catch (error) {
        res.status(500).send('Error updating profile');
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        await deletePatientAccount(req.session.patientId);
        req.session.destroy();
        res.send('Account deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting account');
    }
};
