import { styled } from "styled-components"
import './lowernav.css'
import { Link } from "react-router-dom"
const Div = styled.div`
    width:100%;
    position: fixed;
    bottom:0;
    border-radius: 0px 0px 24px 24px;
    border: 0.5px solid #F0F0F0;
    background: #FFF;
    box-shadow: 0px 4px 60px 0px rgba(143, 143, 143, 0.10);
`
const Lowernav = ()=>{
    return(
        <div className="lownav">
            <Div className="nav">
                <ul>
                    <li><img src="./music.svg" alt="" className="music" /></li>
                    <li><img src="./friend.svg" alt="" /></li>
                    <li><img src="./home-run.svg" alt="" /></li>
                    <li><Link to='../message'><img src="./chat.svg" alt="" /></Link></li>
                    <li><img src="./menu.svg" alt="" /></li>
                </ul>
            </Div>
        </div>
        
    )
}

export default  Lowernav