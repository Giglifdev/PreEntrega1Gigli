import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  const showSuccessAlert = () => {
    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "Your query was sent",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      showSuccessAlert();
    }, 2000);
  };
  return (
    <div className="contactcontainer">
      <h1 className="headercontact">Contact Us</h1>
      <form className="formcontact" onSubmit={handleSubmit}>
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder="" required />
            <span>first name</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>last name</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" placeholder="" required />
          <span>email</span>
        </label>

        <label>
          <input className="input" placeholder="" type="tel" required />
          <span>contact number</span>
        </label>
        <label>
          <textarea className="input01" placeholder="" rows="3" required />
          <span>message</span>
        </label>

        <button href="#" className="fancy">
          <span className="top-key"></span>
          <span className="text">submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
