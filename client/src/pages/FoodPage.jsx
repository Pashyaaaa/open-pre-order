import CardFoodDetail from "../components/cards/FoodCardDetail/CardFoodDetail";

const FoodPage = () => {
  return (
    <>
      <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
        Menu Makanan
      </h2>
      <p className="text-sm ms:text-xs">Pilih dan Pesan Makanan Yang Mau Kamu Pesan</p>
      <div className="card_product_group">
        <CardFoodDetail />
      </div>
      <button type="button" className="w-full mt-5">Pesan Makanan</button>
    </>
  )
}

export default FoodPage;