const pool = require("../database.js");

const getPatientByDoctorId = async (req, res) => {
  try {
    const doctor_id = req.params.doctor_id;
    const sql = "SELECT * FROM patients WHERE doctor_id = $1";
    const values = [doctor_id];
    const patient = await pool.query(sql, values);

    if (patient.rowCount === 0) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json(patient.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching patient" });
  }
};

module.exports = getPatientByDoctorId;
