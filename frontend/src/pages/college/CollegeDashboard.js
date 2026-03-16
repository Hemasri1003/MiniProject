import React, { useState } from 'react';

const CollegeDashboard = () => {
  const [marksData, setMarksData] = useState({
    academicYear: "",
    collegeCode: "",
    courseType: "UG",
    semester: "",
    branch: "",
    subjectCode: ""
  });

  const handleChange = (e) => {
    setMarksData({ ...marksData, [e.target.name]: e.target.value });
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: 'sans-serif'
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#0f172a',
      color: 'white',
      padding: '20px'
    },
    main: {
      flex: 1,
      padding: '40px'
    },
    card: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
      maxWidth: '900px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '20px'
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '6px',
      border: '1px solid #cbd5e1',
      boxSizing: 'border-box'
    },
    label: {
      display: 'block',
      fontSize: '13px',
      fontWeight: '600',
      color: '#475569',
      marginBottom: '5px'
    },
    button: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '6px',
      fontWeight: '600',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2>UniChain</h2>
        <nav style={{ marginTop: '40px' }}>
          <div style={{ marginBottom: '15px', cursor: 'pointer' }}>Dashboard</div>
        </nav>
      </aside>

      <main style={styles.main}>
        <h1 style={{ marginBottom: '20px' }}>ExamCode Generation Dashboard</h1>
        
        <div style={styles.card}>
          <h3 style={{ marginBottom: '20px' }}>Session Information</h3>
          <div style={styles.grid}>
            <div>
              <label style={styles.label}>Academic Year</label>
              <input 
                name="academicYear" 
                placeholder="e.g. 2025-26" 
                style={styles.input} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label style={styles.label}>College Code</label>
              <input 
                name="collegeCode" 
                placeholder="e.g. JNTUH-01" 
                style={styles.input} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label style={styles.label}>Course Level</label>
              <select name="courseType" style={styles.input} onChange={handleChange}>
                <option value="UG">Undergraduate (UG)</option>
                <option value="PG">Postgraduate (PG)</option>
              </select>
            </div>
            <div>
              <label style={styles.label}>Semester</label>
              <input 
                name="semester" 
                placeholder="1-8" 
                style={styles.input} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label style={styles.label}>Branch</label>
              <input 
                name="branch" 
                placeholder="e.g. CSE" 
                style={styles.input} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label style={styles.label}>Subject Code</label>
              <input 
                name="subjectCode" 
                placeholder="e.g. CS301" 
                style={styles.input} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <button style={styles.button}>Proceed to Code Generation</button>
        </div>
      </main>
    </div>
  );
};

export default CollegeDashboard;