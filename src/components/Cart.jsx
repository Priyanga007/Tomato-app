import foodData from "../data/foodData";

const Cart = ({ cart, setCart }) => {

  const addItem = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] === 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }
      return updated;
    });
  };

  // ✅ CALCULATE TOTAL
  const total = Object.keys(cart).reduce((sum, id) => {
    const item = foodData.find((f) => f.id === Number(id));
    return sum + item.price * cart[id];
  }, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {Object.keys(cart).length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {Object.keys(cart).map((id) => {
            const item = foodData.find((f) => f.id === Number(id));

            return (
              <div className="cart-item" key={id}>
                <img src={item.image} alt="" />

                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>

                <div className="counter">
                  <button onClick={() => removeItem(id)}>-</button>
                  <span>{cart[id]}</span>
                  <button onClick={() => addItem(id)}>+</button>
                </div>

                <h4>₹{item.price * cart[id]}</h4>
              </div>
            );
          })}

          {/* TOTAL */}
          <div className="cart-total">
            <h3>Total: ₹{total}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;