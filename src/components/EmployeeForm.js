import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({ name: '', department: '', position: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.department && employee.position) {
      addEmployee(employee);
      setEmployee({ name: '', department: '', position: '' });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 2 }}
    >
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        value={employee.name}
        onChange={handleChange}
      />
      <TextField
        label="Department"
        name="department"
        variant="outlined"
        value={employee.department}
        onChange={handleChange}
      />
      <TextField
        label="Position"
        name="position"
        variant="outlined"
        value={employee.position}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Employee
      </Button>
    </Box>
  );
}

export default EmployeeForm;
