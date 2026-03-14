# Exam Marks Verification using Blockchain

## Project Description
This project is a **MERN Stack + Blockchain based system** used to securely store and verify student marks.  
Each marks entry is converted into a **SHA-256 hash** and stored as a block in a blockchain structure.  
This helps detect any tampering or modification of marks.

---

## Tech Stack

Frontend:
- React.js
- Axios
- React Router

Backend:
- Node.js
- Express.js

Database:
- MongoDB

Other Concepts:
- Blockchain structure
- SHA-256 Hashing
- REST APIs

---

## Project Structure

```
exam-blockchain-project
│
├── client (React Frontend)
│   ├── src
│   │   ├── pages
│   │   │   ├── LoginPage.js
│   │   │   ├── MarksEntryPage.js
│   │   │   ├── BlockchainViewer.js
│   │   │   └── VerificationPage.js
│   │   │
│   │   ├── components
│   │   └── services
│
├── server (Node + Express Backend)
│   ├── routes
│   ├── controllers
│   ├── models
│   ├── blockchain
│   └── utils
```

---

## Main Features

- Secure marks entry
- Blockchain-based data storage
- Hash generation using SHA-256
- Marks verification system
- Blockchain viewer for transparency

---

## Installation

### 1. Clone the repository

```
git clone <repository-link>
```

### 2. Install frontend dependencies

```
cd client
npm install
```

### 3. Install backend dependencies

```
cd server
npm install
```

---

## Running the Project

Start backend server:

```
cd server
npm start
```

Start frontend:

```
cd client
npm start
```

Frontend runs on:
```
http://localhost:3000
```

Backend runs on:
```
http://localhost:5000
```
