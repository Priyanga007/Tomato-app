import headerImg from "../assets/fo2.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img src={headerImg} alt="" />

      <div className="header-content">
        <h1>Order Your Favourite Food Here</h1>
        <p>
          Choose from a diverse menu featuring delicious dishes crafted with care.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;