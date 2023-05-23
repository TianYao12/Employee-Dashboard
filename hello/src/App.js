import Employees from "./pages/Employees";
import Header from "./components/Header";
import Dictionary from "./pages/Dictionary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Definition from "./pages/Definition";

export default function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/definition" element={<Definition />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}
