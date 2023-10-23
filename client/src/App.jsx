import { createContext, useState } from "react";
import ConfirmFoodPage from "./pages/ConfirmFoodPage";
import FoodPage from "./pages/FoodPage";

const foods = [
  {
    id: 1,
    name: 'Nasi Goreng',
    price: 10000
  },
  {
    id: 2,
    name: 'Mie Goreng',
    price: 10000
  },
  {
    id: 3,
    name: 'Mie Kuah',
    price: 10000
  }
]

export const FoodsContext = createContext(null)
export const CartContext = createContext(null)

const App = () => {
  const [cart, setCart] = useState([])

  return (
    <>
      <main className="max-w-xl px-4 mx-auto">
        <FoodsContext.Provider value={foods}>
          <CartContext.Provider value={{cart, setCart}}>
            <FoodPage />
            <ConfirmFoodPage />
          </CartContext.Provider>
        </FoodsContext.Provider>
      </main>
    </>
  );
}

export default App;