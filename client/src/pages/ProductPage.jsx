import ProductTemplate from "../templates/ProductTemplate";

const ProductPage = () => {
  return (
    <ProductTemplate title="Products Food">
      <ProductPage price={20000} />
    </ProductTemplate>
  );
}

export default ProductPage;