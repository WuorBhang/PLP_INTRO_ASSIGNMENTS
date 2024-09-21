const doctorModel = require('../models/doctorModel');

// Add a new doctor
const addDoctor = (req, res) => {
    const { name, specialization, availability } = req.body;
    const newDoctor = { name, specialization, availability };
    
    doctorModel.createDoctor(newDoctor, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Doctor added successfully' });
    });
};

// Get a list of all doctors
const getAllDoctors = (req, res) => {
    doctorModel.getAllDoctors((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Get a single doctor by ID
const getDoctorById = (req, res) => {
    const { id } = req.params;
    doctorModel.getDoctorById(id, (err, result) => {
        if (err || result.length === 0) return res.status(404).json({ error: 'Doctor not found' });
        res.status(200).json(result[0]);
    });
};

// Update a doctor's information
const updateDoctor = (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    doctorModel.updateDoctor(id, updatedData, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Doctor updated successfully' });
    });
};

// Delete a doctor (Deactivate or remove)
const deleteDoctor = (req, res) => {
    const { id } = req.params;
    
    doctorModel.deleteDoctor(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Doctor deleted successfully' });
    });
};

module.exports = { addDoctor, getAllDoctors, getDoctorById, updateDoctor, deleteDoctor };
