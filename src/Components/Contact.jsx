import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-heading">
        Have a Question In Mind? <br />
        Let Us Help You
      </h1>
      <div className="contact-form-container">
        <form className="inputs">
          <input type="text" placeholder="yourmail@gmail.com" />
          <textarea placeholder="Your question" className="message"></textarea>
          <button className="submit-button">Submit</button>
        </form>
        {/* <input type="text" placeholder="yourgmail@gmail.com" />
        <button className="secondary-button">Submit</button> */}
      </div>
    </div>
  );
};

export default Contact;
