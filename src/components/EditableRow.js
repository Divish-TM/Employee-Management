import React, { useState } from 'react';
import { TableCell, TableRow, TextField, Button } from '@mui/material';

function EditableRow({ employee, saveEmployee, cancelEdit }) {
  const [updatedEmployee, setUpdatedEmployee] = useState(employee);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
  };

  const handleSave = () => {
    saveEmployee(employee.id, updatedEmployee);
  };

  return (
    <TableRow>
      <TableCell>
        <TextField
          name="name"
          value={updatedEmployee.name}
          onChange={handleChange}
          size="small"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="department"
          value={updatedEmployee.department}
          onChange={handleChange}
          size="small"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="position"
          value={updatedEmployee.position}
          onChange={handleChange}
          size="small"
        />
      </TableCell>
      <TableCell>
        <Button onClick={handleSave} color="success">
          Save
        </Button>
        <Button onClick={cancelEdit} color="secondary">
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default EditableRow;
