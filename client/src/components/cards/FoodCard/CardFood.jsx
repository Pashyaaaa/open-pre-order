import { useState } from "react";
import Card from "../Card";

const CardFood = () => {
  const [status, setStatus] = useState('Tambah Pesanan')
  const price = 20000

  return (
    <Card foodName="Nasi goreng pedak pak muh">
      <div className="price_product mt-1 flex justify-between">
        <span>Rp {price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</span>
        <label htmlFor="foodchoose">
          <span className={`${status === 'Batalkan pesanan' ? 'text-red-500' : ''}`}>
            {status}
          </span>
          <input
            type="checkbox"
            name="foodchoose"
            id="foodchoose"
            className="hidden"
            onChange={e => {
              if(e.target.checked) {
                setStatus('Batalkan pesanan')
              } else {
                setStatus('Tambah Pesanan')
              }
            }} />
        </label>
      </div>
    </Card>
  );
}

export default CardFood;