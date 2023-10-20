import ConfirmProductPage from "./pages/FoodPageConfirm";
import { createContext } from "react";
import FoodPage from "./pages/FoodPage";
import PaymentMethodpage from "./pages/PaymentMethodPage";

const App = () => {
  return (
    <>
      <main className="max-w-xl px-4 mx-auto">
        <FoodPage />
        {/* <ConfirmProductPage /> */}
        {/* <PaymentMethodpage /> */}
      </main>
    </>
  );
}

export default App;