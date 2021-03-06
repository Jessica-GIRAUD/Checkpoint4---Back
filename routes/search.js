const express = require("express");
const router = express.Router();
const connection = require("../db");

// get receipes from ingredient choosen

router.get("/byingredient", async (req, res) => {
  try {
    const name = req.query.name;
    const result = await connection.query(
      `SELECT des.*, r.time_needed, d.name AS difficulty_name 
    FROM dessert AS des
    JOIN receipe AS r ON r.dessert_id = des.id
    JOIN receipe_has_ingredient AS rhi ON rhi.receipe_id = r.id
    JOIN ingredient AS i ON i.id = rhi.ingredient_id
    JOIN difficulty AS d ON r.difficulty_id = d.id
    WHERE i.name LIKE ${connection.connection.escape('%'+req.query.name+'%')}`,
      [name]
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error get dessert");
  }
});

// get receipes from name choosen

router.get("/bydessert/", async (req, res) => {
  try {
    const name = req.query.name;
    const result = await connection.query(
      `SELECT des.*, r.time_needed, d.name AS difficulty_name 
      FROM dessert AS des
        JOIN receipe AS r ON r.dessert_id = des.id
          JOIN difficulty AS d ON r.difficulty_id = d.id
      WHERE des.name LIKE ${connection.connection.escape('%'+req.query.name+'%')} ;`
    );
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error get dessert");
  }
});

module.exports = router;
