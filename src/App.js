import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Zapros from "./components/Zapros";
import Garaj from "./components/Garaj";
import Contact from "./components/Contact";
import Zakazy from "./components/Zakazy";
import User from "./components/User";
import Footer from "./components/Footer";
import BuyGaraj from "./components/AddCard/BuyGaraj";
import ProductDetails from "./components/ProductDetails";
import Mers from "./components/Mers";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zapros" element={<Zapros />} />
        <Route path="/garaj" element={<Garaj />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/zakazy" element={<Zakazy />} />
        <Route path="/user" element={<User />} />
        <Route path="/buyGaraj" element={<BuyGaraj />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/mers" element={<Mers />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
