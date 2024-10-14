// src/components/EmployeeGrid.jsx
import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../slices/employeeSlice';

const EmployeeGrid = ({ onRowClick }) => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'department', headerName: 'Department', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];

  return (
    <div style={{ height: '100%', width: '100%', padding: 16 }}>
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={employees}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onRowClick={onRowClick}
          getRowId={(row) => row._id}
          sx={{
            '& .MuiDataGrid-columnHeader': {
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            },
            '& .MuiDataGrid-cell': {
              whiteSpace: 'normal',
              wordBreak: 'break-word',
            },
            '@media (max-width:600px)': {
              '& .MuiDataGrid-cell': {
                fontSize: '0.75rem',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default EmployeeGrid;
