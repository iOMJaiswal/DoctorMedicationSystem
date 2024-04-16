const express = require("express");
const router = express.Router();
const createMedication = require("../controllers/createMedication");
const getMedications = require("../controllers/getMedications");
const getMedicationsByPatientId = require("../controllers/getMedicationsByPatientId");
const updateMedication = require("../controllers/updateMedication");
const deleteMedication = require("../controllers/deleteMedication"); 
const getMedicationsByMedicationId = require("../controllers/getMedicationsByMedicationId");

router.use(express.json());

router.route("/get-medications").get(getMedications);
router.route("/get-medication-by-patient-id/:id").get(getMedicationsByPatientId);
router.route("/get-medication-by-medication-id/:id").get(getMedicationsByMedicationId);
router.route("/create-medication").post(createMedication);
router.route("/update-medication/:id").put(updateMedication);
router.route("/delete-medication/:id").post(deleteMedication);

module.exports = router;
