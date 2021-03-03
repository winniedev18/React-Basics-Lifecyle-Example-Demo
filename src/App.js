import React from 'react'
import './App.css';
import Documentation from "./Documentation"
import Counter from "./Counter"
import Employee from "./Employee"

const employeInfo = [
  {
    employeeId: "1",
    firstName: "Jack",
    lastName: "Smith",
    age: "21"
  },
  {
    employeeId: "2",
    firstName: "Stephanie",
    lastName: "Kyle",
    age: "21"
  },
  {
    employeeId: "3",
    firstName: "George",
    lastName: "Masih",
    age: "21"
  },
  {
    employeeId: "4",
    firstName: "Anthony",
    lastName: "Whate",
    age: "21"
  }
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to my counter</h2>
        {/* <Counter /> */}
        {/* <Employee firstName="Jack" lastName="Peppy" />
        <Employee firstName="Smith" lastName="kayle" />
        <Employee firstName="George" lastName="Masih" />
        <Employee firstName="Anthony" lastName="Whate" /> */}


        {employeInfo.map(employee => {
          // const { firstName, lastName, age } = employee;
          return (
            <Employee key={employee.employeeId} {...employee} />
          )
        })}
      </header>
    </div>
  );
}

export default App;
