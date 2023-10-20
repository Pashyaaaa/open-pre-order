import CardFood from "../components/cards/FoodCard/CardFood";

const FoodPage = () => {
  return (
    <>
      <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
        Menu Makanan
      </h2>
      <p className="text-sm ms:text-xs">Pilih dan Pesan Makanan Yang Mau Kamu Pesan</p>
      <div className="card_product_group">
        <CardFood />
        <CardFood />
        <CardFood />
        <CardFood />
      </div>
      <button type="button" className="mt-5">Konfirmasi Pesanan</button>
    </>
  )
}

export default FoodPage;