import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

export default function Contact() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [buttonSubmit, setButtonSubmit] = useState("Envoyer");

  function handleSubmit(e) {
    axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/sendMail`,
      {
        firstName,
        lastName,
        email,
        phone,
        message,
      },
      {
        withCredentials: true,
      }
    );
    e.preventDefault();
    setButtonSubmit("Envoi en cours...");
    setTimeout(() => {
      setButtonSubmit("Envoyer");
      setLastName("");
      setFirstName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 3000);
  }

  return (
    <div className="div-form-container">
      <h1>Contactez-moi</h1>
      <form className="form-contact" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="firstName" className="all-labels">
            <p>Prénom</p>
            <input
              id="firstName"
              className="form-contact-input"
              type="text"
              name="firstName"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="lastName" className="all-labels">
            <p>Nom</p>
            <input
              id="lastname"
              className="form-contact-input"
              type="text"
              name="lastName"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email" className="all-labels">
            <p>Email</p>
            <input
              className="form-contact-input"
              id="email"
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="phone" className="all-labels">
            <p>Téléphone</p>
            <input
              className="form-contact-input"
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
              maxLength="10"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>

        <div className="div-message">
          <label htmlFor="message">
            <p>Votre message</p>
            <textarea
              className="form-contact-textarea"
              id="message"
              name="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>

        <div className="div-btn">
          <button className="btn-contact-submit" type="submit">
            {buttonSubmit}
          </button>
        </div>
      </form>
    </div>
  );
}
