const pool = require('../database');

const getDoctor = async (req, res) => {
    try {
        const sql = "SELECT * FROM doctors";
        const result = await pool.query(sql);
        res.json({ data: result.rows });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching doctors" });
      }
}



module.exports = getDoctor;