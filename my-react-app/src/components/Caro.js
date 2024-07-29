import React from "react";
import ScheduleMeet from "../assets/images/789.jpg";
import AttendInterview from "../assets/images/456.jpg";
import MasterSkills from "../assets/images/999.jpg";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

const Caro = () => {
  const workInfoData = [
    {
      image: ScheduleMeet,
      title: "Schedule a Meet",
      text: "Easily schedule a mock interview at a time that works for you. Our flexible scheduling options ensure you can practice without disrupting your routine.",
      color: "#f44336", // Red
      
    },
    {
      image: AttendInterview,
      title: "Attend the Interview",
      text: "Participate in a realistic mock interview conducted by experts. Receive immediate feedback and constructive criticism to help you improve.",
      color: "#3f51b5", // Blue
    },
    {
      image: MasterSkills,
      title: "Master Your Skills",
      text: "Refine your interview techniques and boost your confidence with our tailored feedback. Track your progress and master the skills needed to succeed.",
      color: "#4caf50", // Green
    },
  ];

  return (
    <div className="caro" id="caro">
    <Container sx={{ paddingY: 4 }}>
      <div style={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
          How It{" "}
          <span style={{ color: "#FCA61F" ,fontSize:"90px"}}>Works...</span>
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", marginBottom: 4 }}>
          Our mock interview system is designed to help you prepare effectively. Follow these steps to make the most of our services.
        </Typography>
      </div>
      <Grid container spacing={4}>
        {workInfoData.map((data) => (
          <Grid item xs={12} sm={6} md={4} key={data.title}>
            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 2 }}>
              <CardMedia
                component="img"
                image={data.image}
                alt={data.title}
                sx={{ width: "100%", height: "auto", maxWidth: 300, maxHeight: 250, marginBottom: 2 }}

              />
              <CardContent>
                <Typography variant="h5" >
                  {data.title}
                </Typography>
                <Typography variant="body1">{data.text}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Caro;
