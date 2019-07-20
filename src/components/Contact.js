import React, { Component } from "react";
import firebase from "firebase";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCV35nsPS3WvMoyp6BYyrq9hhq4pGhheig",
  authDomain: "francoisgamescontact.firebaseapp.com",
  databaseURL: "https://francoisgamescontact.firebaseio.com",
  projectId: "francoisgamescontact",
  storageBucket: "",
  messagingSenderId: "1037851501346",
  appId: "1:1037851501346:web:42882627ea226811"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

export default class Contact extends Component {
  constructor(props) {
    super(props);
    // Ref creation
    this.ContactForm = React.createRef();
    this.ContactName = React.createRef();
    this.ContactCompany = React.createRef();
    this.ContactEmail = React.createRef();
    this.ContactPhoneNumber = React.createRef();
    this.ContactMessage = React.createRef();
    this.ContactAlert = React.createRef();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    // Save Message
    this.saveMessage(
      this.ContactName.current.value,
      this.ContactCompany.current.value,
      this.ContactEmail.current.value,
      this.ContactPhoneNumber.current.value,
      this.ContactMessage.current.value
    );
  }
  saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    });
    // Show Alert
    this.ContactAlert.current.style.display = "block";

    // Hide Alert
    setTimeout(() => {
      this.ContactAlert.current.style.display = "none";
    }, 3000);

    // Clear Form
    this.ContactForm.current.reset();
  }

  render() {
    return (
      <div className="contactContainer">
        <h1 className="brand">Francois Coding</h1>
        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <h2>How can we help you?</h2>
            <p>
              Interested in development of this project? Just send feedback or a
              question using the form.
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
            <div className="alert" ref={this.ContactAlert}>
              Your message has been sent
            </div>
            <form ref={this.ContactForm} onSubmit={this.submitForm}>
              <p>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  ref={this.ContactName}
                  required
                />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" ref={this.ContactCompany} />
              </p>
              <p>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  ref={this.ContactEmail}
                  required
                />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" ref={this.ContactPhoneNumber} />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  ref={this.ContactMessage}
                  required
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
  }
}
