import React from 'react';
import Card from '../Card/Card';

interface CardListProps {
  cards: { id: number; text: string; image: string }[];
  onDelete: (id: number) => void;
}

const CardList: React.FC<CardListProps> = ({ cards, onDelete }) => {
  return (
    <div className="cards-container">
      <h1>Список карточек</h1>
      {cards.length === 0 ? (
        <p>Карточек пока что нет.</p>
      ) : (
        cards.map((card) => (
          <Card key={card.id} {...card} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default CardList;