import React, { useEffect, useState } from "react";

const Donation = () => {
  const [donatedCard, setDonatedCard] = useState(null);

  useEffect(() => {
    // Retrieve the stored card details from local storage
    const storedCard = localStorage.getItem("donatedCard");
    if (storedCard) {
      setDonatedCard(JSON.parse(storedCard));
    }
  }, []);

  return (
    <div className="container mx-auto sm:px-10 md:px-32 mt-16">
      <div className="text-left">
        {donatedCard.map((donate)=>( (
          <>
            <h2 className="font-bold">{donatedCard.title}</h2>
            <p>{donatedCard.description}</p>
          </>
        )});}
      </div>
    </div>
  );
};

export default Donation;