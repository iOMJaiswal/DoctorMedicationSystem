const pool = require("../database.js");

const createPatient = async (req, res) => {
  try {
    const {
      name,
      date_of_birth,
      gender,
      phone_number,
      email,
      address,
      city,
      state,
      zipcode,
      country,
      doctor_id,
    } = req.body;

    // Basic validation
    if (!name || !date_of_birth || !gender || !phone_number || !email || !doctor_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const sql = `
      INSERT INTO patients (name, date_of_birth, gender, phone_number, email, address, city, state, zipcode, country, doctor_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING *
    `;

    const values = [
      name,
      date_of_birth,
      gender,
      phone_number,
      email,
      address,
      city,
      state,
      zipcode,
      country,
      doctor_id,
    ];

    const newPatient = await pool.query(sql, values);

    res.status(201).json(newPatient.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating patient" });
  }
};

module.exports = createPatient;
