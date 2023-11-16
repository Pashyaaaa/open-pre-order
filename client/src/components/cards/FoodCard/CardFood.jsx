import { useState } from "react";
import Card from "../Card";

const CardFood = ({ catalog, basicPrice, totalPrice, cart }) => {
  const { nama_produk, gambar, url, publish } = catalog

  return (
    <Card foodName="Nasi goreng pedak pak muh" pageName="ConfirmFoodPage" namaGambar={gambar} gambarURL={url} publish={publish}>
      <h3 className="text-xl font-semibold truncate ms:text-base mb-2">{nama_produk}</h3>
      <div className="flex justify-between items-center font-semibold text-green-900">
        <span>{`${cart.jumlah} x ${basicPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</span>
        <span>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
      </div>
    </Card>
  );
}

export default CardFood;