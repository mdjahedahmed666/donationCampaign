import React from "react";
import { Link, redirect } from "react-router-dom";

const Card = ({ card }) => {
  const { id,picture, title, category, category_bg, card_bg, text_color } = card;
  const cardStyle = {
    backgroundColor: card_bg,
  };
  const textStyle = {
    color: text_color,
  };
  const categoryStyle = {
    backgroundColor: category_bg,
  };
  return (
    <div className="card shadow-xl" style={cardStyle}>
      <Link to={`/donation/${id}`}>
        <figure className="w-full">
          <img className="w-full" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="w-20 text-center p-1 h-8 rounded-md" style={{ ...categoryStyle, ...textStyle }}>{category}</p>
          <h2 className="card-title" style={textStyle}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
