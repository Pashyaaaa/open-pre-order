import { useState } from "react";
import Card from "../Card";

const CardFood = ({ food, totalPrice }) => {
  const { name, price } = food

  return (
    <Card foodName="Nasi goreng pedak pak muh" pageName="ConfirmFoodPage">
      <h3 className="text-xl font-semibold truncate ms:text-base">{name}</h3>
      <span className="font-semibold text-green-900">Rp {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
    </Card>
  );
}

export default CardFood;