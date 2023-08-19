import './message.css'
import MessageInput from './messageInput'
import { Link } from 'react-router-dom'

const Message = ()=>{
    return(
        <main>
            <div className="navu">
                <div>
                    <Link to="/ui" id='back'>Back</Link>
                    <h3>Common Message</h3>
                </div>
                <div>
                    <a href="#">newest</a>
                </div>
            </div>
            <div>

            </div>
            <MessageInput/>
        </main>
    )
}

export default Message