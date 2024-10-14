// src/slices/employeeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  const response = await axios.get('https://employee-mangament.onrender.com/api/employees');
  return response.data;
});

export const createEmployee = createAsyncThunk('employees/create', async (newEmployee) => {
  const response = await axios.post('https://employee-mangament.onrender.com/api/employees', newEmployee);
  return response.data;
});

export const updateEmployee = createAsyncThunk('employees/update', async ({ id, updatedData }) => {
  const response = await axios.put(`https://employee-mangament.onrender.com/api/employees/${id}`, updatedData);
  return response.data;
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.list.findIndex(emp => emp._id === action.payload._id);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export default employeeSlice.reducer;
