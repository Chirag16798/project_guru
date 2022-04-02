const express = require("express");
const moment = require("moment");
const mysqldump = require("mysqldump");
const Importer = require("mysql-import");
const db = require("../config/db");
// const cron = require("node-cron");
const fs = require("fs");
const spawn = require("child_process").spawn;
const router = express.Router();

//-------------------------------Our Company & Stationary----------------------------------
router.get("/companylist", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, com.* FROM guru_companies_tbl com, (SELECT @a:= 0) AS a WHERE (com.status = '1') ORDER BY com.display_order ASC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/addourcompany", (req, res) => {
  const ourCompany = req.body.ourcompany;

  db.query(
    "INSERT INTO guru_companies_tbl (companies_name) VALUES(?)",
    [ourCompany],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

router.post("/edit/ourCompany/basicInfo/:company_id", (req, res) => {
  const {
    company_id,
    quotationHeader,
    quotationFooter,
    invoiceHeader,
    invoiceFooter,
    companyLogo,
    companyIcon,
    signatureImage,
    contactPerson,
    emailId,
    editAddress,
    mobileNo,
    invoicePrefix,
    quotationPrefix,
    skype,
    edit_website,
    priceAddition,
    beneficiaryName,
    bankName,
    bankAccountNo,
    bankIfscCode,
    bankAddress,
    otherInfo,
    paypalId,
    editSkill,
  } = req.params;

  db.query(
    `UPDATE guru_companies_tbl SET person_default=${contactPerson},address_default=${editAddress},mobile_default=${mobileNo},skype_default=${skype},quotation_header=${quotationHeader},quotation_footer=${quotationFooter},invoice_header=${invoiceHeader},invoice_footer=${invoiceFooter},invoice_prefix=${invoicePrefix},quotation_prefix=${quotationPrefix},company_logo=${companyLogo},company_icon=${companyIcon},signature_image=${signatureImage},price_addition=${priceAddition},bank_name= ${bankName},account_number=${bankAccountNo},company_ifsc_code=${bankIfscCode},bank_address=${bankAddress},company_other_information= ${otherInfo},company_paypal=${paypalId},company_skrill=${editSkill},website=${edit_website}, beneficiary_name= ${beneficiaryName},email=${emailId} WHERE companies_id = ?`,
    [company_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values updated");
      }
    }
  );
});

router.get("/edit/ourCompany/propertyInfo/:company_id", (req, res) => {
  const { company_id } = req.params;

  db.query(
    "SELECT @a:=@a + 1 serial_number, cp.* FROM guru_company_property_tbl cp, (SELECT @a:= 0) AS a WHERE (cp.company_id = ?)",
    [company_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/edit/ourCompany/addProperty/:company_id", (req, res) => {
  const { company_id } = req.params;
  const propertyName = req.body.property;

  db.query(
    "INSERT INTO guru_company_property_tbl (company_id, name) VALUES(?,?)",
    [company_id, propertyName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.delete("/edit/ourCompany/deleteProperty/:property_id", (req, res) => {
  const { property_id } = req.params;

  db.query(
    "DELETE FROM guru_company_property_tbl WHERE property_id = ?",
    [property_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/waspCompanyLetter/:company_id", (req, res) => {
  const { company_id } = req.params;

  db.query(
    "SELECT cl.* FROM guru_company_letter_tbl cl WHERE cl.companies_id = ?",
    [company_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
});

//-----------------------------------Users Directory-----------------------------------
// "SELECT @a:=@a + 1 serial_number, l.user_id,l.user_type,l.user_email, s.name_subuser,s.user_id,s.subuser_skype,s.subuser_position,s.subuser_mobile FROM guru_login_tbl l LEFT JOIN guru_subuser_tbl s ON l.user_id = s.user_id, (SELECT @a:= 0) AS a WHERE s.status='1'",
router.get("/user", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, l.*, s.*, c.companies_name, c.companies_id, co.country_name, co.country_code FROM guru_login_tbl l LEFT JOIN guru_subuser_tbl s ON l.user_id = s.user_id LEFT JOIN guru_companies_tbl c ON s.sub_user_our_company = c.companies_id LEFT JOIN guru_country_tbl co ON s.subuser_country = co.country_code, (SELECT @a:= 0) AS a WHERE s.status='1'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/adduser", (req, res) => {
  const salutation = req.body.salutation;
  const nickName = req.body.nickName;
  const firstName = req.body.firstName;
  const surName = req.body.surName;
  const skypeId = req.body.skypeId;
  const mobileNo = req.body.mobileNo;
  const position = req.body.position;
  const department = req.body.department;
  const work = req.body.work;
  const ourCompany = req.body.ourCompany;
  const starSquare = req.body.starSquare;
  const colour = req.body.colour;
  const doj = req.body.doj;
  const salaryToday = req.body.salaryToday;
  const currentEmailPass = req.body.currentEmailPass;
  const currentSkypePass = req.body.currentSkypePass;
  const calenderCode = req.body.calenderCode;
  const personalMobileNo = req.body.personalMobileNo;
  const personalEmailId = req.body.personalEmailId;
  const address = req.body.address;
  const city = req.body.city;
  const birthDate = req.body.birthDate;
  const pincode = req.body.pincode;
  const country = req.body.country;
  const photo = req.body.photo;
  const beneficiaryName = req.body.beneficiaryName;
  const bankName = req.body.bankName;
  const bankAccount = req.body.bankAccount;
  const ifscCode = req.body.ifscCode;
  const paypalId = req.body.paypalId;
  const allowedHoliday = req.body.allowedHoliday;
  const tempHoliday = req.body.tempHoliday;
  const lunchAllowed = req.body.lunchAllowed;
  const idlingAllowed = req.body.idlingAllowed;
  const loginPermit = req.body.loginPermit;
  const logoutPermit = req.body.logoutPermit;
  const loginCompulsory = req.body.loginCompulsory;
  const logoutCompulsory = req.body.logoutCompulsory;
  const warning = req.body.warning;
  const serious = req.body.serious;
  const weeklyOff = req.body.weeklyOff;
  const hoursOfWork = req.body.hoursOfWork;

  db.query(
    "INSERT INTO guru_subuser_tbl (name_subuser, subuser_position, subuser_paypal_id, skype_password, current_email_password, star_and_square, colour, work, sur_name, nick_name, salutation, subuser_mobile, subuser_skype, subuser_photo, subuser_calender_code, department, sub_user_our_company, subuser_doj, salary_today, subuser_personal_mobile, subuser_city, subuser_pincode, subuser_country, subuser_personal_email, comm_address, logout_compulsary, hour_work, weekly_off, serious, warning, login_compulsary, logout_permit, login_permit, idling_allowed, lunch_allowed, temporary_holiday, holiday_allowed, subuser_dob, subuser_benficiary_name, subuser_bank_name, subuser_account_number, subuser_ifsc_code) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      firstName,
      position,
      paypalId,
      currentSkypePass,
      currentEmailPass,
      starSquare,
      colour,
      work,
      surName,
      nickName,
      salutation,
      mobileNo,
      skypeId,
      photo,
      calenderCode,
      department,
      ourCompany,
      doj,
      salaryToday,
      personalMobileNo,
      city,
      pincode,
      country,
      personalEmailId,
      address,
      logoutCompulsory,
      hoursOfWork,
      weeklyOff,
      serious,
      warning,
      loginCompulsory,
      logoutPermit,
      loginPermit,
      idlingAllowed,
      lunchAllowed,
      tempHoliday,
      allowedHoliday,
      birthDate,
      beneficiaryName,
      bankName,
      bankAccount,
      ifscCode,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/loginDetails", (req, res) => {
  const emailId = req.body.emailId;
  const password = req.body.password;

  db.query(
    "INSERT INTO guru_login_tbl (user_email, user_password) VALUES(?,?)",
    [emailId, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/update/userDetails/:editUserId", (req, res) => {
  const { editUserId } = req.params;
  const editSalutation = req.body.editSalutation;
  const editSubuserName = req.body.editSubuserName;
  const editSubuserPosition = req.body.editSubuserPosition;
  const editSubuserPaypalId = req.body.editSubuserPaypalId;
  const editSkypePassword = req.body.editSkypePassword;
  const editCurrentEmailPassword = req.body.editCurrentEmailPassword;
  const editStarAndSquare = req.body.editStarAndSquare;
  // const editEmailId = req.body.editEmailId;
  const editColour = req.body.editColour;
  const editWork = req.body.editWork;
  const editSurName = req.body.editSurName;
  const editNickName = req.body.editNickName;
  const editSubuserMobile = req.body.editSubuserMobile;
  const editSubuserSkype = req.body.editSubuserSkype;
  const editSubuserCalenderCode = req.body.editSubuserCalenderCode;
  const editDepartment = req.body.editDepartment;
  const editCompaniesId = req.body.editCompaniesId;
  const editSubuserDoj = req.body.editSubuserDoj;
  const editSalaryToday = req.body.editSalaryToday;
  const editSubuserPersonalMobile = req.body.editSubuserPersonalMobile;
  const editSubuserCity = req.body.editSubuserCity;
  const editSubuserPincode = req.body.editSubuserPincode;
  const editCountryCode = req.body.editCountryCode;
  const editSubuserPersonalEmail = req.body.editSubuserPersonalEmail;
  const editCommAddress = req.body.editCommAddress;
  const editLogoutCompulsary = req.body.editLogoutCompulsary;
  const editHoursWork = req.body.editHoursWork;
  const editWeeklyOff = req.body.editWeeklyOff;
  const editSerious = req.body.editSerious;
  const editWarning = req.body.editWarning;
  const editLoginCompulsary = req.body.editLoginCompulsary;
  const editLogoutPermit = req.body.editLogoutPermit;
  const editLoginPermit = req.body.editLoginPermit;
  const editIdlingAllowed = req.body.editIdlingAllowed;
  const editLunchAllowed = req.body.editLunchAllowed;
  const editTemporaryHoliday = req.body.editTemporaryHoliday;
  const editHolidayAllowed = req.body.editHolidayAllowed;
  const editSubuserDob = req.body.editSubuserDob;
  const editSubuserBenficiaryName = req.body.editSubuserBenficiaryName;
  const editSubuserBankName = req.body.editSubuserBankName;
  const editSubuserAccountNumber = req.body.editSubuserAccountNumber;
  const editSubuserIfscCode = req.body.editSubuserIfscCode;

  db.query(
    "UPDATE guru_subuser_tbl SET salutation = ?, name_subuser =?, subuser_position = ?, subuser_paypal_id = ?, skype_password = ?, current_email_password = ?, star_and_square = ?, colour = ?, work =?, sur_name = ?, nick_name = ?, subuser_mobile =?, subuser_skype =?, subuser_calender_code =?, department =?, sub_user_our_company =?, subuser_doj =?, salary_today = ?, subuser_personal_mobile = ?, subuser_city = ?, subuser_pincode = ?, subuser_country =?, subuser_personal_email = ?, comm_address = ?, logout_compulsary = ?, hour_work = ?, weekly_off = ?, serious = ?, warning = ?, login_compulsary = ?, logout_permit = ?, login_permit = ?, idling_allowed = ?, lunch_allowed = ?, temporary_holiday = ?, holiday_allowed = ?, subuser_dob = ?, subuser_benficiary_name = ?, subuser_bank_name = ?, subuser_account_number = ?, subuser_ifsc_code = ? WHERE user_id = ?",
    [
      editSalutation,
      editSubuserName,
      editSubuserPosition,
      editSubuserPaypalId,
      editSkypePassword,
      editCurrentEmailPassword,
      editStarAndSquare,
      editColour,
      editWork,
      editSurName,
      editNickName,
      editSubuserMobile,
      editSubuserSkype,
      editSubuserCalenderCode,
      editDepartment,
      editCompaniesId,
      editSubuserDoj,
      editSalaryToday,
      editSubuserPersonalMobile,
      editSubuserCity,
      editSubuserPincode,
      editCountryCode,
      editSubuserPersonalEmail,
      editCommAddress,
      editLogoutCompulsary,
      editHoursWork,
      editWeeklyOff,
      editSerious,
      editWarning,
      editLoginCompulsary,
      editLogoutPermit,
      editLoginPermit,
      editIdlingAllowed,
      editLunchAllowed,
      editTemporaryHoliday,
      editHolidayAllowed,
      editSubuserDob,
      editSubuserBenficiaryName,
      editSubuserBankName,
      editSubuserAccountNumber,
      editSubuserIfscCode,
      editUserId,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/update/user/Login/:editUserId", (req, res) => {
  const { editUserId } = req.params;
  const editEmailId = req.body.editEmailId;
  const editPassword = req.body.editPassword;

  db.query(
    "UPDATE guru_login_tbl SET user_email = ?, user_password = ? WHERE user_id = ?",
    [editEmailId, editPassword, editUserId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/permissions/details", (req, res) => {
  const EmailId = req.body.emailId;
  const Password = req.body.password;

  db.query(
    "SELECT user_id FROM guru_login_tbl WHERE user_email = ? AND user_password = ?",
    [EmailId, Password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//-------------------------------------Permissions-------------------------------------
router.get("/users", (req, res) => {
  db.query("SELECT * FROM guru_login_tbl WHERE status = '1'", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.post("/getdata", (req, res) => {
  const userId = req.body.userId;
  db.query(
    "SELECT * FROM guru_user_permission_tbl WHERE user_id = ?",
    [userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/update/add/permissions", (req, res) => {
  const userId = req.body.userId;
  var waspChecked = req.body.waspChecked;
  if (waspChecked != "Y") {
    waspChecked = "N";
  } else {
    return null;
  }

  var waspQuickAddClientChecked = req.body.waspQuickAddClientChecked;
  if (waspQuickAddClientChecked != "Y") {
    waspQuickAddClientChecked = "N";
  } else {
    return null;
  }

  console.log(userId + " " + waspChecked + " " + waspQuickAddClientChecked);

  db.query(
    "INSERT INTO guru_user_permission_tbl (user_id, wasp, wasp_quick_add_client) VALUES (?,?,?)",
    [userId, waspChecked, waspQuickAddClientChecked],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//-------------------------------------StaffMailers---------------------------------
router.get("/staffmailer", (req, res) => {
  db.query(
    "SELECT @a:=@a + 1 serial_number, l.user_id,l.user_type,l.user_email, s.name_subuser,s.user_id,s.subuser_skype,s.subuser_position,s.subuser_mobile FROM guru_login_tbl l LEFT JOIN guru_subuser_tbl s ON l.user_id = s.user_id, (SELECT @a:= 0) AS a WHERE l.user_type!='AD' AND s.status='1'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//-------------------------------------Backup-------------------------------------
router.get("/backup", (req, res) => {
  mysqldump({
    connection: {
      host: "localhost",
      user: "root",
      password: "",
      database: "draft_guru_database",
    },
    dumpToFile: `D:/anshg_guru_${moment().format("YYYY_MM_DD")}.sql`,
  });

  // res.send("success");
  // cron.schedule("0 0 * * *", () => {
  // const fileName = `guru_database_${moment().format("YYYY_MM_DD")}.sql`;
  // const wstream = fs.createWriteStream(`D/${fileName}`);
  // console.log("---------------------");
  // console.log("Running Database Backup Cron Job");
  // const mysqldump = spawn("mysqldump", [`-u`, `root`, `-p`, `draft_guru_db`]);

  // mysqldump.stdout
  //   .pipe(wstream)
  //   .on("finish", () => {
  //     console.log("DB Backup Completed!");
  //   })
  //   .on("error", (err) => {
  //     console.log(err);
  //   });
  // });
});

//-------------------------------------Restore-------------------------------------
router.post("/restore", (req, res) => {
  // let sampleFile;
  // let uploadPath;

  // if (!req.files || Object.keys(req.files).length === 0) {
  //   res.status(400).send("No files were uploaded.");
  // }

  // sampleFile = req.files.sampleFile;
  // console.log(sampleFile);

  const host = "localhost";
  const user = "root";
  const password = "";
  const database = "restore-database";

  const importer = new Importer({ host, user, password, database });

  // New onProgress method, added in version 5.0!
  importer.onProgress((progress) => {
    var percent =
      Math.floor((progress.bytes_processed / progress.total_bytes) * 10000) /
      100;
    console.log(`${percent}% Completed`);
  });

  importer
    .import("D:/anshg_guru_2022_03_08.sql")
    .then(() => {
      var files_imported = importer.getImported();
      console.log(`${files_imported.length} SQL file(s) imported.`);
    })
    .catch((err) => {
      console.error(err);
    });
  res.send("success");
});

module.exports = router;
