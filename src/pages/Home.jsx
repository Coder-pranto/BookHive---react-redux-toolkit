import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to BookHive</h1>
      <p style={styles.description}>Discover a world of books and explore the fascinating stories they hold.</p>
      <Link to="/show_book"><button style={styles.button}>Get Started</button></Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#333',
  },
  description: {
    fontSize: '18px',
    marginBottom: '40px',
    color: '#666',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Home;
