import React, { useState, useEffect } from "react";
import "./Card.css";

const Card = ({ id, letter, onCardClick, resetGameSignal, clickDisabled }) => {
  const [isCardRevealed, setIsCardRevealed] = useState(true); // Başlangıçta kartlar açık

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCardRevealed(false);
    }, 2000);

    return () => clearTimeout(timeout); // ComponentWillUnmount işlevi
  }, []); // Sadece bir kere çalışması için boş bağımlılık dizisi

  const revealCard = () => {
    console.log("clickDisabled:", clickDisabled);
    if (!clickDisabled) {
      setIsCardRevealed(true);
      onCardClick({ id, letter, setIsCardRevealed });
    }
  };

  return (
    <div>
      <div
        className={`card ${isCardRevealed ? "revealed" : "hidden"}`}
        onClick={revealCard}
      >
        {isCardRevealed && letter}
      </div>
    </div>
  );
};

export default Card;
