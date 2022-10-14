import React from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component {
  state = {
    employees: [
      {
        id: 1,
        name: 'Harley',
        position: 'Manger',
      },
      {
        id: 2,
        name: 'Ronald',
        position: 'CEO',
      },
      {
        id: 3,
        name: 'Josue',
        position: 'Salesman',
      },
      {
        id: 4,
        name: 'Eduardo',
        position: 'Teacher',
      },
    ],
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>🪪 Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => (
            <Employee
              key={employee.id}
              id={employee.id}
              name={employee.name}
              position={employee.position}
              fire={this.fireEmployee}
            />
          ))}
        </tbody>
      </table>
    );
  }

  fireEmployee = id => {
    const { employees } = this.state;
    this.setState({
      employees: employees.filter(employee => employee.id !== id),
    });
  };
}

export default EmployeeList;
