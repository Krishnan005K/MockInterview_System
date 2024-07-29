import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="i-name">
        <span style={{ color: darkMode ? "white" : "" }}>Our Experience</span>
        <span>with Mock Interviews</span>
        <span style={{ fontSize: "20px" }}>
          Practice realistic interviews for over 120 different job positions and improve your skills quickly.
        </span>
      </div>
      
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>10000+</div>
        <span style={{ color: darkMode ? 'white' : '' ,fontSize:"18px"}}>Mock </span>
        <span style={{fontSize:"18px"}}>Sessions</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>15+</div>
        <span style={{ color: darkMode ? 'white' : '',fontSize:"18px" }}>Feedback </span>
        <span style={{fontSize:"18px"}}>Sessions</span>
      </div>
      
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>50+</div>
        <span style={{ color: darkMode ? 'white' : '',fontSize:"18px" }}>Successful </span>
        <span style={{fontSize:"18px"}}>Placements</span>
      </div>
        <div>
        </div>
    </div>
    
    
  );
};

export default Experience;
