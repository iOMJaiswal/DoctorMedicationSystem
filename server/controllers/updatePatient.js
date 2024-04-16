const pool = require("../database.js");

const updatePatient = async (req, res) => {
  try {
    const id = req.params.id;

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

    let setClause = "";
    let values = [];
    let counter = 1;

    if (name !== undefined) {
      setClause += `name = $${counter},`;
      values.push(name);
      counter++;
    }

    if (date_of_birth !== undefined) {
      setClause += `date_of_birth = $${counter},`;
      values.push(date_of_birth); // Assuming you receive date in a valid format
      counter++;
    }

    if (gender !== undefined) {
      setClause += `gender = $${counter},`;
      values.push(gender);
      counter++;
    }

    if (phone_number !== undefined) {
      setClause += `phone_number = $${counter},`;
      values.push(phone_number);
      counter++;
    }

    if (email !== undefined) {
      setClause += `email = $${counter},`;
      values.push(email);
      counter++;
    }

    if (address !== undefined) {
      setClause += `address = $${counter},`;
      values.push(address);
      counter++;
    }

    if (city !== undefined) {
      setClause += `city = $${counter},`;
      values.push(city);
      counter++;
    }

    if (state !== undefined) {
      setClause += `state = $${counter},`;
      values.push(state);
      counter++;
    }

    if (zipcode !== undefined) {
      setClause += `zipcode = $${counter},`;
      values.push(zipcode);
      counter++;
    }

    if (country !== undefined) {
      setClause += `country = $${counter},`;
      values.push(country);
      counter++;
    }

    if (doctor_id !== undefined) {
      setClause += `doctor_id = $${counter},`;
      values.push(doctor_id);
      counter++;
    }

    if (setClause !== "") {
      setClause = setClause.slice(0, -1);
    } else {
      return res.status(400).json({ message: "No fields provided for update" });
    }

    const sql = `UPDATE patients SET ${setClause} WHERE patient_id = $${counter}`;
    values.push(id);

    const updatedPatient = await pool.query(sql, values);

    if (updatedPatient.rowCount === 0) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.json({ message: "Patient updated successfully" });
  } catch (err) {
    console.error(err);

    if (err.code === "23505") {
      return res.status(409).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Error updating patient" });
  }
};

module.exports = updatePatient;
