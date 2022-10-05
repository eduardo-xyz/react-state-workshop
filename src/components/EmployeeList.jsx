import React from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component {
  render() {
    const employees = [
      {
        name: 'Harley',
        position: 'Manger',
      },
      {
        name: 'Ronald',
        position: 'CEO',
      },
      {
        name: 'Josue',
        position: 'Salesman',
      },
      {
        name: 'Eduardo',
        position: 'Teacher',
      },
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>🪪 Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <Employee name={employee.name} position={employee.position} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeList;
