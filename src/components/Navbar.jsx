
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ setShowLogin, cart, setShowCart }) => {

  const totalItems = Object.values(cart || {}).reduce((a, b) => a + b, 0);

  return (
    <div className="navbar">
      <h2 className="logo">Tomato.</h2>

      <ul className="nav-links">
         <li onClick={() => setShowCart(false)}>Home</li>
        <li onClick={() => {document.getElementById("menu").scrollIntoView({
    behavior: "smooth" }); }}>Menu</li>
        <li>Mobile App</li>
        <li onClick={() => {document.getElementById("contact").scrollIntoView({
    behavior: "smooth" }); }}>Contact</li>
      </ul>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        
        {/* CART */}
        <div className="cart-icon"
          
          onClick={() => {console.log("cart clicked");  
              setShowCart(true); }} > <FaShoppingCart />
          <span className="cart-count">{totalItems}</span>
        </div>

        <button className="login-btn"
            onClick={() => {console.log("login clicked");
              setShowLogin(true); }}>Sign-In</button>
      </div>
    </div>
  );
};

export default Navbar;