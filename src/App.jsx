import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Categories from "./components/Categories";
import FoodList from "./components/FoodList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Cart from "./components/Cart";
import AppDownload from "./components/AppDownload";
import ScrollTop from "./components/ScrollTop";
import Users from "./components/Users";

import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState("All");


  return (
    <>
      <Navbar setShowLogin={setShowLogin} 
              cart={cart} 
              setShowCart={setShowCart}
      />

      {showCart && <Cart cart={cart} setCart={setCart} />}
      {showLogin && <Login setShowLogin={setShowLogin} />}

      {!showCart && (
        <>
          <Header />
          <Categories category={category} setCategory={setCategory}/>
          <FoodList cart={cart} setCart={setCart} category={category}/>
          <AppDownload />
          <ScrollTop />
          <Users />
          <Footer />
        </>

      )}
      </>
);
}
export default App;