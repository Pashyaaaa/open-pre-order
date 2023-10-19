import CardProduct from "../components/CardProduct";

const ProductTemplate = ({ title, children }) => {
  return (
    <>
      <h2 className="font-bold text-2xl text-green-900">
        {title}
      </h2>
      <div className="card_product_group">
        <CardProduct productName="Vandersn 135">
          {children}
        </CardProduct>
      </div>
    </>
  );
}

export default ProductTemplate;