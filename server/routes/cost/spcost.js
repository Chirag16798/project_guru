const express = require("express");
const db = require("../../config/db");
const router = express.Router();

//-----------------------------Cost list API----------------------------------
router.get("/cost", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, s.selling_id, l.language_id, l.language_name, s.source_language, ln.language_name, s.target_language, s.strengh, s.cost, s.sp_inr, s.sp_usd, s.fixed FROM guru_language_tbl l LEFT JOIN guru_selling_tbl s ON s.source_language = l.language_id LEFT JOIN guru_language_tbl ln ON s.target_language = ln.language_id WHERE( s.staus = '1' AND l.status = '1' AND ln.status = '1') ORDER BY l.language_name ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//"SELECT @a:=@a + 1 serial_number, l.language_name, l.language_id, s.source_language, s.target_language, s.strengh, s.cost, s.sp_inr, s.sp_usd, s.fixed FROM guru_language_tbl l LEFT JOIN guru_selling_tbl s ON s.source_language = l.language_id OR s.target_language = l.language_id, (SELECT @a:= 0) AS a WHERE( s.staus = '1' AND l.status = '1') ORDER BY l.language_name ASC"

router.post("/search", (req, res) => {
  const sourceLanguage = req.body.sourceLanguage;
  const targetLanguage = req.body.targetLanguage;
  const workType = req.body.workType;

  db.query(
    "SELECT s.selling_id, l.language_id, l.language_name, s.source_language, ln.language_name, s.target_language, s.strengh, s.cost, s.sp_inr, s.sp_usd, s.fixed FROM guru_language_tbl l LEFT JOIN guru_selling_tbl s ON s.source_language = l.language_id LEFT JOIN guru_language_tbl ln ON s.target_language = ln.language_id WHERE( s.staus = '1' AND l.status = '1' AND ln.status = '1' AND s.source_language = ? ANd s.target_language = ? AND s.work_type = ?) ORDER BY l.language_name ASC;",
    [sourceLanguage, targetLanguage, workType],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addspcost", (req, res) => {
  const sourceLanguage = req.body.sourceLanguage;
  const targetLanguage = req.body.targetLanguage;
  const workType = req.body.workType;
  const sp_inr = req.body.sp_inr;
  const sp_usd = req.body.sp_usd;
  const fixed = req.body.fixed;
  const strength = req.body.strength;

  db.query(
    "INSERT INTO guru_selling_tbl (source_language, target_language, work_type, strengh, sp_inr, sp_usd, fixed) VALUES (?, ?, ?, ?, ?, ?, ?);",
    [sourceLanguage, targetLanguage, workType, strength, sp_inr, sp_usd, fixed],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/SampleFile/cost", (req, res) => {
  res.download("./SP_Excel.xlsx");
  console.log("downloaded");
});

router.post("/test/upload", (req, res) => {
  const file = req.body.excel_file;
  db.query(
    `INSERT INTO guru_quality_check_reviewer_tbl (reviewed_by_file) VALUES (?);`,
    [file],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("uploaded");
      }
    }
  );
});

module.exports = router;
