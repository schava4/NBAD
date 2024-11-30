import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Summary from './components/Summary';
import Reports from './components/Reports';
import Signup from './components/Signup';

function App() {
  const { token } = useAuth();

  return (
    <>
      {token && <NavBar />}
      <Routes>
        {/* Allow access to Signup page without requiring a token */}
        <Route path="/signup" element={<Signup />} />

        {/* Login Route */}
        <Route path="/login" element={!token ? <Login /> : <Navigate replace to="/dashboard" />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate replace to="/login" />} />
        <Route path="/summary" element={token ? <Summary /> : <Navigate replace to="/login" />} />
        <Route path="/reports" element={token ? <Reports /> : <Navigate replace to="/login" />} />

        {/* Default Route */}
        <Route path="*" element={token ? <Navigate replace to="/dashboard" /> : <Navigate replace to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
