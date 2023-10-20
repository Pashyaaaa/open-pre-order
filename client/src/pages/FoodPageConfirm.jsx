import CardFoodDetail from "../components/cards/FoodCardDetail/CardFoodDetail";

const ProductPageConfirm = () => {
  return (
    <>
      <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
        konfirmasi Pesanan Anda
      </h2>
      <div className="card_product_group">
        <CardFoodDetail />
        <CardFoodDetail />
        <CardFoodDetail />
        <CardFoodDetail />
      </div>
      <form action="" method="post" className="flex flex-col gap-y-2 my-6">
        <h3 className="text-base font-semibold text-green-900">Atur Jadwal Pengambilan Pesanan</h3>
        <input type="datetime-local" name="" id="" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
        <button type="button" className="w-full">Pesan Sekarang</button>
      </form>
    </>
  )
}

export default ProductPageConfirm;