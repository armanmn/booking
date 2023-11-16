import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelList from "./pages/hotelList/HotelList";
import Hotel from "./pages/hotel/Hotel";
import Sales from "./pages/sales/Sales";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelList />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
