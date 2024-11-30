import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaTachometerAlt, FaChartBar, FaSignOutAlt, FaInfoCircle } from 'react-icons/fa';

function NavBar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate(); // Hook to handle navigation

  // Handle click on logo or name to redirect to Dashboard
  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  return token ? (
    <nav style={styles.navbar}>
      <div style={styles.logo} onClick={handleLogoClick}>
        <img 
          src="https://replicate.delivery/pbxt/OGTF8lbFnOKjP1IfCyuBttgZ0K4MvPBcC9Hn1fzaUxnIu64QA/out.png" 
          alt="S64 Logo" 
          style={styles.logoImage} 
        /> 
        S64
      </div>
      <div style={styles.navBox}>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>
            <Link to="/dashboard" style={styles.link}>
              <FaTachometerAlt style={styles.icon} /> Dashboard
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/summary" style={styles.link}>
              <FaInfoCircle style={styles.icon} /> Summary
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/reports" style={styles.link}>
              <FaChartBar style={styles.icon} /> Reports
            </Link>
          </li>
          <li style={styles.navItem}>
            <button onClick={logout} style={styles.logoutButton}>
              <FaSignOutAlt style={styles.icon} /> Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  ) : null;
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: 10,
  },
  logo: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: '"Poppins", sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer', // Make the logo clickable
  },
  logoImage: {
    height: '35px',
    width: '35px',
    borderRadius: '50%',
  },
  navBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '8px',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '1.1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '10px 16px',
    borderRadius: '5px',
    transition: 'background 0.3s, transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '1rem',
  },
  linkHover: {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
  },
  logoutButton: {
    background: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background 0.3s, transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoutButtonHover: {
    background: '#d32f2f',
  },
  icon: {
    fontSize: '1.2rem',
  },
  '@media (max-width: 768px)': {
    navbar: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    navLinks: {
      flexDirection: 'column',
      gap: '15px',
      marginTop: '10px',
    },
    logo: {
      fontSize: '1.2rem',
      marginBottom: '15px',
    },
  },
};

export default NavBar;
