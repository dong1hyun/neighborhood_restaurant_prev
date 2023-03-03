import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Routes/Components/Header';
import LandingPage from './Routes/Components/LandingPage';
import Map from './Routes/Components/Map';
import Home from './Routes/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:keyword" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default App;
