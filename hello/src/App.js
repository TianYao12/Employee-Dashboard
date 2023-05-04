import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const showEmployees = true;
  const [role, setRole] = useState("default");

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          ></input>
          <div className="flex flex-wrap">
            <Employee
              name="Aiden"
              role="Manager"
              img="https://www.gannett-cdn.com/presto/2020/08/25/USAT/842737a0-5b6c-47bc-adbc-ea5bef879661-Messi_gone.jpg"
            />
            <Employee name="Bob" role={role} />
            <Employee name="Cade" />
            <Employee name="Darren" />
            <Employee name="Enice" />
          </div>
        </>
      ) : (
        <p>not employees</p>
      )}
    </div>
  );
}

export default App;
