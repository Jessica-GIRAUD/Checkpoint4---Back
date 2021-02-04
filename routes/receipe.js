const express = require("express");
const router = express.Router();
const connection = require('../db');

// get receipe by dessert

router.get("/:dessertId", async (req, res) => {
  try {
    const { dessertId } = req.params;
    const result = await connection.query(
      `SELECT step.description
      FROM step 
      JOIN receipe AS r ON step.receipe_id = r.id
      JOIN dessert AS d ON d.id = r.dessert_id
      WHERE d.id = ?
      `, [dessertId]
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error get dessert");
  }
});

module.exports = router;
