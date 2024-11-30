import React from 'react';
import ChartComponent from './ChartComponent'; // Ensure you have a properly configured ChartComponent

function Reports() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Reports</h1>
        <p style={styles.subtitle}>
          Explore detailed analytics and insights generated from project data.
          Below are comprehensive charts highlighting trends in actual vs planned solar capacity additions from 2015 to 2024.
        </p>
      </div>
      <div style={styles.chartSection}>
        {/* Multiple Charts */}
        <div style={styles.chartCard}>
          <h2 style={styles.chartTitle}>Static Chart: Investment Trends</h2>
          <ChartComponent rotate={false} chartIndex={0} />
          <p style={styles.chartDescription}>
            This chart displays static data representing investment trends over time. It highlights key data points to demonstrate
            changes in investment patterns and showcases the stability or growth in the sector.
          </p>
        </div>

        <div style={styles.chartCard}>
          <h2 style={styles.chartTitle}>Dynamic Chart: Solar Capacity Additions (2015–2024)</h2>
          <ChartComponent rotate={false} chartIndex={1} />
          <p style={styles.chartDescription}>
            This chart dynamically visualizes solar capacity additions from 2015 to 2024. It compares actual and planned additions,
            providing insights into the effectiveness of renewable energy policies and initiatives.
          </p>
        </div>

        <div style={styles.chartCard}>
          <h2 style={styles.chartTitle}>Dynamic Chart: Solar Capacity Additions (2023–2024)</h2>
          <ChartComponent rotate={false} chartIndex={2} />
          <p style={styles.chartDescription}>
            Focusing on 2023 and 2024, this chart highlights the most recent data to emphasize the planned surge in solar capacity.
            It provides critical insights into short-term trends and immediate goals in the renewable energy sector.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to bottom, #ffffff, #f0f4f8)',
    minHeight: '100vh',
    fontFamily: '"Poppins", sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
  },
  chartSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px',
    alignItems: 'center',
  },
  chartCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
  },
  chartTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  chartDescription: {
    marginTop: '15px',
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    textAlign: 'justify',
  },
};

export default Reports;
