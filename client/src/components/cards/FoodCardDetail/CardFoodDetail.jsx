import { useState } from "react" 
import Card from "../Card"

const CardFoodDetail = ({ food }) => {
  const [price, setPrice] = useState(20000)
  const [newPrice, setNewPrice] = useState(price)
  const [totalProduct, setTotalProduct] = useState(1)

  function handleLessTotalProduct() {
    if(totalProduct === 1) {
      return
    } else {
      setTotalProduct(totalProduct - 1)
      setNewPrice(n => n - price)
    }
  }

  function handleAddTotalProduct() {
    setTotalProduct(totalProduct + 1)
    setNewPrice(n => n + price)
  }

  return (
    <Card foodName="Nasi goreng pedak pak muh">
      <div className="cta_price_product">
        <div className="text-xl ms:text-base">
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
        <div className="price_product">
          <span>Rp. {newPrice}</span>
        </div>
      </div>
    </Card>
  );
}

export default CardFoodDetail;