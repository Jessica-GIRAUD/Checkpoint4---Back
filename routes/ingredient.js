const express = require("express");
const router = express.Router();
const connection = require("../db");

// get all ingredients

router.get("/all", async (req, res) => {
  try {
    const result = await connection.query(`SELECT * FROM ingredient`);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error get dessert");
  }
});

// get ingredient by receipe

router.get("/:dessertId", async (req, res) => {
  try {
    const { dessertId } = req.params;
    const result = await connection.query(
      `SELECT i.* 
      FROM ingredient AS i
      JOIN receipe_has_ingredient AS rhi ON i.id = rhi.ingredient_id
      JOIN receipe AS r ON r.id = rhi.receipe_id
      JOIN dessert as d ON d.id = r.dessert_id
      WHERE d.id = ?
      `
      , [dessertId]);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error get dessert");
  }
});

module.exports = router;
