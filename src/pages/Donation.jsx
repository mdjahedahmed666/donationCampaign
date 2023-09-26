import React, { useEffect, useState } from "react";

const Donation = () => {
  const [donatedCard, setDonatedCard] = useState([]);
  const [cardLength, setCardLength] = useState(4);
  console.log(donatedCard);

  useEffect(() => {
    // Retrieve the stored card details from local storage
    const storedCard = JSON.parse(localStorage.getItem("donatedCard")) || [];
    setDonatedCard(storedCard);
  }, []);
  

  return (
    <div className="container mx-auto sm:px-10 md:px-32 mt-16 gap-4 grid grid-cols-1 md:grid-cols-2">
      {donatedCard.slice(0,cardLength).map((card, index) => (
        <div className="card card-side shadow-xl" style={{ backgroundColor: card.card_bg }}>
          <figure>
            <img src={card.picture} alt="Movie" />
          </figure>
          <div className="card-body">
            <div className="w-20 text-center p-1 h-8">
            <p className="" style={{ ackgroundColor: card.category_bg }}>{card.category}</p>
            </div>
            <h2 className="card-title" style={{ color: card.text_color }}>{card.title}</h2>
            <p>{card.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      ))}
  <div className={cardLength===donatedCard.length ? "hidden": "flex justify-end"}>
    <button onClick={()=>setCardLength(donatedCard.length)} className="btn btn-accent">See all</button>
  </div>
    </div>
  );
};

export default Donation;
