import { Route, Routes } from "react-router-dom";
import Carousel from "./Components/Carousel";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Blog from "./Components/Blog";
import Events from "./Components/Events";
import MenuList from "./Components/Menu";
import ContactPage from "./Components/Contact";
import { Slider } from "./Components/SwiperCarousel";
export default function App() {
  return (
    <div className="App">
      <div className="bg-orange-700 w-[100dwh] h-[100dvh]">
        <Header />
        <Routes>
          <Route index element={<Slider />} />
          <Route path="/products" element={<Products />} />
          <Route path="/events" element={<Events />} />
          <Route path="/menu" element={<MenuList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}
