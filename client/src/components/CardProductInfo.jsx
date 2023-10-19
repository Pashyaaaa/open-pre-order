import { useState } from "react";
import ProductPrice from "./ProductPrice";

const CardProductInfo = () => {
  const [totalProduct, setTotalProduct] = useState(1)

  function handleLessTotalProduct() {
    if(totalProduct === 1) {
      return
    } else {
      setTotalProduct(totalProduct - 1)
    }
  }

  function handleAddTotalProduct() {
    setTotalProduct(totalProduct + 1)
  }

  return (
    <div className="cta_price_product">
      <div className="text-lg">
        <button
          className="cta_price_product_button"
          onClick={() => handleLessTotalProduct()}
          >
          <i className="ri-subtract-line"></i>
        </button>
        <span className="mx-2">{totalProduct}</span>
        <button
          className="cta_price_product_button"
          onClick={() => handleAddTotalProduct()}
          >
          <i className="ri-add-line"></i>
        </button>
      </div>
      <ProductPrice price={20000} />
    </div>
  );
}

export default CardProductInfo;