const Card = ({ children: element, namaGambar, gambarURL, publish }) => {
  return (
    <figure className="card_product">
      <div className="w-[30%]">
        <div className="img_thumbnail">
          <img src={gambarURL} alt={namaGambar} className={`object-cover w-20 h-24 rounded-xl ms:w-16 ms:h-20 ${publish ? '' : 'grayscale'}`} />
        </div>
      </div>
      <figcaption className="w-[70%]">
        {element}
      </figcaption>
    </figure>
  );
}

export default Card;