import { useContext } from "react";
import CardFoodDetail from "../components/cards/FoodCardDetail/CardFoodDetail";
import { FoodsContext } from "../App";

const FoodPage = () => {
  const foods = useContext(FoodsContext)

  return (
    <>
      <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
        Menu Makanan
      </h2>
      <p className="text-sm ms:text-xs">Pilih dan pesan makanan yang mau kamu pesan</p>
      <div className="card_product_group">
        {
          foods.map(food => (
            <CardFoodDetail food={food} key={food.id} />
          ))
        }
      </div>
      <button type="button" className="w-full mt-5" name="Pesan" aria-label="Pesan Makanan">Pesan Makanan</button>
    </>
  )
}

export default FoodPage;