import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const showEmployees = true;
  const [employees, setEmployees] = useState([
    {
      name: "Messi",
      role: "developer",
      img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
    },
    {
      name: "Ronaldo",
      role: "developer",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      name: "Neymar",
      role: "developer",
      img: "https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg",
    },
    {
      name: "Zidane",
      role: "developer",
      img: "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg",
    },
    {
      name: "Pele",
      role: "developer",
      img: "https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg",
    },
    {
      name: "Maradona",
      role: "developer",
      img: "https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg",
    },
  ]);

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>not employees</p>
      )}
    </div>
  );
}

export default App;
