import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function ChartComponent({ rotate, chartIndex }) {
  const [charts, setCharts] = useState([]);
  const [currentChartIndex, setCurrentChartIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const [staticResponse, dynamicResponse] = await Promise.all([
          axios.get('http://3.87.67.208:3000/api/static-chart-data'),
          axios.get('http://3.87.67.208:3000/api/dynamic-chart-data'),
        ]);

        // Chart definitions
        const staticChart = {
          type: 'line',
          data: {
            labels: staticResponse.data.labels,
            datasets: staticResponse.data.datasets,
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Static Chart: Investment Trends' },
            },
          },
        };

        const dynamicFullRangeChart = {
          type: 'bar',
          data: {
            labels: dynamicResponse.data.labels,
            datasets: dynamicResponse.data.datasets.map((dataset) => ({
              ...dataset,
              backgroundColor: dataset.label === 'Actual' ? 'rgba(0, 76, 153, 0.6)' : 'rgba(0, 204, 102, 0.6)',
              borderColor: dataset.label === 'Actual' ? 'rgb(0, 76, 153)' : 'rgb(0, 204, 102)',
              borderWidth: 2,
            })),
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Dynamic Chart: Solar Capacity Additions (2015–2024)' },
            },
          },
        };

        const filteredChart = {
          type: 'bar',
          data: {
            labels: ['2023', '2024'],
            datasets: dynamicResponse.data.datasets.map((dataset) => ({
              ...dataset,
              data: dataset.data.slice(
                dynamicResponse.data.labels.indexOf('2023'),
                dynamicResponse.data.labels.indexOf('2024') + 1
              ),
              backgroundColor: dataset.label === 'Actual' ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)',
              borderColor: dataset.label === 'Actual' ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)',
            })),
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Dynamic Chart: Solar Capacity Additions (2023–2024)' },
            },
          },
        };

        setCharts([staticChart, dynamicFullRangeChart, filteredChart]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching chart data:', error);
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  useEffect(() => {
    if (rotate && charts.length > 0) {
      const interval = setInterval(() => {
        setCurrentChartIndex((prevIndex) => (prevIndex + 1) % charts.length);
      }, 5000); // Change chart every 5 seconds
      return () => clearInterval(interval);
    }
  }, [charts, rotate]);

  if (loading) {
    return <p>Loading chart data...</p>;
  }

  const currentChart = charts[rotate ? currentChartIndex : chartIndex];

  return (
    <div style={styles.container}>
      <h2 style={styles.chartTitle}>{currentChart.options.plugins.title.text}</h2>
      <div style={styles.chartWrapper}>
        {currentChart.type === 'line' ? (
          <Line data={currentChart.data} options={currentChart.options} />
        ) : (
          <Bar data={currentChart.data} options={currentChart.options} />
        )}
      </div>
      <p style={styles.description}>
        {rotate && currentChartIndex === 0
          ? 'This chart displays static data representing monthly investment trends.'
          : currentChartIndex === 1
          ? 'This chart shows solar capacity additions from 2015 to 2024.'
          : 'This chart highlights solar capacity additions for 2023–2024.'}
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    background: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  chartTitle: {
    fontSize: '1.8rem',
    marginBottom: '10px',
  },
  chartWrapper: {
    height: '400px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    textAlign: 'justify',
  },
};

export default ChartComponent;
