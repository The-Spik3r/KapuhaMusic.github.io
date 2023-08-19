import { useState } from "react";
import './carousel2.css'
const Carrousel2 = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
  
    const cards = [
      {
        id: 1,
        title: 'Music 1',
        description: 'Lil Nas X, Nas',
        img: 'music1.png',
      },
      {
        id: 2,
        title: 'Music 2',
        description: 'Lil Nas X, Nas',
        img: 'music2.png',
      },
      {
        id: 3,
        title: 'Music 3',
        description: 'Lil Nas X, Nas',
        img: 'music3.png'
      },
      {
        id: 4,
        title: 'Music 4',
        description: 'Lil Nas X, Nas',
        img: 'music4.jpeg'
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
    return(
        <div className={`carousel2 ${showAll ? 'show-all' : ''}`} style={carouselStyle}>
            {cards.map((card, index) => (
            <div
                key={card.id}
                className="carousel-item2"
                onClick={() => handleClick(index)}
            >
                <div className="card2">
                    <img src={card.img} alt="" />
                    <p>{card.id}.{card.description}</p>
                </div>
            </div>
        ))}
      </div>
    )
}

export default Carrousel2