const express = require("express");
const router = express.Router();
const createPatient = require("../controllers/createPatient");
const getPatients = require("../controllers/getPatients");
const getPatientByDoctorId = require("../controllers/getPatientByDoctorId");
const updatePatient = require("../controllers/updatePatient");
const deletePatient = require("../controllers/deletePatient"); 
const getPatientByPatientId = require("../controllers/getPatientByPatientId");

router.use(express.json());

router.route("/get-patients").get(getPatients);
router.route("/get-patient-by-doctor-id/:doctor_id").get(getPatientByDoctorId);
router.route("/get-patient-by-patient-id/:patient_id").get(getPatientByPatientId);
router.route("/create-patient").post(createPatient);
router.route("/update-patient/:id").put(updatePatient);
router.route("/delete-patient/:id").post(deletePatient);

module.exports = router;
