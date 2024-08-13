import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Booking from './Booking/Booking';
import NoMatch from './utils/noMatch';

function App() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
  );
}

export default App;
