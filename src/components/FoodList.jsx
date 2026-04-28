import foodData from "../data/foodData";
import FoodCard from "./FoodCard";

const FoodList = ({ cart, setCart }) => {
  return (
    <div className="food-list">
      <h2>Top Dishes Near You</h2>

      <div className="food-grid">
        {foodData.map((item) => (
          <FoodCard 
            key={item.id} 
            item={item} 
            cart={cart} 
            setCart={setCart} 
          />
        ))}
      </div>
    </div>
  );
};
export default FoodList;