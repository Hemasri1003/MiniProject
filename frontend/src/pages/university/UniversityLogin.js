import React, { useState } from 'react';
import axios from "axios";

const CollegeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      console.log("Success:", res.data);
      // Logic for token storage (e.g., localStorage.setItem('token', res.data.token))
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f7f6',
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center'
    },
    header: {
      color: '#003366',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    inputGroup: {
      marginBottom: '15px',
      textAlign: 'left'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '14px',
      color: '#666'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#003366',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px'
    },
    error: {
      color: '#d9534f',
      fontSize: '14px',
      marginBottom: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>University Portal</h1>
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Institutional Email</label>
            <input 
              type="email" 
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="name@university.edu"
              required 
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password"
              required 
            />
          </div>

          <button 
            type="submit" 
            style={styles.button}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CollegeLogin;