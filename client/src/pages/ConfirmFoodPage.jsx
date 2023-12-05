import { useContext, useState } from "react";
import CardFood from "../components/cards/FoodCard/CardFood";
import { CartContext, FoodsContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

const ConfirmFoodPage = () => {
  const navigate = useNavigate();
  const catalogs = useContext(FoodsContext);
  const { cart, setCart } = useContext(CartContext);

  if (cart.length !== 0) {
    return (
      <>
        <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
          Konfirmasi Pesanan
        </h2>
        <p className="text-sm ms:text-xs">
          Pastikan pesananan makananmu sudah sesuai, ya!
        </p>
        <div className="card_product_group">
          {cart.map((item) => {
            const catalog = catalogs.find(
              (catalog) => catalog.id === item.catalog_id
            );
            const totalPrice = item.jumlah * catalog.harga;
            return (
              <CardFood
                catalog={catalog}
                basicPrice={catalog.harga}
                totalPrice={totalPrice}
                key={catalog.id}
                cart={item}
              />
            );
          })}
          <div className="flex justify-between items-center font-semibold text-green-900 pt-4 my-4 border-t-2 border-slate-500">
            <span>Total semua harga</span>
            <span>
              Rp{" "}
              {cart
                .map((item) => {
                  const catalog = catalogs.find(
                    (catalog) => catalog.id === item.catalog_id
                  );
                  const totalPrice = item.jumlah * catalog.harga;
                  return totalPrice;
                })
                .reduce(
                  (accumulator, currentvalue) => accumulator + currentvalue
                )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </span>
          </div>
        </div>
        <Link
          to={"/form-data-user"}
          className="w-full mt-5 block button text-center"
          name="Konfirmasi"
          aria-label="Konfirmasi Pesananan"
        >
          Konfirmasi Pesanan
        </Link>
        <button
          className="w-full focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          name="Konfirmasi"
          aria-label="Konfirmasi Pesananan"
          onClick={() => {
            navigate(-1);
            setCart([]);
          }}
        >
          Batalkan Pesananan
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2 className="font-bold text-2xl text-green-900 ms:text-xl">
          Konfirmasi Pesanan
        </h2>
        <p className="text-sm ms:text-xs">
          Pastikan pesananan makananmu sudah sesuai, ya!
        </p>
        <div className="card_product_group"></div>
        <button
          type="button"
          className="w-full mt-5"
          name="Konfirmasi"
          aria-label="Konfirmasi Pesananan"
        >
          Konfirmasi Pesananan
        </button>
      </>
    );
  }
};

export default ConfirmFoodPage;
