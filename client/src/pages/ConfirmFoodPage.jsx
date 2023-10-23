import { useContext } from "react";
import CardFood from "../components/cards/FoodCard/CardFood";
import { CartContext, FoodsContext } from "../App";

const ConfirmFoodPage = () => {
  const foods = useContext(FoodsContext)
  const { cart } = useContext(CartContext)

  if(cart.length !== 0) {
    return (
      <>
        <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
          Konfirmasi Pesanan
        </h2>
        <p className="text-sm ms:text-xs">Pastikan pesananan makananmu sudah sesuai, ya!</p>
        <div className="card_product_group">
          {
            cart.map(item => {
              const food = foods.find(food => food.id === item.id)
              let totalPrice = item.qty * food.price
              return (
                <CardFood food={food} totalPrice={totalPrice} key={food.id} />
              )
            })
          }
        </div>
        <button type="button" className="w-full mt-5" name="Konfirmasi" aria-label="Konfirmasi Pesananan">Konfirmasi Pesananan</button>
      </>
    )
  } else {
    return (
      <>
        <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
          Konfirmasi Pesanan
        </h2>
        <p className="text-sm ms:text-xs">Pastikan pesananan makananmu sudah sesuai, ya!</p>
        <div className="card_product_group"></div>
        <button type="button" className="w-full mt-5" name="Konfirmasi" aria-label="Konfirmasi Pesananan">Konfirmasi Pesananan</button>
      </>
    )
  }

}

export default ConfirmFoodPage;