import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donatedCard, setDonatedCard] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [cardLength, setCardLength] = useState(4);

  useEffect(() => {
    // Retrieve the stored card details from local storage
    const storedCard = JSON.parse(localStorage.getItem("donatedCard")) || [];
    setDonatedCard(storedCard);
  }, []);

  const handleClick = () => {
    setShowAll(true);
    setCardLength(donatedCard.length)
  }
  

  return (
    <div className="container mx-auto px-4 md:px-20 lg:px-32 mt-16 gap-4 grid grid-cols-1 lg:grid-cols-2">
      {donatedCard.slice(0,cardLength).map((card, index) => (
        <div key={index} className="card card-side shadow-xl" style={{ backgroundColor: card.card_bg }}>
          <figure className="w-1/2 md:w-full">
            <img src={card.picture} alt={card.title} />
          </figure>
          <div className="card-body">
            <div className="w-20 text-center rounded-lg">
            <p className="rounded-md" style={{ backgroundColor: card.category_bg,color: card.text_color }}>{card.category}</p>
            </div>
            <h2 className="card-title text-lg lg:text-2xl font-semibold">{card.title}</h2>
            <p className="text-sm lg:text-base" style={{ color: card.text_color}}>${card.price}</p>
            <div className="card-actions">
              <Link to={`/donation/${card.id}`}>
            <button className="btn text-white border-none text-sm lg:text-md font-medium " style={{ backgroundColor: card.text_color}}>View Details</button>
            </Link>
              
            </div>
          </div>
        </div>
      ))}
  {
    !showAll && donatedCard.length > cardLength && (
      <div className={cardLength===donatedCard.length ? "hidden": "flex justify-center md:justify-end"}>
    <button onClick={handleClick} className="btn btn-accent">See all</button>
  </div>
    )
  }
    </div>
  );
};

export default Donation;
