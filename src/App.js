import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/homepage/homepage'
import Unavailable from "./pages/unavailable/unavailable";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  
  useEffect(()=>{
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Unavailable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
