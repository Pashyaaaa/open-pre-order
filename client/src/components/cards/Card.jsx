const Card = ({ children: element, pageName }) => {
  return (
    <figure className="card_product">
      <div className="w-[30%]">
        <div className="img_thumbnail">
          <img src="assets/nasgor.jpg" alt="image product" className="object-cover w-20 h-24 rounded-xl ms:w-16 ms:h-20" />
        </div>
      </div>
      <figcaption className="w-[70%]">
        {element}
      </figcaption>
    </figure>
  );
}

export default Card;