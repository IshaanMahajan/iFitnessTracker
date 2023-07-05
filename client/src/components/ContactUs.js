import React, { useState } from "react";
import "./styles/ContactUs.css";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const showAlertSubmit = () => {
    alert("Thanks for Submitting");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const newData = { name, email, message }; 
      setSubmittedData([...submittedData, newData]); 
      let res= await fetch("http://localhost:3001/api/contactus",{method:"POST", headers: {
        'Content-Type': 'application/json'
      },body:JSON.stringify({
        name,
        email,
        message
      })});
      if(res.status===200){
        showAlertSubmit();
        setName("");
        setEmail("");
        setMessage("");
      }else {
        console.log("Error");
      }
    }catch(err){
      console.log(err);
    }
  
   };


   
   return (
     <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {submittedData.length > 0 && (
        <div className="submitted-data-table">
          <h3>Submitted Data</h3>
          <table id="contactTable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ContactUsForm;
