import React from 'react';
import {
  Box, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Button, AppBar, Toolbar
} from '@mui/material';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { useNavigate } from 'react-router-dom';

// Dummy data for charts and tables
const lineChartData = [
  { name: 'Jan', interviews: 30, feedbacks: 25 },
  { name: 'Feb', interviews: 20, feedbacks: 18 },
  { name: 'Mar', interviews: 25, feedbacks: 20 },
  { name: 'Apr', interviews: 35, feedbacks: 30 },
  { name: 'May', interviews: 40, feedbacks: 35 },
  { name: 'Jun', interviews: 50, feedbacks: 45 },
  { name: 'Jul', interviews: 60, feedbacks: 55 },
];

const barChartData = [
  { name: 'Technical', value: 40 },
  { name: 'Behavioral', value: 30 },
  { name: 'Case Study', value: 20 },
  { name: 'System Design', value: 10 },
];

const pieChartData = [
  { name: 'Technical', value: 40 },
  { name: 'Behavioral', value: 30 },
  { name: 'Case Study', value: 20 },
  { name: 'System Design', value: 10 },
];

const doughnutChartData = [
  { name: 'Interviews', value: 240 },
  { name: 'Feedbacks', value: 200 },
];

const recentInterviews = [
  { id: 1, date: '2024-07-01', type: 'Technical', duration: 60 },
  { id: 2, date: '2024-07-10', type: 'Behavioral', duration: 45 },
  { id: 3, date: '2024-07-15', type: 'Case Study', duration: 90 },
  { id: 4, date: '2024-07-20', type: 'System Design', duration: 120 },
];

const userListing = [
  { id: 1, user: 'John Doe', role: 'Software Engineer', level: 'Senior' },
  { id: 2, user: 'Jane Smith', role: 'Data Scientist', level: 'Mid' },
  { id: 3, user: 'Sam Wilson', role: 'Product Manager', level: 'Junior' },
  { id: 4, user: 'Lucy Brown', role: 'UX Designer', level: 'Senior' },
];

function AdminDashboard() {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/interview')}>Maintain Schedule</Button>
          <Button color="inherit" onClick={() => navigate('/interviewer')}>Interviewer</Button>
          <Button color="inherit" onClick={handlePrint}>Download Report</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: 'center', marginTop: 3, marginBottom: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
          Admin Dashboard
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Mock Interviews and Feedbacks Overview
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="interviews" stroke="#8884d8" />
              <Line type="monotone" dataKey="feedbacks" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Mock Interview Types Distribution
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={barChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Mock Interview Types Distribution (Pie Chart)
            </Typography>
            <PieChart width={500} height={300}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Doughnut Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Interviews vs Feedbacks (Doughnut Chart)
            </Typography>
            <PieChart width={500} height={300}>
              <Pie
                data={doughnutChartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {doughnutChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Recent Interviews */}
        <Grid item xs={12}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Recent Mock Interviews
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Duration (mins)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentInterviews.map((interview) => (
                    <TableRow key={interview.id}>
                      <TableCell>{interview.id}</TableCell>
                      <TableCell>{interview.date}</TableCell>
                      <TableCell>{interview.type}</TableCell>
                      <TableCell>{interview.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* User Listings */}
        <Grid item xs={12}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Users Participated in Mock Interviews
            </Typography>
            <Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Level</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userListing.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.user}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.level}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
}

export default AdminDashboard;
