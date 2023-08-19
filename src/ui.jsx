import './components/ui.css'
import MusicTop from './components/musictop'
import Lowernav from './components/lowernav'
import Listening from './components/listening'
const Ui = () =>{
    return(
        <main>
            <nav>
                <div className="header">
                    <div className="user">
                        <div>
                            <img src="./user.png" />
                        </div>
                        <div>
                            <h1>Connie Pena</h1>
                            <p>
                                United Status, Peoria
                                <br />
                                july 21, 2019
                            </p>
                        </div>
                    </div>
                </div>
                <div className='logos'>
                    <div className='border'>
                        <img src="./add-friend.svg" />
                    </div>
                    <div className='border'>
                        <img src="./cil.svg" alt="" />
                    </div>
                </div>
            </nav>
            <div className='topmusic'>
                <h3>Top-5 music <a href="">ever</a></h3>
            </div>
            <MusicTop/>
            <div className='mostlistening'>
                <h3>Most listening <a href="">ever</a></h3>
            </div>
            <Listening/>
            <Lowernav/>
            
        </main>
    )
}

export default Ui