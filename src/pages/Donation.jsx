import React, { useEffect, useState } from "react";

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
    <div className="container mx-auto sm:px-10 md:px-32 mt-16 gap-4 grid grid-cols-1 md:grid-cols-2">
      {donatedCard.slice(0,cardLength).map((card, index) => (
        <div className="card card-side shadow-xl" style={{ backgroundColor: card.card_bg }}>
          <figure>
            <img src={card.picture} alt="Movie" />
          </figure>
          <div className="card-body">
            <div className="w-20 text-center rounded-lg">
            <p className="rounded-md" style={{ backgroundColor: card.category_bg,color: card.text_color }}>{card.category}</p>
            </div>
            <h2 className="card-title text-2xl font-semibold">{card.title}</h2>
            <p className="text-base" style={{ color: card.text_color}}>${card.price}</p>
            <div className="card-actions">
              <button className="btn text-white border-none font-medium" style={{ backgroundColor: card.text_color}}>View Details</button>
            </div>
          </div>
        </div>
      ))}
  {
    !showAll && donatedCard.length > cardLength && (
      <div className={cardLength===donatedCard.length ? "hidden": "flex justify-end"}>
    <button onClick={handleClick} className="btn btn-accent">See all</button>
  </div>
    )
  }
    </div>
  );
};

export default Donation;
