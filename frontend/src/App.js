import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';
import Home1 from './Component/Home1';
import Feedback from './Component/Feedback';
import AdminDashboard from './Component/Admin/AdminPanel';
import InterviewerDashboard from './Component/Interviewer/InterviewerDashboard';
import IntervieweeDashboard from './Component/Interviewee/IntervieweeDashboard';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Home1 />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admindashboard/*" element={<AdminDashboard />} />
        <Route path="/interviewerdashboard/*" element={<InterviewerDashboard />} />
        <Route path="/intervieweedashboard/*" element={<IntervieweeDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
