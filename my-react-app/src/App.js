import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { themeContext } from "./Context";
import Admin from "./Admin";
import VideoRec from "./components/VideoRec";
import Meet from "./Meet";
import Login from "./components/Login";
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Caro from "./components/Caro";
import Partner from "./components/Partner";
import ProfilePage from "./components/Profile";
import InterviewCreate from "./components/InterviewCreate";
import InterviewerPage from "./components/InterviewerPage";
import InterviewDashboard from "./components/InterviewDashboard";
// import PopularResidencies from "./PopularResidencies";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Router>  
        <Routes>
          <Route path="/" element={<HomePage />} />         
          <Route path="/signin" element={<Login />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/mock" element={<VideoRec />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/admin" element={<AdminDashboard />} />
           <Route path="/res" element={<Caro />} /> 
           <Route path="/partner" element={<Partner />} /> 
           <Route path="/profile" element={<ProfilePage />} /> 
           <Route path="/interview" element={<InterviewCreate />} /> 
           <Route path="/interviewer" element={<InterviewerPage />} /> 
           <Route path="/interviewdash" element={<InterviewDashboard />} /> 

           
          

        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
