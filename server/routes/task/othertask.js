const express = require("express");
const db = require("../../config/db");
const router = express.Router();

router.get("/task/other/:userSelected/:referenceSelected", (req, res) => {
  const { userSelected, referenceSelected } = req.params;

  const query = ``;

  db.query(query, [userSelected, referenceSelected], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
