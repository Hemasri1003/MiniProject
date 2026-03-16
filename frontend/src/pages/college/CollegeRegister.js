import React, { useState } from 'react';
import axios from "axios";

const CollegeRegister = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    collegeId: "",
    adminName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      setSuccess(true);
      console.log(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const styles = {
    wrapper: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f1f5f9',
      padding: '20px'
    },
    card: {
      background: '#ffffff',
      padding: '2.5rem',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '500px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#0f172a',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    inputGroup: { marginBottom: '1rem' },
    label: { display: 'block', fontSize: '14px', marginBottom: '5px', color: '#475569' },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #cbd5e1',
      borderRadius: '6px',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '1rem'
    }
  };

  if (success) return <div style={styles.wrapper}><h2>Registration Successful!</h2></div>;

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>College Registration</h1>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        
        <form onSubmit={handleRegister}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>College Name</label>
            <input name="collegeName" style={styles.input} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>College ID / Code</label>
            <input name="collegeId" style={styles.input} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Admin Email</label>
            <input type="email" name="email" style={styles.input} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" name="password" style={styles.input} onChange={handleChange} required />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input type="password" name="confirmPassword" style={styles.input} onChange={handleChange} required />
          </div>
          <button type="submit" style={styles.button}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CollegeRegister;