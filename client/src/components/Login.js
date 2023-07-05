import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const showAlertLogin = () => {
    alert("Login successful!");
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let res = await fetch("http://localhost:3001/api/login",{method:"POST", headers: {
        'Content-Type': 'application/json'
      },body:JSON.stringify({
        username,
        password
      })});
      if(res.status===200){
        showAlertLogin();
        setUsername("")
        setPassword("");
        setShowPassword(false);
      }else {
        console.log("Error");
      }
    }catch(err){
      console.log(err);
    }
  
   };
   

   return (
     <div className="centered-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              id="toggle-password"
              onClick={togglePasswordVisibility}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
