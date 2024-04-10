import React, { useState } from 'react';
import "../App.css";
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    setTimeout(() => {
      setSuccessMessage('Form submitted successfully');
    }, 500);

    setName('');
    setEmail('');
    setPhone('');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <div className="contact-us-container">
        <div className="form-section">
          <h3>CONTACT US</h3>
          <p className="form-statement">Please fill out the form below:</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={handlePhoneChange}
            />
            <button type="submit">Submit</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
      <Footer />
    </div> 
  );
};

export default ContactUs;
