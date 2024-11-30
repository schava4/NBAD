import React from 'react';

function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Dashboard</h1>
        <p style={styles.content}>
          The U.S. government's clean energy initiatives have led to significant investments in the manufacturing sector. 
          With $880 billion in new investments announced since January 2021, the focus has been on enhancing clean energy 
          production capabilities. Notable growth has been observed in manufacturing facilities construction, with an 
          impressive increase in spending that doubles the projections from previous years. This strategic move is expected 
          to bolster economic growth and ensure a sustainable energy future.
        </p>
        <img
  src="/image.png" 
  alt="Clean Energy Initiative"
  style={styles.image}
/>
        <p style={styles.source}>
          Source: <a href="https://www.whitehouse.gov/briefing-room/blog/2024/07/01/building-a-thriving-clean-energy-economy-in-2023-and-beyond-a-six-month-update/" style={styles.link}>
            White House Briefing
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    fontFamily: '"Poppins", sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '90%',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  content: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  source: {
    fontSize: '0.9rem',
    color: '#333',
    marginTop: '15px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  linkHover: {
    textDecoration: 'underline',
  },
};

export default Dashboard;
