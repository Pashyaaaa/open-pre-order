import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'flowbite'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;