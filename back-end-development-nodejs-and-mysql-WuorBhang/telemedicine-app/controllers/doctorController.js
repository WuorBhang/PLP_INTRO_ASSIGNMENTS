// controllers/doctorController.js
const { addDoctor, updateDoctorProfile, deleteDoctor, listDoctors } = require('../models/userModel');

exports.addDoctor = async (req, res) => {
    try {
        await addDoctor(req.body);
        res.status(201).send('Doctor added successfully!');
    } catch (error) {
        res.status(500).send('Error adding doctor');
    }
};

exports.updateProfile = async (req, res) => {
    try {
        await updateDoctorProfile(req.params.id, req.body);
        res.send('Doctor profile updated successfully');
    } catch (error) {
        res.status(500).send('Error updating doctor profile');
    }
};

exports.deleteDoctor = async (req, res) => {
    try {
        await deleteDoctor(req.params.id);
        res.send('Doctor profile deleted successfully');
    } catch (error) {
        res.status(500).send('Error deleting doctor profile');
    }
};

exports.listDoctors = async (req, res) => {
    try {
        const doctors = await listDoctors();
        res.json(doctors);
    } catch (error) {
        res.status(500).send('Error fetching doctor list');
    }
};

