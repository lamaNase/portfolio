import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./ContactInfo.css"

export default function ContactInfo() {
  return (
    <div className="contact-section">
      <div className="contact-item">
        <div className="icon-wrapper">
          <div className="icon-border"></div>
          <MapPin size={22} className="icon-center" />
        </div>
        <div className="contact-text">
          <h4>Address</h4>
          <p>Ramallah, Palestine</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="icon-wrapper">
          <div className="icon-border"></div>
          <Phone size={22} className="icon-center" />
        </div>
        <div className="contact-text">
          <h4>Phone</h4>
          <p>+972 59-552-7544</p>
        </div>
      </div>

      <div className="contact-item">
        <div className="icon-wrapper">
          <div className="icon-border"></div>
          <Mail size={22} className="icon-center" />
        </div>
        <div className="contact-text">
          <h4>Email</h4>
          <p>lamazahi40@gmail.com</p>
        </div>
      </div>
    </div>
  );
}