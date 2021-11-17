import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./componenets/Home/Home";
import Appointments from "./componenets/Appointments/Appointments";
import Doctors from "./componenets/Doctors/Doctors";

function App() {
  return (
    <BrowserRouter>
      <Link to="/home">Home</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/doctors">Doctors</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
