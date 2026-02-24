import React, { useState, useEffect, useRef } from "react";
import "./../styles/Ebook.css";
import Carousel from "./Carousel";
import { Circles } from "react-loader-spinner";

const Ebook = () => {

   useEffect(() => {
    document.title = "e-Book | tsQs";
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showSuccess && dialogRef.current) {
      const dialog = dialogRef.current;
      const focusable = dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      const trap = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        } else if (e.key === "Escape") {
          setShowSuccess(false);
        }
      };

      dialog.focus();
      dialog.addEventListener("keydown", trap);
      document.body.style.overflow = "hidden";

      return () => {
        dialog.removeEventListener("keydown", trap);
        document.body.style.overflow = "auto";
      };
    }
  }, [showSuccess]);

  // const validate = () => {
  //   const errs = {};
  //   if (!formData.firstName.trim()) errs.firstName = "First name is required.";
  //   if (!formData.lastName.trim()) errs.lastName = "Last name is required.";
  //   if (!formData.phone.trim()) errs.phone = "Phone number is required.";
  //   else if (!/^\d{10}$/.test(formData.phone)) errs.phone = "Enter a valid 10-digit number.";
  //   if (!formData.email.trim()) errs.email = "Email is required.";
  //   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Enter a valid email address.";
  //   return errs;
  // };
  const validate = () => {
  const errs = {};

  if (!formData.firstName.trim()) {
    errs.firstName = "First name is required.";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
    errs.firstName = "Only letters and spaces are allowed in First name.";
  }

  if (!formData.lastName.trim()) {
    errs.lastName = "Last name is required.";
  } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
    errs.lastName = "Only letters and spaces are allowed in Last name.";
  }

  if (!formData.phone.trim()) {
    errs.phone = "Phone number is required.";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errs.phone = "Enter a valid 10-digit number.";
  }

  if (!formData.email.trim()) {
    errs.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errs.email = "Enter a valid email address.";
  }

  return errs;
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const newErrors = validate();
    if (newErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = document.querySelector(
        `input[name='${Object.keys(newErrors)[0]}'], textarea[name='${Object.keys(newErrors)[0]}']`
      );
      if (firstErrorField) firstErrorField.focus();
      return;
    }

    setLoading(true);
    setShowSuccess(false);

    try {
      const response = await fetch("https://tsqsinc.com/e-book/save.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (result.status === "success") {
        setShowSuccess(true);
        setFormData({ firstName: "", lastName: "", phone: "", email: "", details: "" });
        const link = document.createElement("a");
        link.href = "/tsQs-Inc-ebook-1.pdf";
        link.download = "tsQs-Inc-ebook-1.pdf";
        link.click();
      } else {
        alert("\u274C Failed to save form. Please try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("\u274C Error submitting form.");
      setLoading(false);
    }
  };

  return (
    <div className="ebook-wrapper">
      <div
        className="ebook-container"
        aria-hidden={showSuccess || loading ? "true" : "false"}
      >
        <div className="ebook-carousel">
          <Carousel />
        </div>

        <div className="ebook-intro">
          <h1>Download Our e-Book</h1>
          <p>Please fill in the form below to get access to our e-Book.</p>
        </div>

        <div className="ebook-form-section">
          <form className="ebook-form" onSubmit={handleSubmit} noValidate>
            <p className="required-note">
              <span >*</span> Indicates required field
            </p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  aria-required="true"
                  aria-describedby="firstNameError"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && (
                  <span className="error" id="firstNameError">{errors.firstName}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  aria-required="true"
                  aria-describedby="lastNameError"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && (
                  <span className="error" id="lastNameError">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  aria-required="true"
                  aria-describedby="phoneError"
                  maxLength="10"
                  pattern="\d{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && (
                  <span className="error" id="phoneError">{errors.phone}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Company Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  aria-describedby="emailError"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && (
                  <span className="error" id="emailError">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="details">Additional Details</label>
                <textarea
                  id="details"
                  name="details"
                  aria-describedby="detailsHelp"
                  value={formData.details}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="download-btn" disabled={loading}>
                {loading ? "Submitting..." : "Download e-Book"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {(loading || showSuccess) && (
        <div className="overlay" role="alert" aria-live="assertive">
          {loading ? (
            <div className="spinner-box" aria-label="Loading, please wait">
              <Circles height="80" width="80" color="#d9680e" ariaLabel="loading" />
            </div>
          ) : (
            <div
              className="success-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="successTitle"
              ref={dialogRef}
              tabIndex="-1"
            >
              <h2 id="successTitle">Form Submitted Successfully!</h2>
              <p>Thank you for your submission. e-Book will be downloaded shortly.</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="close-dialog"
                aria-label="Close success dialog"
              >
                ✖
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Ebook;

