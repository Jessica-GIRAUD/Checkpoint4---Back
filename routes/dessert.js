const express = require("express");
const router = express.Router();
const connection = require("../db");

// get all desserts

router.get("/all", async (req, res) => {
  try {
    const result = await connection.query(
      `SELECT des.*, r.time_needed, d.name AS difficulty_name
        FROM dessert AS des
        JOIN receipe AS r ON r.dessert_id = des.id
          JOIN difficulty AS d ON r.difficulty_id = d.id`
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error get dessert");
  }
});

router.get("/:dessertId", async (req, res) => {
  try {
    const { dessertId } = req.params;
    const result = await connection.query(
      `SELECT des.*, r.time_needed, d.name AS difficulty_name
        FROM dessert AS des
        JOIN receipe AS r ON r.dessert_id = des.id
          JOIN difficulty AS d ON r.difficulty_id = d.id
          WHERE des.id = ${dessertId}`
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error get dessert");
  }
});

module.exports = router;
