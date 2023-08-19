import { styled } from "styled-components"
import "./intro.css"
import Carousel from "./carousel"
import { Link } from "react-router-dom"
const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(298deg, #364F6B 0%, #6B5072 42.83%, #FC5185 100%), #1C1C1C;
    box-shadow: 0px 4px 60px 0px rgba(143, 143, 143, 0.10), 0px 0px 2px 0px rgba(184, 184, 184, 0.20);
`

const Intro = ()=>{
    return(
        
        <Main>
            <div className="head">
                <ul>
                    <li>Social Network</li>
                    <li>For People</li>
                    <li>Who Want to find</li>
                    <li>Soulmates</li>
                </ul>
            </div>
            <div className="logo">
                <h3>Music</h3>
                <h1>KAPUHA</h1>
            </div>
            <Carousel/> 
            <Link to='./ui' className="corner-button">Start</Link>
            
        </Main>
    )
}

export default Intro