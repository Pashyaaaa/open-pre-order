import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'flowbite'
import UsersTable from "./components/UsersTable";
import Catalog from "./Pages/Catalog";
import CatalogForm from "./Pages/CatalogForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersTable />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogForm />} />
      </Routes>
    </Router>
  );
}

export default App;