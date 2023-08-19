import React, { useState } from 'react';
import "./carousel.css" 

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
  
    const cards = [
      {
        id: 1,
        title: 'Card 1',
        description: 'Add your favorite music',
        img: 'undraw.svg',
      },
      {
        id: 2,
        title: 'Card 2',
        description: 'find friends, who likes the same music ',
        img: 'undraw-hire.svg',
      },
      {
        id: 3,
        title: 'Card 3',
        description: 'chat with them',
        img: 'undraw-chatting.svg'
      },
    ];
  
    const handleClick = (index) => {
      if (showAll) {
        setCurrentIndex(index);
      } else {
        setShowAll(true);
      }
    };
  
    const carouselStyle = {
      transform: `translateX(-${currentIndex * 50}%)`,
    };
  
    return (
      <div className={`carousel ${showAll ? 'show-all' : ''}`} style={carouselStyle}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="carousel-item"
            onClick={() => handleClick(index)}
          >
            <div className="card">
              <img src={card.img} alt="" />
              <p>{card.description}</p>
              <h1>{card.id}</h1>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Carousel;