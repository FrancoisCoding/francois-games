import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  console.log("FORM DATA", formData);

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "francois-games",
        "#contactform",
        "user_EOL2yavJMcxMWOciZYb0X"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Form data", e.target);
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer">
      <h1 className="brand">Francois Coding</h1>
      <div className="wrapper animated bounceInLeft">
        <div className="company-info">
          <h1>How Can We Help?</h1>
          <p>
            Are you interested in learning more about FrancoisCoding? Enter your
            information in the form and Isaiah will contact you shortly.
          </p>
          <ul>
            <li>
              <i className="fa fa-phone" /> (352) 989-3703
            </li>
            <li>
              <i className="fa fa-envelope" /> francoiscoding@yahoo.com
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Email Us</h3>
          <div className="alert">Your message has been sent</div>
          <form onSubmit={sendEmail} id="contactform">
            <p>
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={formHandler}
                value={formData.name}
              />
            </p>
            <p>
              <label>Company</label>
              <input
                type="text"
                name="company"
                onChange={formHandler}
                value={formData.company}
              />
            </p>
            <p>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                required
                onChange={formHandler}
                value={formData.email}
              />
            </p>
            <p>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                onChange={formHandler}
                value={formData.phone}
              />
            </p>
            <p className="full">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                required
                onChange={formHandler}
                value={formData.message}
              />
            </p>
            <p className="full">
              <button>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
