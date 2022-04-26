import Homepage from "./Components/pages/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SliderRoutes from '../src/routes/SliderRoutes';
import Booking from "./Components/pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/booking" exact element={<Booking />} />
        <Route path="/family/*" element={<SliderRoutes />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
