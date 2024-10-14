// src/App.jsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import EmployeeGrid from './components/EmployeeGrid';
import EmployeeModal from './components/EmployeeModal';
import AddEmployeeForm from './components/AddEmployeeForm';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRowClick = (row) => {
    setSelectedEmployee(row.row);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Provider store={store}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Employee Management System
        </Typography>

        <AddEmployeeForm />  {/* Add the employee form here */}

        <EmployeeGrid onRowClick={handleRowClick} />

        {selectedEmployee && (
          <EmployeeModal
            open={modalOpen}
            handleClose={handleCloseModal}
            employee={selectedEmployee}
          />
        )}
      </Container>
    </Provider>
  );
};

export default App;
