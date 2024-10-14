// src/components/EmployeeModal.jsx
import React, { useState } from 'react';
import { Modal, Tab, Tabs, Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateEmployee } from '../slices/employeeSlice';

const EmployeeModal = ({ open, handleClose, employee }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [updatedData, setUpdatedData] = useState(employee);
  const dispatch = useDispatch();

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleUpdate = () => {
    dispatch(updateEmployee({ id: employee._id, updatedData }));
  };

  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          width: '90%',
          maxWidth: '600px',
          padding: 2,
          backgroundColor: 'white',
          margin: 'auto',
          mt: 5,
          overflowY: 'auto',
          maxHeight: '90vh',
        }}
      >
        <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 2 }}>
          <Tab label="Employee Details" />
          <Tab label="Audit Trail" />
        </Tabs>
        {tabIndex === 0 && (
          <Box>
            <h3>Employee Details</h3>
            <TextField
              label="Name"
              name="name"
              value={updatedData.name}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Address"
              name="address"
              value={updatedData.address}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Age"
              name="age"
              value={updatedData.age}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Department"
              name="department"
              value={updatedData.department}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button onClick={handleUpdate} variant="contained" color="primary" fullWidth>
              Update Employee
            </Button>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <h3>Audit Trail</h3>
            {employee.auditTrail.map((trail, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <p>Updated At: {new Date(trail.updatedAt).toLocaleString()}</p>
                <p>Previous Data: {JSON.stringify(trail.previousData)}</p>
                <p>New Data: {JSON.stringify(trail.newData)}</p>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default EmployeeModal;
