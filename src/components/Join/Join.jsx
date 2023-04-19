import React, { useRef, useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_svap1ya",
        "template_e568gpk",
        form.current,
        "2y6UsjmVWBSI39dNh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [inputEmail, setInputEmail] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    setInputEmail(value);
  }

  function handleClick() {
    setTimeout(() => {
      setInputEmail("");
      alert("Your Email address is successfully submitted.");
    }, 1000);
  }

  return (
    <div className='join'>
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input
            onChange={handleChange}
            type='email'
            name='user_email'
            placeholder='Enter your Email address'
            value={inputEmail}
          />
          <button onClick={handleClick} className='btn btn-j'>
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
