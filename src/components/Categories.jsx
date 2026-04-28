import fo1 from '../assets/fo1.jpg';
import fo1webp from '../assets/fo1.webp';
import fo2 from '../assets/fo2.jpeg';
import fo3 from '../assets/fo3.jpeg';
import fo4 from '../assets/fo4.jpeg';
import fo5 from '../assets/fo5.jpeg';
import fo6 from '../assets/fo6.jpeg';
import fo7 from '../assets/fo7.jpeg';

const categories = [
  { name: "Salad", image: fo1 },
  { name: "Rolls", image: fo2 },
  { name: "Desserts", image: fo3 },
  { name: "Sandwich", image: fo4 },
  { name: "Cake", image: fo5 },
  { name: "Pure Veg", image: fo6 },
  { name: "Pasta", image: fo7 },
  { name: "Noodles", image: fo1webp },
];

const Categories = () => {
  return (
      <div className="categories" id="menu">
      <h2>Explore Our Menu</h2>

      <div className="category-list">
        {categories.map((cat, i) => (
          <div key={i} className="category-item">
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default Categories;