import { useContext, useState } from "react" 
import Card from "../Card"
import { CartContext } from "../../../App"

const CardFoodDetail = ({ catalog }) => {
  const { nama_produk, gambar, url , harga, id, publish } = catalog
  const { cart, setCart } = useContext(CartContext)
  const [newPrice, setNewPrice] = useState()
  const [totalProduct, setTotalProduct] = useState(0)

  function handleLessTotalProduct() {
    if(totalProduct === 0) {
      return
    } else if(totalProduct === 1) {
      setTotalProduct(totalProduct - 1)
      setCart(
        cart.filter(item => item.catalog_id !== id)
      )
    } else {
      setTotalProduct(totalProduct - 1)
      setNewPrice(() => {
        let sum = newPrice.toString().replace('.', '')
        let sum2 = +sum
        let result = sum2 - harga
        return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      })

      if(cart.find(item => item.catalog_id === id)) {
        setCart(
          cart.map(item => item.catalog_id === id ? {...item, jumlah: item.jumlah - 1} : item)
        )
      }
    }
  }

  function handleAddTotalProduct() {
    setTotalProduct(totalProduct + 1)
    setNewPrice(() => {
      let num = harga * (totalProduct + 1)
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    })

    if(cart.find(item => item.catalog_id === id)) {
      setCart(
        cart.map(item => item.catalog_id === id ? {...item, jumlah: item.jumlah + 1 } : item)
      )
    } else {
      setCart([...cart, {catalog_id: id, jumlah: 1}])
    }
  }

  return (
    <Card pagenama_produk="FoodPage" gambarURL={url} namaGambar={gambar} publish={publish}>
      <h3 className={`text-xl font-semibold truncate ms:text-base ${publish ? '' : 'italic text-slate-400'}`}>{nama_produk}</h3>
      <span className={`font-semibold ${publish ? 'text-green-900' : 'text-slate-400 italic'}`}>Rp {harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
      <div className="cta_price_product">
        {
          publish ? (
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
          ) : (
            <span className="text-red-500 text-xs font-medium">Produk tidak tersedia</span>
          )
        }
        <div className="price_product">
          <span>{ totalProduct !== 0 ? `Rp ${newPrice}` : ''}</span>
        </div>
      </div>
    </Card>
  );
}

export default CardFoodDetail;