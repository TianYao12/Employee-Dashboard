import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";

function Employees() {
  const showEmployees = true;
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Messi",
      role: "developer",
      img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
    },
    {
      id: 2,
      name: "Ronaldo",
      role: "developer",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      id: 3,
      name: "Neymar",
      role: "developer",
      img: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg",
    },
    {
      id: 4,
      name: "Zidane",
      role: "developer",
      img: "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg",
    },
    {
      id: 5,
      name: "Pele",
      role: "developer",
      img: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg",
    },
    {
      id: 6,
      name: "Maradona",
      role: "developer",
      img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="">
      
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>For some reason the employee data is not showing up</p>
      )}
    </div>
  );
}

export default Employees;
