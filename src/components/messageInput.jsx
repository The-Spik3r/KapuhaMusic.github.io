import './messageinput.css';

const MessageInput = () => {


  return (
    <div className='message'>
        <a href="">See Answer</a>
        <div className="input-container">
          <span className="input-icon" role="img" aria-label="Mensaje">
            &#128172;
          </span>
          <input type="text" placeholder="Send the answer" />
          <img src="./heart.svg" alt="" />
        </div>
    </div>
    
  );
};

export default MessageInput;
