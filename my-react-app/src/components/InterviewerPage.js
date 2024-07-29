import React, { useState } from 'react';
import {
  Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const initialStudents = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

function InterviewerPage() {
  const [students, setStudents] = useState(initialStudents);
  const [open, setOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({ id: null, name: '', email: '' });

  const handleOpen = (student = { id: null, name: '', email: '' }) => {
    setCurrentStudent(student);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentStudent({ id: null, name: '', email: '' });
  };

  const handleChange = (e) => {
    setCurrentStudent({ ...currentStudent, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (currentStudent.id) {
      setStudents(students.map(student => (student.id === currentStudent.id ? currentStudent : student)));
    } else {
      setStudents([...students, { ...currentStudent, id: students.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Manage Students
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add Student
      </Button>
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(student)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(student.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentStudent.id ? 'Edit Student' : 'Add Student'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={currentStudent.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={currentStudent.email}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            {currentStudent.id ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default InterviewerPage;
