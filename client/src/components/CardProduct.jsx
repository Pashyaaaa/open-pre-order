const CardProduct = ({ children, productName }) => {
  return (
    <figure className="card_product">
      <div className="w-[35%]">
        <div className="img_thumbnail">
          <img src="assets/evan.jpg" alt="image product" className="w-[88px] h-[88px] rounded-xl ms:w-[74px] ms:h-[74px]" />
        </div>
      </div>
      <figcaption className="w-[65%]">
        <h4 className="text-lg font-semibold truncate">{ productName }</h4>
        {children}
      </figcaption>
    </figure>
  );
}

export default CardProduct;