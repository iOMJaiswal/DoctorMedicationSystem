const pool = require("../database.js");

const updateMedication = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      patient_id,
      medication_name,
      dosage,
      frequency,
      instructions,
      start_date,
      end_date,
    } = req.body;

    let setClause = "";
    let values = [];
    let counter = 1;

    if (patient_id !== undefined) {
      setClause += `patient_id = $${counter},`;
      values.push(patient_id);
      counter++;
    }

    if (medication_name !== undefined) {
      setClause += `medication_name = $${counter},`;
      values.push(medication_name);
      counter++;
    }

    if (dosage !== undefined) {
      setClause += `dosage = $${counter},`;
      values.push(dosage);
      counter++;
    }

    if (frequency !== undefined) {
      setClause += `frequency = $${counter},`;
      values.push(frequency);
      counter++;
    }

    if (instructions !== undefined) {
      setClause += `instructions = $${counter},`;
      values.push(instructions);
      counter++;
    }

    if (start_date !== undefined) {
      setClause += `start_date = $${counter},`;
      values.push(start_date);
      counter++;
    }

    if (end_date !== undefined) {
      setClause += `end_date = $${counter},`;
      values.push(end_date);
      counter++;
    }

    if (setClause !== "") {
      setClause = setClause.slice(0, -1);
    } else {
      return res.status(400).json({ message: "No fields provided for update" });
    }

    const sql = `UPDATE medications SET ${setClause} WHERE medication_id = $${counter}`;
    values.push(id);

    const updatedMedication = await pool.query(sql, values);

    if (updatedMedication.rowCount === 0) {
      return res.status(404).json({ message: "Medication not found" });
    }

    res.json({ message: "Medication updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating medication" });
  }
};

module.exports = updateMedication;