import { useState } from "react";
import Card from "../Card";

const CardFood = () => {
  const price = 20000

  return (
    <Card foodName="Nasi goreng pedak pak muh">
      <div className="price_product mt-1 flex justify-between">
        <span>Rp {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
      </div>
    </Card>
  );
}

export default CardFood;