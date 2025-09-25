import React from "react";
import "./contact.css"
import cheef from "./58fac1f040e874d2df9177fb34fcde60 (1).jpg";

function Staff(props) {
  return (
    <div className="contact-card">
      <img className="pic" src={props.image} alt={props.names} />
      <span className="name">{props.name}</span>
      <span className="phone">{props.phone}</span>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-title">
        <Staff image={cheef} name="Pit Cvoter" phone="+56 45654 1321 54" />
      </div>
      <div className="contact-title">
        <Staff image={cheef} name="Pit Cvoter" phone="+56 45654 1321 54" />
      </div>
      <div className="contact-title">
        <Staff image={cheef} name="Pit Cvoter" phone="+56 45654 1321 54" />
      </div>
    </div>
  );
}
export { Contact };
