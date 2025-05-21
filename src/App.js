import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/CustomerInterface/NavBar';
import HomePage from './Components/CustomerInterface/HomePage';
import AboutUs from './Components/CustomerInterface/AboutUs';
import Connect from './Components/CustomerInterface/Connect';
import Offers from './Components/CustomerInterface/Offers';
import AdminInterface from './Components/AdminInterface/AdminInterface';
// Import other components as needed

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/AdminInterface" element={<AdminInterface />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;