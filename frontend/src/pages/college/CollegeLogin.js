/*import React, { useState } from 'react';
import axios from "axios";

const CollegeLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password }
      );
      console.log(res.data);
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  const styles = {
    wrapper: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1a1a1a',
    },
    card: {
      background: '#ffffff',
      padding: '2rem',
      borderRadius: '4px',
      width: '100%',
      maxWidth: '350px',
    },
    title: {
      textAlign: 'center',
      color: '#000',
      fontSize: '22px',
      marginBottom: '1.5rem',
      fontWeight: '800',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '8px 0',
      border: '2px solid #000',
      borderRadius: '0px',
      fontSize: '14px',
      boxSizing: 'border-box',
      outline: 'none'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '10px',
      textTransform: 'uppercase'
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginBottom: '10px',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>COLLEGE SYSTEM</h1>
        
        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={login}>
          <input 
            type="text" 
            style={styles.input} 
            placeholder="Enter your College ID" 
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input 
            type="password" 
            style={styles.input} 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollegeLogin;
*/
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CollegeLogin = () => {
  const navigate = useNavigate();

  // Bypasses all backend validation to go straight to dashboard
  const handleBypass = (e) => {
    e.preventDefault();
    navigate('/college/dashboard'); 
  };

  const styles = {
    wrapper: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
    },
    card: {
      background: '#fff',
      padding: '40px',
      borderRadius: '2px',
      width: '350px',
      textAlign: 'center',
      border: '4px solid #fff'
    },
    title: {
      fontSize: '24px',
      fontWeight: '900',
      marginBottom: '30px',
      letterSpacing: '2px'
    },
    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      border: '2px solid #000',
      boxSizing: 'border-box',
      fontWeight: 'bold'
    },
    button: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.title}>COLLEGE SYSTEM</div>
        <form onSubmit={handleBypass}>
          <input 
            type="text" 
            placeholder="ANY COLLEGE ID" 
            style={styles.input} 
          />
          <input 
            type="password" 
            placeholder="ANY PASSWORD" 
            style={styles.input} 
          />
          <button type="submit" style={styles.button}>
            ENTER DASHBOARD
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollegeLogin;