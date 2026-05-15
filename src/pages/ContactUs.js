// Updated ContactUs.js with keyboard trap inside dialog and auto error detection
import React, { useState, useRef, useEffect } from "react";
import "./../styles/ContactUs.css";
import contactImage from "./../Images/contact us.png";
import Carousel from "./Carousel";
import { Circles } from "react-loader-spinner";

const ContactUs = () => {


  useEffect(() => {
      document.title = "Contact Us | tsQs";
    }, []);


  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (success && dialogRef.current) {
      const focusable = dialogRef.current.querySelectorAll(
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
          setSuccess(false);
        }
      };

      dialogRef.current.focus();
      dialogRef.current.addEventListener("keydown", trap);
      document.body.style.overflow = "hidden";

      // return () => {
      //   dialogRef.current.removeEventListener("keydown", trap);
      //   document.body.style.overflow = "auto";
      // };
      return () => {
  if (dialogRef.current) {
    dialogRef.current.removeEventListener("keydown", trap);
  }
  document.body.style.overflow = "auto";
};

    }
  }, [success]);

  const isCorporateEmail = (email) => {
    // Accept only "corporate" addresses by blocking common free email providers.
    // Adjust the blacklist if your definition differs.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    const forbiddenDomains = [
      "gmail.com",
      "yahoo.com",
      "yahoo.co.in",
      "outlook.com",
      "hotmail.com",
      "live.com",
      "msn.com",
      "icloud.com",
      "aol.com",
      "protonmail.com",
      "proton.me",
      "gmx.com",
      "mail.com",
      "comcast.net",
      "att.net",
      "ymail.com",
      "rocketmail.com",
    ];

    const domain = email.split("@")[1]?.toLowerCase() || "";
    return !forbiddenDomains.some((d) => domain === d || domain.endsWith("." + d));
  };

   const validate = (field, value) => {
  if (!value.trim()) {
    switch (field) {
      case "name":
        return "Name is required.";
      case "phone":
        return "Phone number is required.";
      case "email":
        return "Email is required.";
      case "message":
        return "Message or Comment is required.";
      default:
        return "This field is required.";
    }
  } else {
    if (field === "email" && !isCorporateEmail(value)) {
      return "Please enter your Corporate email address";
    }
    if (field === "phone" && !/^[0-9]{10}$/.test(value)) {
      return "Enter a 10-digit phone number.";
    }
    if (field === "name" && /\d/.test(value)) {
      return "Name cannot contain numbers.";
    }
  }
  return "";
};

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const err = validate(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(firstErrorField).focus();
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://tsqsinc.com/contact/saveContact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (result.status === "success") {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});
      }
    } catch (err) {
      setLoading(false);
      alert("Submission failed.");
    }
  };

  return (
    <div className="contactus-container">
      <div className="contactus-carousel">
        <Carousel />
      </div>

      <div className="contactus-content" aria-hidden={success || loading}>
        <form
          className="contactus-form"
          onSubmit={handleSubmit}
          noValidate
          aria-labelledby="contactus-heading"
        >
          <h1 id="contactus-heading">Get in Touch</h1>
             {/* <p>Please fill in the form below to get access to our e-Book.</p> */}
              <p className="required-note1">
              <span aria-hidden="true">*</span> Indicates required field
            </p>
          <div className="form-group">
            <label htmlFor="name">
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone <span aria-hidden="true">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && <p id="phone-error">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Corporate Mail <span aria-hidden="true">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Comment or Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && <p id="message-error">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="contactus-image">
          <img src={contactImage} alt="Contact us illustration" />
        </div>
      </div>

      {(loading || success) && (
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
              <h2 id="successTitle">Thanks for submitting!</h2>
              <p>Our team will reach out to you shortly.</p>
              <button
                onClick={() => setSuccess(false)}
                className="close-dialog"
                aria-label="Close dialog"
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

export default ContactUs;
