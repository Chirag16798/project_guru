const express = require("express");
const db = require("../../config/db");
const router = express.Router();

router.get("/task/reminder", (req, res) => {
  db.query(``, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
