import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container footer">
          <div className="address">
            <p>364001 Chitra</p>
            <p>D-306 , Rahul</p>
          </div>
          <div className="d-flex flex-column">
            <a href="mailto:rahuljogadiya007@gmail.com">
              rahuljogadiya007@gmail.com
            </a>
            <a href="tel:+7984289055">7984289055</a>
          </div>
          <div className="privacy  text-center">
            <p>Store Regulation</p>
            <p>Privacy Policy</p>
          </div>
          <div className="delivery text-center">
            <p>Delivery</p>
            <p>Return and Exchange</p>
          </div>
          <div className="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
