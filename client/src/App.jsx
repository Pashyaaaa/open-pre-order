import { createContext, useEffect, useState } from "react";
import ConfirmFoodPage from "./pages/ConfirmFoodPage";
import FoodPage from "./pages/FoodPage";
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import FormUser from "./pages/FormUser";

export const FoodsContext = createContext(null)
export const CartContext = createContext(null)

const App = () => {
  const [cart, setCart] = useState([])
  const [catalogs, setCatalogs] = useState([])

  useEffect(() => {
    getCatalogs()
  }, [])

  const getCatalogs = async () => {
    const response = await axios.get('http://localhost:5000/catalog/all')
    setCatalogs(response.data)
  }

  return (
    <>
      <main className="max-w-xl px-4 mx-auto">
        <FoodsContext.Provider value={catalogs}>
          <CartContext.Provider value={{cart, setCart}}>
            <Router>
              <Routes>
                <Route path="/" element={<FoodPage />} />
                <Route path="/confirm-order" element={<ConfirmFoodPage />} />
                <Route path="/form-data-user" element={<FormUser />} />
              </Routes>
            </Router>
          </CartContext.Provider>
        </FoodsContext.Provider>
      </main>
    </>
  );
}

export default App;