import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Avatar, Menu, MenuItem, Snackbar, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { useNavigate, useLocation } from 'react-router-dom';

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
  { name: 'Week 1', interviews: 30 },
  { name: 'Week 2', interviews: 45 },
  { name: 'Week 3', interviews: 28 },
  { name: 'Week 4', interviews: 35 },
];

const pieChartData = [
  { name: 'Level 1', value: 30 },
  { name: 'Level 2', value: 20 },
  { name: 'Level 3', value: 50 },
];

const scatterChartData = [
  { x: 1, y: 400 },
  { x: 2, y: 300 },
  { x: 3, y: 500 },
  { x: 4, y: 200 },
  { x: 5, y: 700 },
];

const tableData = [
  { id: 1, name: 'John Doe', progress: '75%' },
  { id: 2, name: 'Jane Smith', progress: '50%' },
  { id: 3, name: 'Sam Wilson', progress: '90%' },
];

function UserDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user; // Get the user data from the location state

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(true);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile', { state: { user } });
  };

  const handleMockRedirect = () => {
    navigate('/mock');
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Welcome, {user?.name || 'User'}!
          </Typography>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar alt={user?.name} src="/path/to/avatar.jpg" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Monthly Activity
              </Typography>
              <LineChart width={400} height={250} data={lineChartData}>
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
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Weekly Interviews
              </Typography>
              <BarChart width={400} height={250} data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="interviews" fill="#8884d8" />
              </BarChart>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Progress Levels
              </Typography>
              <PieChart width={400} height={250}>
                <Pie
                  data={pieChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28'][index % 3]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Weekly Usage
              </Typography>
              <ScatterChart width={400} height={250}>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="Day" />
                <YAxis type="number" dataKey="y" name="Usage" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Usage" data={scatterChartData} fill="#8884d8" />
              </ScatterChart>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                User Progress
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Progress</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.progress}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={200000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="info"
          sx={{ width: '100%' }}
          action={
            <>
              <Button color="inherit" size="small" onClick={handleMockRedirect}>
                GO TO MOCK
              </Button>
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleSnackbarClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        >
          New mock interview is enabled
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default UserDashboard;
