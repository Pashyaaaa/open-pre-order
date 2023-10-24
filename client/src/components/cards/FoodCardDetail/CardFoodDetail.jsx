import { useContext, useState } from "react" 
import Card from "../Card"
import { CartContext } from "../../../App"

const CardFoodDetail = ({ food }) => {
  const { name, price, id } = food
  const { cart, setCart } = useContext(CartContext)
  const [newPrice, setNewPrice] = useState()
  const [totalProduct, setTotalProduct] = useState(0)

  function handleLessTotalProduct() {
    if(totalProduct === 0) {
      return
    } else if(totalProduct === 1) {
      setTotalProduct(totalProduct - 1)
      setCart(
        cart.filter(item => item.id !== id)
      )
    } else {
      setTotalProduct(totalProduct - 1)
      setNewPrice(() => {
        let sum = newPrice.toString().replace('.', '')
        let sum2 = +sum
        let result = sum2 - price
        return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      })

      if(cart.find(item => item.id === id)) {
        setCart(
          cart.map(item => item.id === id ? {...item, qty: item.qty - 1} : item)
        )
      }
    }
  }

  function handleAddTotalProduct() {
    setTotalProduct(totalProduct + 1)
    setNewPrice(() => {
      let num = price * (totalProduct + 1)
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    })

    if(cart.find(item => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? {...item, qty: item.qty + 1 } : item)
      )
    } else {
      setCart([...cart, {id: id, qty: 1}])
    }
  }

  return (
    <Card pageName="FoodPage">
      <h3 className="text-xl font-semibold truncate ms:text-base">{name}</h3>
      <span className="font-semibold text-green-900">Rp {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
      <div className="cta_price_product">
        <div className="text-xl ms:text-base">
          <button
            className="cta_price_product_button"
            onClick={() => handleLessTotalProduct()}
            aria-label="Add Button"
            name="Controller"
            >
            <i className="ri-subtract-line"></i>
          </button>
          <span className="mx-2">{totalProduct}</span>
          <button
            className="cta_price_product_button"
            onClick={() => handleAddTotalProduct()}
            aria-label="Less Button"
            name="Controller"
            >
            <i className="ri-add-line"></i>
          </button>
        </div>
        <div className="price_product">
          <span>{ totalProduct !== 0 ? `Rp ${newPrice}` : ''}</span>
        </div>
      </div>
    </Card>
  );
}

export default CardFoodDetail;