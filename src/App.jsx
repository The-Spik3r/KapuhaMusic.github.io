import './App.css'
import Intro from "./components/Intro";
import { Route, Routes } from 'react-router-dom';
import Ui from './ui'
import Loader from './components/loader';
import { useState } from 'react';
import { useEffect } from 'react';
import Message from './components/message'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  useEffect(() => {
    function isMobileDevice() {
      const mobileDeviceRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return mobileDeviceRegex.test(navigator.userAgent);
    }

    const isMobile = isMobileDevice();
    if (!isMobile) {
      alert('Es recomendable ver esto en un celular para una mejor experiencia.');
    }
  }, []);

  return ( 
    
    <div>
        {loading ? (
        <Loader />
      ) : (
        <Routes>
                {/* Ruta para la página principal */}
                <Route path="/" element={<Intro />} />

                {/* Ruta para el otro componente */}
                <Route path="/ui" element={<Ui />} />
                <Route path="/message" element={<Message />} />
          </Routes>
      )}
         
    </div>
    
  )
}

export default App
