import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import PreDesignedPlans from './components/PreDesignedPlans';
import NutritionTracking from './components/NutritionTracking';
import Challenges from './components/Challenges';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Login from './components/Login.js';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pre-designed-plans" element={<PreDesignedPlans />} />
          <Route path="/nutrition-tracking" element={<NutritionTracking />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <footer className="footer">
          <p>
            &copy; 2023 Fitness Tracker. All rights
            reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
