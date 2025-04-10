import React from "react";
import Nav from "./Nav";
import Form from "./Form";
import Footer from "./Footer";

function Contect({ openCart }) {
  return (
    <div>
      <Nav openCart={openCart} />
      <div className="contect-img">
        <h1>Contect</h1>
      </div>
      <div className="container mt-5">
        <div className="contect">
          <div>
            <h1>Contect us</h1>
            <div className="address-2 mt-3">
              <p>364001 Chitra</p>
              <p>D-306 , Rahul</p>
            </div>
            <div className="address-2">
              <div>
                <a href="mailto:rahuljogadiya007@gmail.com">
                  rahuljogadiya007@gmail.com
                </a>
              </div>
              <div className="mt-3">
                <a href="tel:+7984289055">7984289055</a>
              </div>
            </div>
            <div className="contect-icon">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="mt-5 mb-5">
              <h1>Collabration</h1>
              <a href="mailto:rahuljogadiya007@gamil.com">
                rahuljogadiya007@gamil.com
              </a>
            </div>
          </div>
          <div className="form-container">
            <Form />
          </div>
        </div>
      </div>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118587.40630731254!2d72.0813153!3d21.7470903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5110adfb103d%3A0x9c6114665f10fc57!2sNari%20Chokdi!5e0!3m2!1sen!2sin!4v1743998935549!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Product preview from Example.com"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Contect;
