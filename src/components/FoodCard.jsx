import React from "react";

const FoodCard = ({ item, cart, setCart }) => {

  const addToCart = () => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const removeFromCart = () => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[item.id] > 1) {
        updated[item.id] -= 1;
      } else {
        delete updated[item.id];
      }
      return updated;
    });
  };

  return (
    <div className="food-card">
      <img src={item.image} alt="" />

      <h3>{item.name}</h3>

      <p>{item.description}</p>

      <h4>₹{item.price}</h4>

      {/* CART BUTTON */}
      {!cart[item.id] ? (
        <button onClick={addToCart}>Add</button>
      ) : (
        <div className="counter">
          <button onClick={removeFromCart}>-</button>
          <span>{cart[item.id]}</span>
          <button onClick={addToCart}>+</button>
        </div>
      )}
    </div>
  );
};

export default FoodCard;