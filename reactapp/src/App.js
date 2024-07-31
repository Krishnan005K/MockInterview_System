// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
// import Interview from './components/Interview';
// import Reports from './components/Reports';
// import Notifications from './components/Notifications';
// import Profile from './components/Profile';
// import Dashboard from './components/Dashboard';
// import Navbar from './components/Navbar'; // Uncommented Navbar import
import Admin from './components/Admin';
import Coder from './components/Coder';
import Interviewer from './components/Interviewer';
import VideoRec from './components/VideoRec';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/interview" element={<Interview />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="/practice-sessions" element={<VideoRec />} /> 
        <Route path="/interviewer-dashboard" element={<Interviewer/>} />
        <Route path="/coder-dashboard" element={<Coder/>} />
        <Route path="/admin-dashboard" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;