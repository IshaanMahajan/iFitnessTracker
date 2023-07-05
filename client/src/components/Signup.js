import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    // showAlertSignUp();
  // };
  const showAlertSignup = () => {
    alert("Signup successful!");
  };
 let handleSubmit =async(e)=>{
  e.preventDefault();
  
  try{
    let res= await fetch("http://localhost:3001/api/signup",{method:"POST", headers: {
      'Content-Type': 'application/json'
    },body:JSON.stringify({
      username,
      email,
      password
    })});
    if(res.status===201){
      showAlertSignup();
      setUsername("")
      setConfirmPassword("");
      setPassword("");
      setEmail("");
    }else {
      console.log("Error");
    }
  }catch(err){
    console.log(err);
  }

 };
   
   
  return (
    <div className="centered-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form method="POST"  onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
