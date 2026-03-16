import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/public/LandingPage";

import CollegeRegister from "./pages/college/CollegeRegister";
import CollegeLogin from "./pages/college/CollegeLogin";
import CollegeDashboard from "./pages/college/CollegeDashboard";
import StudentsPage from "./pages/college/StudentsPage";
import MarksEntryPage from "./pages/college/MarksEntryPage";
import SubmitMarksPage from "./pages/college/SubmitMarksPage";
import SubmissionStatus from "./pages/college/SubmissionStatus";

import UniversityLogin from "./pages/university/UniversityLogin";
import UniversityDashboard from "./pages/university/UniversityDashboard";
import VerificationPage from "./pages/university/VerificationPage";
import BlockchainViewer from "./pages/university/BlockchainViewer";
import AuditLogs from "./pages/university/AuditLogs";

import Profile from "./pages/shared/Profile";
import Unauthorized from "./pages/shared/Unauthorized";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/college/register" element={<CollegeRegister />} />
        <Route path="/college/login" element={<CollegeLogin />} />
        <Route path="/college/dashboard" element={<CollegeDashboard />} />
        <Route path="/college/students" element={<StudentsPage />} />
        <Route path="/college/marks" element={<MarksEntryPage />} />
        <Route path="/college/submit" element={<SubmitMarksPage />} />
        <Route path="/college/status" element={<SubmissionStatus />} />

        <Route path="/university/login" element={<UniversityLogin />} />
        <Route path="/university/dashboard" element={<UniversityDashboard />} />
        <Route path="/university/verification" element={<VerificationPage />} />
        <Route path="/university/blockchain" element={<BlockchainViewer />} />
        <Route path="/university/audit" element={<AuditLogs />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;