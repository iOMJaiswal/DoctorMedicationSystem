const express = require("express");
const cors = require("cors");
const pool = require("./database");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isUserAuth = require("./auth");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
const PORT = process.env.PORT;

// ! POST /login - Login Doctor (Login)
app.use("/api/doctors", require("./routes/login"));

// ! GET /get-doctors - Get all doctors (Read)
// ! GET /get-doctor/:id - Get a doctor by ID (Read)
// ! POST /create-doctor - Create a doctor (Create or Register)
// ! PUT /update-doctor/:id - Update a doctor (Update)
// ! POST /delete-doctor/:id - Simulate DELETE using POST (Delete)
app.use("/api/doctors", require("./routes/doctor_crud"));

// ! GET /get-patients - Get all doctors (Read)
// ! GET /get-patient-by-doctor-id/:doctor_id (Read)
// ! GET /get-patient-by-patient-id/:patient_id (Read)
// ! POST /create-patient - Create a doctor (Create or Register)
// ! PUT /update-patient/:id - Update a doctor (Update)
// ! POST /delete-patient/:id - Simulate DELETE using POST (Delete)
app.use("/api/patients", require("./routes/patient_crud"));

// ! GET /get-medications - Get all medications (Read)
// ! GET /get-medication-by-patient-id/:id - (Read)
// ! GET /get-medication-by-medication-id/:id - (Read)
// ! POST /create-medication - Create a medications (Create or Register)
// ! PUT /update-medication/:id - Update a medications(Update)
// ! POST /delete-medication/:id - Simulate DELETE using POST (Delete)
app.use("/api/medications", require("./routes/medication_crud"));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
