import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Page/Home/Home';
import About from './Components/Page/About/About';
import Header from './Components/shared/Header/Header';
import Appointment from './Components/Page/Appointment/Appointment';
import Reviews from './Components/Page/Reviews/Reviews';
import Contact from './Components/Page/Contact/Contact';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
