import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeTable from './components/EmployeeTable';
import { Container, Typography } from '@mui/material';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      { ...employee, id: Date.now() }, // Assign a unique ID to each employee
    ]);
  };

  const editEmployee = (id, updatedEmployee) => {
    setEmployees(
      employees.map((emp) => (emp.id === id ? { ...emp, ...updatedEmployee } : emp))
    );
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Employee Management System
      </Typography>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeTable
        employees={employees}
        editEmployee={editEmployee}
        deleteEmployee={deleteEmployee}
      />
    </Container>
  );
}

export default App;
