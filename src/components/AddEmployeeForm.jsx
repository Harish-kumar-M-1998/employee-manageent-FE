// src/components/AddEmployeeForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEmployee } from '../slices/employeeSlice';
import { Box, TextField, Button, MenuItem, Grid } from '@mui/material';

const AddEmployeeForm = () => {
  const dispatch = useDispatch();
  const [employeeData, setEmployeeData] = useState({
    name: '',
    address: '',
    age: '',
    department: '',
    status: '',
  });

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(employeeData));
    setEmployeeData({
      name: '',
      address: '',
      age: '',
      department: '',
      status: '',
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ padding: 2, maxWidth: '600px', margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            name="address"
            value={employeeData.address}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Age"
            name="age"
            value={employeeData.age}
            onChange={handleChange}
            required
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Department"
            name="department"
            value={employeeData.department}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Status"
            name="status"
            value={employeeData.status}
            onChange={handleChange}
            required
            select
            fullWidth
          >
            <MenuItem value="Remote">Remote</MenuItem>
            <MenuItem value="Contract">Contract</MenuItem>
            <MenuItem value="Full-time">Full-time</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Employee
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddEmployeeForm;
