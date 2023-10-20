import CardFood from "../components/cards/FoodCard/CardFood";

const ConfirmFoodPage = () => {
  return (
    <>
      <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
        Konfirmasi Pesanan
      </h2>
      <p className="text-sm ms:text-xs">Pastikan pesananan makananmu sudah sesuai, ya!</p>
      <div className="card_product_group">
        <CardFood />
      </div>
      <button type="button" className="w-full mt-5">Konfirmasi Pesananan</button>
    </>
  )
}

export default ConfirmFoodPage;