import { Route, Routes } from "react-router-dom";
import Header from "./Components/01-Header/Header";
import Products from "./Pages/Products";
import Blog from "./Pages/Blog";
import Events from "./Pages/Events";
import MenuList from "./Pages/Menu";
import ContactPage from "./Pages/Contact";
import Main from "./Pages/Main";
import PizzaProvider from "./Contexts/PizzaContext";
export default function App() {
  return (
    <div className="App">
      <PizzaProvider>
        <header className="bg-orange-700 ">
          <Header />
          {/* ROUTES SECTION */}
          <Routes>
            <Route index element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="/events" element={<Events />} />
            <Route path="/menu" element={<MenuList />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          {/* END OF ROUTES SECTION */}
        </header>
      </PizzaProvider>
    </div>
  );
}
