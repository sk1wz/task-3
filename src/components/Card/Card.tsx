import React from 'react';

interface CardProps {
  id: number;
  text: string;
  image: string;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, text, image, onDelete }) => {
  return (
    <div className="card">
      <p>{text}</p>
      {image && <img src={image} alt="Card" />}
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
};

export default Card;