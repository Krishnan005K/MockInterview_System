import React from 'react';
import { Box, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { useNavigate } from 'react-router-dom';

// Dummy data for charts and tables
const lineChartData = [
  { name: 'Jan', activity: 4000, goals: 2400 },
  { name: 'Feb', activity: 3000, goals: 2210 },
  { name: 'Mar', activity: 2000, goals: 2290 },
  { name: 'Apr', activity: 2780, goals: 2000 },
  { name: 'May', activity: 1890, goals: 2181 },
  { name: 'Jun', activity: 2390, goals: 2500 },
  { name: 'Jul', activity: 3490, goals: 2100 },
];

const barChartData = [
  { name: 'Completed Tasks', value: 4000 },
  { name: 'Pending Tasks', value: 3000 },
  { name: 'Overdue Tasks', value: 2000 },
];

const pieChartData = [
  { name: 'Completed', value: 4000 },
  { name: 'Pending', value: 3000 },
  { name: 'Overdue', value: 2000 },
];

const doughnutChartData = [
  { name: 'Sales', value: 24000 },
  { name: 'Expenses', value: 14000 },
];

const bubbleChartData = [
  { name: 'Project A', x: 30, y: 40, z: 2000 },
  { name: 'Project B', x: 50, y: 70, z: 3000 },
  { name: 'Project C', x: 70, y: 60, z: 1000 },
  { name: 'Project D', x: 90, y: 90, z: 5000 },
];

const stackedBarData = [
  { name: 'Jan', completed: 4000, pending: 2400 },
  { name: 'Feb', completed: 3000, pending: 2210 },
  { name: 'Mar', completed: 2000, pending: 2290 },
  { name: 'Apr', completed: 2780, pending: 2000 },
  { name: 'May', completed: 1890, pending: 2181 },
  { name: 'Jun', completed: 2390, pending: 2500 },
  { name: 'Jul', completed: 3490, pending: 2100 },
];

const recentActivities = [
  { id: 1, date: '2024-07-01', activity: 'Completed Task', details: 'Finished project report' },
  { id: 2, date: '2024-07-10', activity: 'Pending Task', details: 'Prepare for team meeting' },
  { id: 3, date: '2024-07-15', activity: 'Completed Task', details: 'Submitted expense report' },
  { id: 4, date: '2024-07-20', activity: 'Overdue Task', details: 'Review project proposals' },
];

function UserPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
          User Dashboard
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ marginBottom: 3 }}
        >
          Home
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Activity and Goals Overview
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
              <Line type="monotone" dataKey="activity" stroke="#8884d8" />
              <Line type="monotone" dataKey="goals" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Task Status
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
              Task Distribution
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
              Sales vs Expenses (Doughnut Chart)
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

        {/* Bubble Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Project Performance
            </Typography>
            <ScatterChart
              width={500}
              height={300}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="X" unit="px" />
              <YAxis type="number" dataKey="y" name="Y" unit="px" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Projects" data={bubbleChartData} fill="#8884d8" />
            </ScatterChart>
          </Paper>
        </Grid>

        {/* Stacked Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Monthly Task Breakdown
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={stackedBarData}
              stackOffset="expand"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" stackId="a" fill="#8884d8" />
              <Bar dataKey="pending" stackId="a" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Recent Activities
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Activity</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recentActivities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell>{activity.id}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell>{activity.activity}</TableCell>
                      <TableCell>{activity.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserPage;
