const express = require("express");
const router = express.Router();
const createDoctor = require("../controllers/createDoctor");
const getDoctor = require("../controllers/getDoctor");
const getDoctorById = require("../controllers/getDoctorById");
const updateDoctor = require("../controllers/updateDoctor");
const deleteDoctor = require("../controllers/deleteDoctor");


router.use(express.json());


router.route("/get-doctor").get(getDoctor);
router.route("/get-doctor/:id").get(getDoctorById);
router.route("/create-doctor").post(createDoctor);
router.route("/update-doctor/:id").put(updateDoctor);
router.route("/delete-doctor/:id").post(deleteDoctor);

module.exports = router;
