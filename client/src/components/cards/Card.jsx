const Card = ({ children: element, foodName }) => {
  return (
    <figure className="card_product">
      <div className="w-[30%]">
        <div className="img_thumbnail">
          <img src="assets/nasgor.jpg" alt="image product" className="w-20 h-20 rounded-xl ms:w-16 ms:h-16" />
        </div>
      </div>
      <figcaption className="w-[70%]">
        <h4 className="text-2xl font-semibold truncate ms:text-base">{foodName}</h4>
        {element}
      </figcaption>
    </figure>
  );
}

export default Card;