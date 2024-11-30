import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaLock } from 'react-icons/fa'; // Import only the used icons
import ChartComponent from './ChartComponent'; // Ensure you have a properly configured ChartComponent

function Summary() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Project Summary</h1>
        <p style={styles.paragraph}>
          This project is a single-page application (SPA) designed to deliver a dynamic user experience 
          with high responsiveness and robust backend capabilities. The frontend is developed using React,
          a powerful JavaScript library known for its efficient rendering and state management features.
        </p>
        <p style={styles.paragraph}>
          The backend of the application runs on Node.js, utilizing Express.js to manage server-side logic
          and routing. Node.js's non-blocking I/O model provides efficient processing of simultaneous client
          requests, making it suitable for applications expecting high traffic volumes. MongoDB, our chosen
          NoSQL database, handles data storage with its flexible document structure, facilitating quick
          retrieval and storage of data, which is crucial for the performance of real-time web applications.
        </p>
        <p style={styles.paragraph}>
          Authentication across the platform is secured using JSON Web Tokens (JWT), ensuring that all
          transactions remain secure and that user data is protected. This project combines cutting-edge
          technology with a strong focus on security and scalability.
        </p>
      </div>

      {/* Tech Stack Section */}
      <div style={styles.techStack}>
        <h2 style={styles.techStackTitle}>Tech Stack</h2>
        <div style={styles.techItems}>
          <div style={styles.techItem}>
            <FaReact style={styles.icon} />
            <p>React.js</p>
          </div>
          <div style={styles.techItem}>
            <FaNodeJs style={styles.icon} />
            <p>Node.js & Express</p>
          </div>
          <div style={styles.techItem}>
            <FaDatabase style={styles.icon} />
            <p>MongoDB</p>
          </div>
          <div style={styles.techItem}>
            <FaLock style={styles.icon} />
            <p>JWT Authentication</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div style={styles.chartContainer}>
        <h2 style={styles.chartTitle}>Data Visualization: Solar Capacity Additions</h2>
        <ChartComponent rotate={true} />
        <p style={styles.chartDescription}>
          The chart above demonstrates the impact of clean energy investments on solar capacity additions. 
          It highlights trends and comparisons between actual and planned values over time.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    background: 'linear-gradient(to bottom, #e3f2fd, #ffffff)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: '"Poppins", sans-serif',
  },
  card: {
    maxWidth: '900px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '15px',
  },
  techStack: {
    maxWidth: '900px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    padding: '30px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    textAlign: 'center',
  },
  techStackTitle: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
  },
  techItems: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '20px',
  },
  techItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    fontSize: '2rem',
    color: '#007BFF',
    marginBottom: '10px',
  },
  chartContainer: {
    maxWidth: '900px',
    width: '100%',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  chartTitle: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
  },
  chartDescription: {
    fontSize: '0.95rem',
    color: '#777',
    marginTop: '20px',
    fontStyle: 'italic',
  },
};

export default Summary;
