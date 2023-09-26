import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const DonationDetails = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();
  const cards = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const card = cards.find((c) => c.id === Number(id));
    setDonation(card);
  }, [id]);
  const { text_color } = donation;
  const buttonStyle = {
    backgroundColor: text_color,
  };

  const handleDonateClick = () => {
    // Display a SweetAlert toast with a success message
    Swal.fire({
      icon: 'success',
      title: 'Thank You!',
      text: 'Your donation has been received.',
    });
    const existingDonatedCard = JSON.parse(localStorage.getItem("donatedCard")) || [];
    const alreadySelected = existingDonatedCard.some((donatedCard)=>donatedCard.id === donation.id);
    if (!alreadySelected){
      existingDonatedCard.push(donation);
      localStorage.setItem('donatedCard', JSON.stringify(existingDonatedCard));
    }
    // navigate("/donation");
  }; 
  return (
    <div className="container mx-auto sm:px-10 md:px-32 mt-16">
      <div className="relative">
        <div className="flex justify-center">
          <div className="container">
            <img className="w-full h-[600px]" src={donation.picture} alt="" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-black opacity-70 h-1/4"></div>
        <button onClick={handleDonateClick}
          style={buttonStyle}
          className="btn absolute bottom-10 left-10"
        >
          Donate {donation.price}
        </button>
      </div>
      {/* <div className="relative bottom-12 left-16 right-56 bg-black opacity-90">
        <button style={buttonStyle} className="btn relative bottom-20 left-32">Secondary</button>
        </div> */}
      <div className="text-left">
        <h2 className="font-bold">{donation.title}</h2>
        <p>{donation.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
