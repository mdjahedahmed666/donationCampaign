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
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <span style={{ ...categoryStyle, ...textStyle }}>{category}</span>
          <h2 className="card-title" style={textStyle}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
