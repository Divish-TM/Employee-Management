import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import EditableRow from './EditableRow';

function EmployeeTable({ employees, editEmployee, deleteEmployee }) {
  const [editId, setEditId] = useState(null);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleSave = (id, updatedEmployee) => {
    editEmployee(id, updatedEmployee);
    setEditId(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) =>
            editId === employee.id ? (
              <EditableRow
                key={employee.id}
                employee={employee}
                saveEmployee={handleSave}
                cancelEdit={() => setEditId(null)}
              />
            ) : (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(employee.id)} color="primary">
                    Edit
                  </Button>
                  <Button onClick={() => deleteEmployee(employee.id)} color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EmployeeTable;
