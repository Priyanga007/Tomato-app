import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">

        {/* LEFT */}
        <div className="footer-left">
          <h2>Tomato.</h2>
          <h3>Freshness Delivered</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam dignissimos tempora fuga, ex quasi a iste numquam, officiis totam saepe placeat autem eveniet molestiae accusamus tempore, quibusdam laborum cum aperiam adipisci! Perspiciatis veniam at cumque quas eum modi quod dolore alias accusamus blanditiis saepe et, ea quo omnis ratione.
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet, nam? Lorem ipsum dolor sit amet.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right" id="contact">
          <h3>Get in touch</h3>
          <p>+91 9876543210</p>
          <p>contact@tomato.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2024 Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;