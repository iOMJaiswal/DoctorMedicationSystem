const pool = require("../database");

const deleteDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = "DELETE FROM doctors WHERE doctor_id = $1";
    await pool.query(sql, [id]);

    res.json({ message: "Doctor deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting doctor" });
  }
};

module.exports = deleteDoctor;
