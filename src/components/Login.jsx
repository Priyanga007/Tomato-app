const Login = ({ setShowLogin }) => {
  return (
    <div 
      className="login-overlay"
      onClick={() => setShowLogin(false)}
    >
      <div 
        className="login-box"
        onClick={(e) => e.stopPropagation()}
      >
        <span 
          className="close-btn"
          onClick={() => setShowLogin(false)}
        >
          ✖
        </span>

        <h2>Sign up</h2>

        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <input type="password" placeholder="Password" />

        <button>Create Account</button>
      </div>
    </div>
  );
};

export default Login;