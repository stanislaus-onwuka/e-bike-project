import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/homepage/homepage'
import Unavailable from "./pages/unavailable/unavailable";

function App() {
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
