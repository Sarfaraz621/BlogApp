// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from ".././pages/AdminPage"; // Import the AdminPage

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<AdminPage />} />
        {/* Admin page for creating/editing blogs */}
      </Routes>
    </Router>
  );
}

export default App;
