import './listening.css'
import { useState } from "react";

const Listening = ()=>{

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    const Listop = [
        {   
            id: 1,
            img: './1.png',
            music: 'Lil Nas X, Nas - Rodeo',
            visit: '6140 listening',
        },
        {   
            id: 2,
            img: './2.png',
            music: 'Lil Nas X, Nas - Rodeo',
            visit: '3400 listening',
        },
        {   
            id: 3,
            img: './3.png',
            music: 'Lil Nas X, Nas - Rodeo',
            visit: '2000 listening',
        },
        {   
            id: 4,
            img: './1.png',
            music: 'Lil Nas X, Nas - Rodeo',
            visit: '1640 listening',
        },  
        
    ]
    const handleClick = (index) => {
        if (showAll) {
          setCurrentIndex(index);
        } else {
          setShowAll(true);
        }
      };
    

    return(
    <div className={`Top ${showAll ? 'show-all' : ''}`} >
        {Listop.map((Listop, index) => (
          <div
            key={Listop.id}
            className="Music"
            onClick={() => handleClick(index)}
          >
            <div className="info">
                <p>{Listop.id}.</p>
                <div>
                  <img src={Listop.img} alt="" />
                </div>
              <div className='most'>
                <div className='mor'>
                  <p>{Listop.music}</p>
                  <img src="./opc.svg" alt="" /> 
                </div>
               
                <p>{Listop.visit}</p>
                <img src="./heart.svg" alt=""/>
                <img src="./Union.svg" alt=""/>
              </div>
              
            </div>
            <hr />
              
          </div>
        ))}
      </div>
    )
}

export default Listening