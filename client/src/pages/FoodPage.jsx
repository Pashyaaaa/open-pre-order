import { useContext } from "react";
import CardFoodDetail from "../components/cards/FoodCardDetail/CardFoodDetail";
import { CartContext, FoodsContext } from "../App";
import { Link } from "react-router-dom";

const FoodPage = () => {
  const catalogs = useContext(FoodsContext)
  const { cart } = useContext(CartContext)

  const sortedCatalogs = [...catalogs].sort((a, b) => {
    // Urutkan berdasarkan nilai publish terlebih dahulu
    if (a.publish < b.publish) return 1;
    if (a.publish > b.publish) return -1;
  
    // Jika nilai publish sama, urutkan berdasarkan ID (atau kunci lain jika diperlukan)
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
  
    return 0; // Jika publish dan ID sama
  });

  return (
    <div className="pt-5 pb-10">
      <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
        Menu Makanan
      </h2>
      <p className="text-sm ms:text-xs">Pilih dan pesan makanan yang mau kamu pesan</p>
      <div className="card_product_group">
        {
          sortedCatalogs.map(catalog => (
            <CardFoodDetail catalog={catalog} key={catalog.id} />
          ))
        }
      </div>
      {
        cart.length === 0 ? (
          <span className="bg-green-300 text-slate-700 font-semibold w-full block text-center py-2.5 rounded-lg mt-5 cursor-not-allowed">Pesan Makanan</span>
        ) : (
          <Link to={'/confirm-order'} className="button block text-center w-full mt-5">Pesan Makanan</Link>
        )
      }
    </div>
  )
}

export default FoodPage;