import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import 'flowbite'
import UsersTable from "./components/UsersTable";
import Catalog from "./Pages/Catalog";
import CatalogAddForm from "./Pages/CatalogAddForm";
import CatalogEditForm from "./Pages/CatalogEditForm";
import Order from "./Pages/Order";
import OrderDetail from "./Pages/OrderDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersTable />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/add-catalog" element={<CatalogAddForm />} />
        <Route path="/catalog/edit-catalog/:id" element={<CatalogEditForm />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/:id" element={<OrderDetail />} />
      </Routes>
    </Router>
  );
}

export default App;