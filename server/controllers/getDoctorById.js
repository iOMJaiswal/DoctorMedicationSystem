const pool = require('../database');

const getDoctorById = async (req, res) => {
    try {
      const id = req.params.id;
      const sql = "SELECT * FROM doctors WHERE doctor_id = $1";
      const result = await pool.query(sql, [id]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      res.json({ data: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching doctor" });
    }
  }

module.exports = getDoctorById;
