import { useState } from "react" 
import Card from "../Card"

const CardFoodDetail = ({ food }) => {
  const price = 10000
  const [newPrice, setNewPrice] = useState()
  const [totalProduct, setTotalProduct] = useState(0)

  function handleLessTotalProduct() {
    if(totalProduct === 0) {
      return
    } else {
      setTotalProduct(totalProduct - 1)
      setNewPrice(() => {
        let sum = newPrice.toString().replace('.', '')
        let sum2 = +sum
        let result = sum2 - price
        return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      })
    }
  }

  function handleAddTotalProduct() {
    setTotalProduct(totalProduct + 1)
    setNewPrice(() => {
      let num = price * (totalProduct + 1)
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    })
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
          <span>{ totalProduct !== 0 ? `Rp. ${newPrice}` : ''}</span>
        </div>
      </div>
    </Card>
  );
}

export default CardFoodDetail;