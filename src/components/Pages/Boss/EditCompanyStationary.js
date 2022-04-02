import React from "react";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import OnceHeader from "../OncePages/OnceHeader";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const EditCompanyStationary = () => {
  //---------------------Declaring States----------------------------
  const [inactive, setInactive] = useState(false);
  const [hide, setHide] = useState(false);

  //---------------------Calling API----------------------------

  const {
    state: {
      company_id,
      companyName,
      quotation_header,
      quotation_footer,
      invoice_header,
      invoice_footer,
      company_logo,
      company_icon,
      signature_image,
      contact_person,
      email_id,
      skype_id,
      address,
      mobile_no,
      invoice_prefix,
      quotation_prefix,
      website,
      price_addition,
      beneficiary_name,
      bank_name,
      bank_account,
      ifsc_code,
      bank_address,
      other_info,
      paypal,
      skill,
    },
  } = useLocation();

  //---------------------Basic Information----------------------------
  const [quotationHeader, setQuotationHeader] = useState("");
  const [quotationFooter, setQuotationFooter] = useState("");
  const [invoiceHeader, setInvoiceHeader] = useState("");
  const [invoiceFooter, setInvoiceFooter] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyIcon, setCompanyIcon] = useState("");
  const [signatureImage, setSignatureImage] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [emailId, setEmailId] = useState("");
  const [editAddress, setAddress] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [invoicePrefix, setInvoicePrefix] = useState("");
  const [quotationPrefix, setQuotationPrefix] = useState("");
  const [skype, setSkype] = useState("");
  const [edit_website, setWebsite] = useState("");
  const [priceAddition, setPriceAddition] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNo, setBankAccountNo] = useState("");
  const [bankIfscCode, setBankIfscCode] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [paypalId, setPaypalId] = useState("");
  const [editSkill, setSkill] = useState("");
  //const [currencyUsed, setCurrencyUsed] = useState("");

  //---------------------------------Email Design------------------------------
  const [orangeBorder, setOrangeBorder] = useState("");
  const [whiteBorder, setWhiteBorder] = useState("");
  const [greenBorder, setGreenBorder] = useState("");
  const [borderType, setBorderType] = useState("");
  const [borderWidth, setBorderWidth] = useState("");
  const [letterColour, setLetterColour] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  //const [fontColour, setFontColour] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [logoAlignment, setLogoAlignment] = useState("");
  const [signAlignment, setSignAlignment] = useState("");
  const [disclaimerAlignment, setDisclaimerAlignment] = useState("");
  const [signatureField, setSignatureField] = useState([]);

  //---------------------------------wasp letters------------------------------
  const [enquiryStatusD, setEnquiryStatusD] = useState();
  const [enquiryStatusF, setEnquiryStatusF] = useState();
  const [enquiryContent, setEnquiryContent] = useState([]);
  const [offerStatusD, setOfferStatusD] = useState();
  const [offerStatusF, setOfferStatusF] = useState();
  const [offerContent, setOfferContent] = useState([]);
  const [acceptanceStatusD, setAcceptanceStatusD] = useState();
  const [acceptanceStatusF, setAcceptanceStatusF] = useState();
  const [acceptanceContent, setAcceptanceContent] = useState("");
  const [wipStatusD, setWipStatusD] = useState();
  const [wipStatusF, setWipStatusF] = useState();
  const [wipContent, setWipContent] = useState("");
  const [delayStatusD, setDelayStatusD] = useState();
  const [delayStatusF, setDelayStatusF] = useState();
  const [delayContent, setDelayContent] = useState("");
  const [workCheckStatusD, setWorkCheckStatusD] = useState();
  const [workCheckStatusF, setWorkCheckStatusF] = useState();
  const [workCheckContent, setWorkCheckContent] = useState("");
  const [workOrderStatusD, setWorkOrderStatusD] = useState();
  const [workOrderStatusF, setWorkOrderStatusF] = useState();
  const [workOrderContent, setWorkOrderContent] = useState("");
  const [correctionStatusD, setCorrectionStatusD] = useState();
  const [correctionStatusF, setCorrectionStatusF] = useState();
  const [correctionContent, setCorrectionContent] = useState("");
  const [submissionStatusD, setSubmissionStatusD] = useState();
  const [submissionStatusF, setSubmissionStatusF] = useState();
  const [submissionContent, setSubmissionContent] = useState("");
  const [reSubmissionStatusD, setReSubmissionStatusD] = useState();
  const [reSubmissionStatusF, setReSubmissionStatusF] = useState();
  const [reSubmissionContent, setReSubmissionContent] = useState("");
  const [cancelClientStatusD, setCancelClientStatusD] = useState();
  const [cancelClientStatusF, setCancelClientStatusF] = useState();
  const [cancelClientContent, setCancelClientContent] = useState("");
  const [cancelTranslatorStatusD, setCancelTranslatorStatusD] = useState();
  const [cancelTranslatorStatusF, setCancelTranslatorStatusF] = useState();
  const [cancelTranslatorContent, setCancelTranslatorContent] = useState("");
  const [paymentClientStatusD, setPaymentClientStatusD] = useState();
  const [paymentClientStatusF, setPaymentClientStatusF] = useState();
  const [paymentClientContent, setPaymentClientContent] = useState("");
  const [paymentTranslatorStatusD, setPaymentTranslatorStatusD] = useState();
  const [paymentTranslatorStatusF, setPaymentTranslatorStatusF] = useState();
  const [paymentTranslatorContent, setPaymentTranslatorContent] = useState("");
  const [disclaimerStatusD, setDisclaimerStatusD] = useState();
  const [disclaimerStatusF, setDisclaimerStatusF] = useState();
  const [disclaimerContent, setDisclaimerContent] = useState("");
  const [additionalStatusD, setAdditionalStatusD] = useState();
  const [additionalStatusF, setAdditionalStatusF] = useState();
  const [additionalContent, setAdditionalContent] = useState("");
  const [qualityCheckStatusD, setQualityCheckStatusD] = useState();
  const [qualityCheckStatusF, setQualityCheckStatusF] = useState();
  const [qualityCheckContent, setQualityCheckContent] = useState("");

  const editOurCompany = (company_id) => {
    console.log(
      quotationHeader +
        " " +
        quotationFooter +
        " " +
        invoiceHeader +
        " " +
        invoiceFooter +
        " " +
        companyLogo +
        " " +
        companyIcon +
        " " +
        signatureImage +
        " " +
        contactPerson +
        " " +
        emailId +
        " " +
        skype +
        " " +
        editAddress +
        " " +
        mobileNo +
        " " +
        invoicePrefix +
        " " +
        quotationPrefix +
        " " +
        website +
        " " +
        priceAddition +
        " " +
        beneficiaryName +
        " " +
        bankName +
        " " +
        bankAccountNo +
        " " +
        bankIfscCode +
        " " +
        bankAddress +
        " " +
        otherInfo +
        " " +
        paypalId +
        " " +
        editSkill
    );
    Axios.post(
      `http://localhost:3001/edit/ourCompany/basicInfo/${company_id}`,
      {
        quotationHeader: quotationHeader,
        quotationFooter: quotationFooter,
        invoiceHeader: invoiceHeader,
        invoiceFooter: invoiceFooter,
        companyLogo: companyLogo,
        companyIcon: companyIcon,
        signatureImage: signatureImage,
        contactPerson: contactPerson,
        emailId: emailId,
        editAddress: editAddress,
        mobileNo: mobileNo,
        invoicePrefix: invoicePrefix,
        quotationPrefix: quotationPrefix,
        skype: skype,
        edit_website: edit_website,
        priceAddition: priceAddition,
        beneficiaryName: beneficiaryName,
        bankName: bankName,
        bankAccountNo: bankAccountNo,
        bankIfscCode: bankIfscCode,
        bankAddress: bankAddress,
        otherInfo: otherInfo,
        paypalId: paypalId,
        editSkill: editSkill,
      }
    ).then((e) => {
      console.log("success");
      window.alert("Successfully Updated");
    });
  };

  //-----------------------------------Property API's-----------------------------------
  const [propertyData, setPropertyData] = useState([]);
  const getProperty = (company_id) => {
    Axios.get(
      `http://localhost:3001/edit/ourCompany/propertyInfo/${company_id}`
    ).then((response) => {
      setPropertyData(response.data);
    });
  };

  const [property, setProperty] = useState("");
  const addProperty = (company_id) => {
    Axios.post(
      `http://localhost:3001/edit/ourCompany/addProperty/${company_id}`,
      {
        property: property,
      }
    ).then(() => {
      console.log("Property Successfully Added");
      // window.location.reload();
    });
  };

  const deleteProperty = (property_id) => {
    Axios.delete(
      `http://localhost:3001/edit/ourCompany/deleteProperty/${property_id}`
    ).then(() => {
      console.log("Property Successfully Deleted");
      window.location.reload();
    });
  };

  //-----------------------------------Wasp letters API's-----------------------------------
  const getWaspLetter = (company_id) => {
    Axios.post(`http://localhost:3001/waspCompanyLetter/${company_id}`).then(
      (response) => {
        // console.log(enquiryLetter);
        let inp = document.querySelectorAll("#value_letter");
        inp.forEach((val) => {
          //------------------------Enquiry Letter------------------------
          let enquiryLetter = response.data.find(
            (e) => e.letter_label === "Enquiry Received"
          );
          if (enquiryLetter.letter_type === "D") {
            setEnquiryStatusD(true);
            setEnquiryContent(enquiryLetter.content);
          } else {
            setEnquiryStatusF(true);
            setEnquiryContent(enquiryLetter.content);
          }

          let makeOffer = response.data.find(
            (e) => e.letter_label === "Make Offer"
          );
          if (makeOffer.letter_type === "D") {
            setOfferStatusD(true);
            setOfferContent(makeOffer.content);
          } else {
            setOfferStatusF(true);
            setOfferContent(makeOffer.content);
          }

          let acceptance = response.data.find(
            (e) => e.letter_label === "Accept order"
          );
          if (acceptance.letter_type === "D") {
            setAcceptanceStatusD(true);
            setAcceptanceContent(acceptance.content);
          } else {
            setAcceptanceStatusF(true);
            setAcceptanceContent(acceptance.content);
          }

          let wip = response.data.find(
            (e) => e.letter_label === "Confirmed work in Progress"
          );
          if (wip.letter_type === "D") {
            setWipStatusD(true);
            setWipContent(wip.content);
          } else {
            setWipStatusF(true);
            setWipContent(wip.content);
          }

          let delay = response.data.find(
            (e) => e.letter_label === "Inform Work Delay"
          );
          if (delay.letter_type === "D") {
            setDelayStatusD(true);
            setDelayContent(delay.content);
          } else {
            setDelayStatusF(true);
            setDelayContent(delay.content);
          }

          let work_check = response.data.find(
            (e) => e.letter_label === "Work Check"
          );
          if (work_check.letter_type === "D") {
            setWorkCheckStatusD(true);
            setWorkCheckContent(work_check.content);
          } else {
            setWorkCheckStatusF(true);
            setWorkCheckContent(work_check.content);
          }

          let work_order = response.data.find(
            (e) => e.letter_label === "Work Order"
          );
          if (work_order.letter_type === "D") {
            setWorkOrderStatusD(true);
            setWorkOrderContent(work_order.content);
          } else {
            setWorkOrderStatusF(true);
            setWorkOrderContent(work_order.content);
          }

          let correction = response.data.find(
            (e) => e.letter_label === "Correction to Client"
          );
          if (correction.letter_type === "D") {
            setCorrectionStatusD(true);
            setCorrectionContent(correction.content);
          } else {
            setCorrectionStatusD(true);
            setCorrectionContent(correction.content);
          }

          let submission = response.data.find(
            (e) => e.letter_label === "Submission"
          );
          if (submission.letter_type === "D") {
            setSubmissionStatusD(true);
            setSubmissionContent(submission.content);
          } else {
            setSubmissionStatusF(true);
            setSubmissionContent(submission.content);
          }

          let re_submission = response.data.find(
            (e) => e.letter_label === "Resubmission to Client"
          );
          if (re_submission.letter_type === "D") {
            setReSubmissionStatusD(true);
            setReSubmissionContent(re_submission.content);
          } else {
            setReSubmissionStatusF(true);
            setReSubmissionContent(re_submission.content);
          }

          let cancel_client = response.data.find(
            (e) => e.letter_label === "Cancellation to Client"
          );
          if (cancel_client.letter_type === "D") {
            setCancelClientStatusD(true);
            setCancelClientContent(cancel_client.content);
          } else {
            setCancelClientStatusF(true);
            setCancelClientContent(cancel_client.content);
          }

          // //------------------------CancelClient Letter------------------------
          // if (
          //   response.data[10].letter_label === "Cancellation to Client" &&
          //   response.data[10].letter_type === "D"
          // ) {
          //   setCancelClientStatusD(true);
          // } else {
          //   setCancelClientStatusF(true);
          // }

          // if (response.data[10].letter_label === "Cancellation to Client") {
          //   setCancelClientContent(response.data[10].content);
          // } else {
          //   return null;
          // }

          // //------------------------CancelTranslator Letter------------------------
          // if (
          //   response.data[11].letter_label === "Cancellation to Translator" &&
          //   response.data[11].letter_type === "D"
          // ) {
          //   setCancelTranslatorStatusD(true);
          // } else {
          //   setCancelTranslatorStatusF(true);
          // }

          // if (response.data[11].letter_label === "Cancellation to Translator") {
          //   setCancelTranslatorContent(response.data[11].content);
          // } else {
          //   return null;
          // }

          // //------------------------PaymentClient Letter------------------------
          // if (
          //   response.data[12].letter_label === "Payment to Client" &&
          //   response.data[12].letter_type === "D"
          // ) {
          //   setPaymentClientStatusD(true);
          // } else {
          //   setPaymentClientStatusF(true);
          // }

          // if (response.data[12].letter_label === "Payment to Client") {
          //   setPaymentClientContent(response.data[12].content);
          // } else {
          //   return null;
          // }

          // //------------------------PaymentTranslator Letter------------------------
          // if (
          //   response.data[13].letter_label === "Payment to Translators" &&
          //   response.data[13].letter_type === "D"
          // ) {
          //   setPaymentTranslatorStatusD(true);
          // } else {
          //   setPaymentTranslatorStatusF(true);
          // }

          // if (response.data[13].letter_label === "Payment to Translators") {
          //   setPaymentTranslatorContent(response.data[13].content);
          // } else {
          //   return null;
          // }

          // //------------------------Disclaimer Letter------------------------
          // if (
          //   response.data[14].letter_label === "Disclaimer" &&
          //   response.data[14].letter_type === "D"
          // ) {
          //   setDisclaimerStatusD(true);
          // } else {
          //   setDisclaimerStatusF(true);
          // }

          // if (response.data[14].letter_label === "Disclaimer") {
          //   setDisclaimerContent(response.data[14].content);
          // } else {
          //   return null;
          // }

          // //------------------------Additional Letter------------------------
          // if (
          //   response.data[15].letter_label === "Additional" &&
          //   response.data[15].letter_type === "D"
          // ) {
          //   setAdditionalStatusD(true);
          // } else {
          //   setAdditionalStatusF(true);
          // }

          // if (response.data[15].letter_label === "Additional") {
          //   setAdditionalContent(response.data[15].content);
          // } else {
          //   return null;
          // }

          // //------------------------QualityCheck Letter------------------------
          // if (
          //   response.data[16].letter_label === "Quality Check" &&
          //   response.data[16].letter_type === "D"
          // ) {
          //   setQualityCheckStatusD(true);
          // } else {
          //   setQualityCheckStatusF(true);
          // }

          // if (response.data[16].letter_label === "Quality Check") {
          //   setQualityCheckContent(response.data[16].content);
          // } else {
          //   return null;
          // }
        });
      }
    );
  };

  console.log(
    "default => " +
      offerStatusD +
      "  force => " +
      offerStatusF +
      "  content => " +
      offerContent
  );

  const LettersProperty = (company_id) => {
    getProperty(company_id);
    getWaspLetter(company_id);
  };

  return (
    <div
      className={`con ${inactive ? "con-act" : ""}`}
      onLoad={() => LettersProperty(company_id)}
    >
      <SideMenu
        onCollapse={(inactive) => {
          console.log(inactive);
          setInactive(inactive);
        }}
      />
      <div className="stationary-header">
        <div className="stationary-heading">
          <h1>EDIT OUR COMPANIES & STATIONERY</h1>
        </div>
        {/* <div className="stationary-btn">
          <Link to="/OurCompany" className="s-btn">
            {" "}
            <span>
              <i className="bi bi-plus"></i>
            </span>{" "}
            Add New Company
          </Link>
        </div> */}
      </div>
      <div className="inner-container">
        <div className="edit-company-head">
          <h3>EDIT OUR COMPANIES & STATIONERY</h3>
          <Link to="/CompanyStationary">
            {" "}
            <button className="edit-back-btn">
              {" "}
              <span>
                <i className="bi bi-arrow-left"></i>
              </span>{" "}
              Back
            </button>
          </Link>
        </div>
        <div className="search-form">
          <div className="add-heading">
            <h3>BASIC INFORMATION</h3>
          </div>
          <form>
            <div className="search-input">
              <div className="search-inp">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                />
              </div>

              <div className="search-inp">
                <label>Quotation Header</label>
                <br />
                <img src={`../../../../image/${quotation_header}`} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onChange={(e) => setQuotationHeader(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Quotation Footer</label>
                <br />
                <img src={quotation_footer} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onMouseMove={(e) => setQuotationFooter(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Invoice Header</label>
                <br />
                <img src={invoice_header} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onMouseMove={(e) => setInvoiceHeader(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Invoice Footer</label>
                <br />
                <img src={invoice_footer} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onMouseMove={(e) => setInvoiceFooter(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Company Logo</label>
                <br />
                <img src={company_logo} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onMouseMove={(e) => setCompanyLogo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Company Icon</label>
                <br />
                <img src={company_icon} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onMouseMove={(e) => setCompanyIcon(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Signature Image</label>
                <br />
                <img src={signature_image} />
                <input
                  type="file"
                  className="photo-inp-file"
                  onMouseMove={(e) => setSignatureImage(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Contact Person</label>
                <input
                  type="text"
                  placeholder="Contact Person"
                  defaultValue={contact_person}
                  onKeyPress={(e) => setContactPerson(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Email ID</label>
                <input
                  type="email"
                  placeholder="Email ID"
                  defaultValue={email_id}
                  onKeyPress={(e) => setEmailId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Skype Id</label>
                <input
                  type="text"
                  placeholder="Skype Id"
                  defaultValue={skype_id}
                  onKeyPress={(e) => setSkype(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  defaultValue={address}
                  onKeyPress={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="search-inp">
                <label>Mobile No.</label>
                <input
                  type="text"
                  placeholder="Position"
                  defaultValue={mobile_no}
                  onKeyPress={(e) => setMobileNo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Invoice Prefix</label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Invoice Prefix"
                  defaultValue={invoice_prefix}
                  onKeyPress={(e) => setInvoicePrefix(e.target.value)}
                ></textarea>
              </div>

              <div className="search-inp">
                <label>Quotation Prefix</label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Quotation Prefix"
                  defaultValue={quotation_prefix}
                  onKeyPress={(e) => setQuotationPrefix(e.target.value)}
                ></textarea>
              </div>

              {/* <div className="search-inp">
                <label>Skype</label>
                <input type="text" placeholder="Skype" />
              </div> */}

              <div className="search-inp">
                <label>Website</label>
                <input
                  type="text"
                  placeholder="Website"
                  defaultValue={website}
                  onKeyPress={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Price Addition</label>
                <input
                  type="text"
                  placeholder="Price Addition"
                  defaultValue={price_addition}
                  onKeyPress={(e) => setPriceAddition(e.target.value)}
                />
              </div>

              <div className="search-inp">
                {/*  <input type="text" placeholder="Google Calander Embed Code" /> */}
              </div>
            </div>

            <div className="add-heading">
              <h3>PAYMENT DETAILS</h3>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Benificiary Name</label>
                <input
                  type="text"
                  placeholder="Benificiary Name"
                  defaultValue={beneficiary_name}
                  onKeyPress={(e) => setBeneficiaryName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Name</label>
                <input
                  type="text"
                  placeholder="Bank Name"
                  defaultValue={bank_name}
                  onKeyPress={(e) => setBankName(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Account No.</label>
                <input
                  type="text"
                  placeholder="Bank Account No"
                  defaultValue={bank_account}
                  onKeyPress={(e) => setBankAccountNo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank IFSC Code</label>
                <input
                  type="text"
                  placeholder="Bank IFSC Code"
                  defaultValue={ifsc_code}
                  onKeyPress={(e) => setBankIfscCode(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Bank Address</label>
                <textarea
                  placeholder="Bank Address"
                  cols="30"
                  rows="10"
                  defaultValue={bank_address}
                  onKeyPress={(e) => setBankAddress(e.target.value)}
                ></textarea>
              </div>

              <div className="search-inp">
                <label>Other Information</label>
                <input
                  type="text"
                  placeholder="Other Information"
                  defaultValue={other_info}
                  onKeyPress={(e) => setOtherInfo(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>PayPal</label>
                <input
                  type="text"
                  placeholder="-"
                  defaultValue={paypal}
                  onKeyPress={(e) => setPaypalId(e.target.value)}
                />
              </div>

              <div className="search-inp">
                <label>Skill</label>
                <input
                  type="text"
                  placeholder="-"
                  defaultValue={skill}
                  onKeyPress={(e) => setSkill(e.target.value)}
                />
              </div>

              <div className="search-inp">
                {/* <label>PayPal Id</label>
                                 <input type="text" placeholder="PayPal Id" /> */}
              </div>
            </div>

            <div className="add-heading">
              <h3>EMAIL DESIGN</h3>
            </div>

            <div className="search-input">
              <div className="search-inp">
                <label>Orange Border Color :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setOrangeBorder(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>White Border Color :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setWhiteBorder(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Green Border Color :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setGreenBorder(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Border Type :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setBorderType(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="solid">Solid</option>
                  <option value="dotted">Dotted</option>
                  <option value="dashed">Dashed</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Border Width :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setBorderWidth(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="px">1px</option>
                  <option value="px">2px</option>
                  <option value="px">3px</option>
                  <option value="px">4px</option>
                  <option value="px">5px</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Letter Color :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setLetterColour(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="red">Red</option>
                  <option value="maroon">Maroon</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="lime">Lime</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="black">Black</option>
                  <option value="gray">Gray</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Font Family :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setFontFamily(e.target.value)}
                >
                  <option value="Select">Select</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Font Size :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setFontSize(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="size">10</option>
                  <option value="size">12</option>
                  <option value="size">14</option>
                  <option value="size">16</option>
                  <option value="size">18</option>
                  <option value="size">20</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Logo Alignment :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setLogoAlignment(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Signature Alignment :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setSignAlignment(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>

              <div className="search-inp">
                <label>Disclaimer Alignment :</label>
                <select
                  className="search-select"
                  onKeyPress={(e) => setDisclaimerAlignment(e.target.value)}
                >
                  <option value="Select">Select</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>

              <div className="search-inp"></div>

              <div className="search-inp signature-field-txt">
                <label>Signature Field :</label>
                <input
                  type="checkbox"
                  className="signature-field-check"
                  onKeyPress={(e) => setSignatureField(e.target.value)}
                />{" "}
                Name
                <input
                  type="checkbox"
                  className="signature-field-check"
                  onKeyPress={(e) => setSignatureField(e.target.value)}
                />{" "}
                Position
                <input
                  type="checkbox"
                  className="signature-field-check"
                  onKeyPress={(e) => setSignatureField(e.target.value)}
                />{" "}
                Email Id
                <input
                  type="checkbox"
                  className="signature-field-check"
                  onKeyPress={(e) => setSignatureField(e.target.value)}
                />{" "}
                Mobile
                <input
                  type="checkbox"
                  className="signature-field-check"
                  onKeyPress={(e) => setSignatureField(e.target.value)}
                />{" "}
                Skype Id
                <input
                  type="checkbox"
                  className="signature-field-check"
                  onKeyPress={(e) => setSignatureField(e.target.value)}
                />{" "}
                Website
                <input
                  type="checkbox"
                  className="signature-field-check"
                  onKeyPress={(e) => setSignatureField(e.target.value)}
                />{" "}
                Company Name
                <input
                  type="checkbox"
                  className="signature-field-check"
                  onKeyPress={(e) => setSignatureField(e.target.value)}
                />{" "}
                Address
              </div>
            </div>

            <div className="add-heading">
              <h3>WASP LETTERS</h3>
            </div>

            <div className="edit-company-letter">
              <div className="edit-company-letter__grid">
                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Enquiry : </label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="enquiry"
                      value="F"
                      className="search-radio"
                      defaultChecked={enquiryStatusF}
                      onChange={(e) => setEnquiryStatusF(e.target.value)}
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="enquiry"
                      value="D"
                      className="search-radio"
                      defaultChecked={enquiryStatusD}
                      onChange={(e) => setEnquiryStatusD(e.target.value)}
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setEnquiryContent(e.target.value)}
                        defaultValue={enquiryContent}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Offer : </label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="offer"
                      value="F"
                      className="search-radio"
                      defaultChecked={offerStatusF}
                      onChange={(e) => setOfferStatusF(e.target.value)}
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="offer"
                      value="D"
                      className="search-radio"
                      defaultChecked={offerStatusD}
                      onChange={(e) => setOfferStatusD(e.target.value)}
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setOfferContent(e.target.value)}
                        defaultValue={offerContent}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Acceptance :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="acceptance"
                      value="F"
                      defaultChecked={acceptanceStatusF}
                      onChange={(e) => setAcceptanceStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      name="acceptance"
                      value="D"
                      defaultChecked={acceptanceStatusD}
                      onChange={(e) => setAcceptanceStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        defaultValue={acceptanceContent}
                        cols="30"
                        rows="10"
                        onChange={(e) => setAcceptanceContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>WIP :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={wipStatusF}
                      name="wip"
                      value="F"
                      onChange={(e) => setWipStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={wipStatusD}
                      name="wip"
                      value="no"
                      onChange={(e) => setWipStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        defaultValue={wipContent}
                        cols="30"
                        rows="10"
                        onChange={(e) => setWipContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Delay :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={delayStatusF}
                      name="delay"
                      value="F"
                      onChange={(e) => setDelayStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label>Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={delayStatusD}
                      name="delay"
                      value="D"
                      onChange={(e) => setDelayStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label>Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={delayContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setDelayContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Work Check :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={workCheckStatusF}
                      name="work_check"
                      value="F"
                      onChange={(e) => setWorkCheckStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={workCheckStatusD}
                      name="work_check"
                      value="D"
                      onChange={(e) => setWorkCheckStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={workCheckContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setWorkCheckContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Work Order :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={workOrderStatusF}
                      name="work_order"
                      value="F"
                      onChange={(e) => setWorkOrderStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={workOrderStatusD}
                      name="work_order"
                      value="D"
                      onChange={(e) => setWorkOrderStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={workOrderContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setWorkOrderContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Correction :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={correctionStatusF}
                      name="correction"
                      value="F"
                      onChange={(e) => setCorrectionStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={correctionStatusD}
                      name="correction"
                      value="D"
                      onChange={(e) => setCorrectionStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={correctionContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setCorrectionContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Submission :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={submissionStatusF}
                      name="submission"
                      value="F"
                      onChange={(e) => setSubmissionStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={submissionStatusD}
                      name="submission"
                      value="D"
                      onChange={(e) => setSubmissionStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={submissionContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setSubmissionContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Re-submission :`}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={reSubmissionStatusF}
                      name="re_submission"
                      value="F"
                      onChange={(e) => setReSubmissionStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={reSubmissionStatusD}
                      name="re_submiss"
                      value="D"
                      onChange={(e) => setReSubmissionStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={reSubmissionContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setReSubmissionContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Cancellation - Client :`}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={cancelClientStatusF}
                      name="cancel_client"
                      value="F"
                      onChange={(e) => setCancelClientStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={cancelClientStatusD}
                      name="cancel_client"
                      value="D"
                      onChange={(e) => setCancelClientStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={cancelClientContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setCancelClientContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Cancellation - Translator : `}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={cancelTranslatorStatusF}
                      name="cancel_translator"
                      value="F"
                      onChange={(e) =>
                        setCancelTranslatorStatusF(e.target.value)
                      }
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={cancelTranslatorStatusD}
                      name="cancel_translator"
                      value="D"
                      onChange={(e) =>
                        setCancelTranslatorStatusD(e.target.value)
                      }
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={cancelTranslatorContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                          setCancelTranslatorContent(e.target.value)
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Payment – Client : `}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={paymentClientStatusF}
                      name="pay_client"
                      value="F"
                      onChange={(e) => setPaymentClientStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={paymentClientStatusD}
                      name="pay_client"
                      value="D"
                      onChange={(e) => setPaymentClientStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        id="value_letter"
                        defaultValue={paymentClientContent}
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                          setPaymentClientContent(e.target.value)
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>{`Payment – Translator :`}</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={paymentTranslatorStatusF}
                      name="pay_translator"
                      value="F"
                      onChange={(e) =>
                        setPaymentTranslatorStatusF(e.target.value)
                      }
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={paymentTranslatorStatusD}
                      name="pay_translator"
                      value="D"
                      onChange={(e) =>
                        setPaymentTranslatorStatusD(e.target.value)
                      }
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={paymentTranslatorContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                          setPaymentTranslatorContent(e.target.value)
                        }
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Disclaimer :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={disclaimerStatusF}
                      name="disclaimer"
                      value="F"
                      onChange={(e) => setDisclaimerStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={disclaimerStatusD}
                      name="disclaimer"
                      value="D"
                      onChange={(e) => setDisclaimerStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={disclaimerContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setDisclaimerContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Additional : </label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={additionalStatusF}
                      name="additional"
                      value="F"
                      onChange={(e) => setAdditionalStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={additionalStatusD}
                      name="additional"
                      value="D"
                      onChange={(e) => setAdditionalStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={additionalContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setAdditionalContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="edit-company-letter__input">
                  <div className="search-inp">
                    <label>Quality Check :</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={qualityCheckStatusF}
                      name="quality_check"
                      value="F"
                      onChange={(e) => setQualityCheckStatusF(e.target.value)}
                      className="search-radio"
                    />
                      <label for="yes">Force</label>
                    <input
                      type="radio"
                      id="value_letter"
                      defaultChecked={qualityCheckStatusD}
                      name="quality_check"
                      value="D"
                      onChange={(e) => setQualityCheckStatusD(e.target.value)}
                      className="search-radio"
                    />
                      <label for="no">Default</label>
                    <div className="textarea">
                      <textarea
                        defaultValue={qualityCheckContent}
                        id="value_letter"
                        cols="30"
                        rows="10"
                        onChange={(e) => setQualityCheckContent(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="search-button">
              <button
                className="s-btn"
                onClick={() => editOurCompany(company_id)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="self__task">
          <h2>Add Property</h2>
          <div className="search">
            <form>
              <div className="title">
                <p>Property Name :</p>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Property Name"
                  onChange={(e) => setProperty(e.target.value)}
                />
                <button
                  className="search-btn st-bg-btn"
                  onClick={() => addProperty(company_id)}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="selfTask-table">
          <div className="overflow-table">
            <table className="selfTask-table-data">
              <thead>
                <tr>
                  <th className="st-bg">Sr.No</th>
                  <th className="st-bg">Property Name</th>
                  <th className="st-bg">Action</th>
                </tr>
              </thead>
              <tbody>
                {propertyData.map((val, key) => {
                  return (
                    <tr>
                      <td>{val.serial_number}</td>
                      <td>{val.name}</td>
                      <td>
                        <i
                          class="bi bi-trash"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleteProperty(val.property_id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCompanyStationary;

// console.log("data");
// console.log(company_id);

// const [waspLetterProperty, setWaspLetterProperty] = useState([]);
// const [enquiryContent, setEnquiryContent] = useState("");
// const getWaspLetter = (company_id) => {
//   Axios.post(`http://localhost:3001/waspletter/property/${company_id}`).then(
//     (response) => {
//       let inp = document.querySelectorAll("value_wasp");
//       inp.forEach((val) => {
//         if (response.data[0].letter_label === "Enquiry Received") {
//           console.log("Enquiry Received");
//           setEnquiryContent(response.data[0].letter_content);
//         } else {
//           return null;
//         }
//       });
//     }
//   );
// };
