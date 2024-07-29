import React from 'react';
import key from '../assets/images/partner.jpg';
import { Typography } from '@mui/material';
import './Partner.css';

function Partner() {
  return (
    <div className="partner-container">
       <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
          Our{" "}
          <span style={{ color: "#FCA61F" ,fontSize:"60px"}}>Partners</span>
        </Typography>
      <img className="partner-logo" src={key} alt="Logo"  style={{height:"500px", width :"800px"}} />
    </div>
  );
}

export default Partner;
