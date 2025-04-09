import React from "react";
import Button from "./Button";
import Product from "./Product";
import Testomonial from "./Testomonial";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Header({ openCart, addToCart }) {
  return (
    <div>
      <Nav openCart={openCart} />
      <div className="header">
        <div className="header-main">
          <h1>Ceramics Studio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci
            massa, dapibus quis molestie sit amet, pharetra vitae dolor.
            Praesent auctor, dui id maximus sagittis, lectus enim pharetra quam,
            ut laoreet tortor metus ut ipsum.
          </p>
          <Button name="Show More" />
        </div>
      </div>

      <div className="mt-5 text-center">
        <h1>BestSeller</h1>
      </div>
      <div className="container d-flex gap-3 mt-5 main-product">
        <Product
          img="https://images.unsplash.com/photo-1520031473529-2c06dea61853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww"
          productName="Sara Mug"
          price={2000}
          id={10}
          addToCart={addToCart}
        />
        <Product
          img="https://images.unsplash.com/photo-1499028203764-8669cfd05719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhdGV8ZW58MHx8MHx8fDA%3D"
          productName="Moon Plate"
          price={2500}
          addToCart={addToCart}
          id={8}
        />
        <Product
          img="https://images.unsplash.com/photo-1584958642878-52035e999578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lsdmVyJTIwc2V0fGVufDB8fDB8fHww"
          productName="Silver Set"
          price={1500}
          addToCart={addToCart}
          id={9}
        />
        <Product
          img="https://images.unsplash.com/photo-1699391197173-511a372040ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3AlMjBvZiUyMG11Z3xlbnwwfHwwfHx8MA%3D%3D"
          productName="Workshop for adults"
          price={10000}
          addToCart={addToCart}
          id={2}
        />
      </div>
      <section>
        <div className="collection">
          <div className="d-flex gap-3 collection-2">
            <div className="d-flex flex-column gap-2 justify-content-center">
              <h2>New Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elementum sapien ac sapien vestibulum posuere. Praesent congue
                dui nec lectus tincidunt elementum. Donec viverra a neque vel
                egestas. Ut quis urna orci. Nullam sollicitudin est et quam
                rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere
                hendrerit. Curabitur egestas sed nisl rhoncus finibus.
              </p>
              <Button name="More" />
            </div>
            <div className="d-flex gap-4 imgs-1">
              <div className="d-flex gap-3 flex-column imgs-2 ">
                <img
                  src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_216/rwdMode_1/292x283/ceramics_2.webp"
                  alt=""
                />
                <img
                  src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_216/rwdMode_1/292x283/ceramics_2.webp"
                  alt=""
                />
              </div>
              <div className="collection-img">
                <img
                  src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_217/rwdMode_1/381x593/ceramics_2.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container workshop-part">
          <div>
            <img
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_220/rwdMode_1/600x565/Workshop_4.webp"
              alt=""
            />
          </div>
          <div className="d-flex flex-column gap-2 justify-content-center">
            <h2>Workshops</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum sapien ac sapien vestibulum posuere. Praesent congue dui
              nec lectus tincidunt elementum. Donec viverra a neque vel egestas.
              Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec
              imperdiet sem efficitur. Etiam aliquam posuere hendrerit.
              Curabitur egestas sed nisl rhoncus finibus.
            </p>
            <Link to="/workshop">
              <Button name="Subscribe" />
            </Link>
          </div>
        </div>
      </section>
      <section className="testomonials">
        <div className="container ">
          <h1 className="text-center ">Our Employees</h1>
          <div className="d-flex gap-5 testomonial-responsive">
            <Testomonial
              img={
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D"
              }
              name={"Mary Smith"}
              pera={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum."
              }
            />
            <Testomonial
              img={
                "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww"
              }
              name={"Jack mittchel"}
              pera={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum."
              }
            />
            <Testomonial
              img={
                "https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVufGVufDB8fDB8fHww"
              }
              name={"Bell jones"}
              pera={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum."
              }
            />
          </div>
        </div>
      </section>
      <section className="img-container">
        <div className="container d-flex gap-3 imgs">
          <div className="img-1">
            <img
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_235/rwdMode_1/579x620/product_2A.webp"
              alt=""
            />
          </div>
          <div className="img-2">
            <img
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_236/rwdMode_1/600x313/product_6.webp"
              alt=""
            />
            <div className="img-3 d-flex gap-3">
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_236/rwdMode_1/600x313/product_6.webp"
                alt=""
              />
              <img
                src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_11/m66gvjjz/element_236/rwdMode_1/600x313/product_6.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="our-story">
          <div className="d-flex justify-content-center gap-2 flex-column text-white w-50 ms-5 h-100">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              elementum sapien ac sapien vestibulum posuere. Praesent congue dui
              nec lectus tincidunt elementum. Donec viverra a neque vel egestas.
              Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec
              imperdiet sem efficitur. Etiam aliquam posuere hendrerit.
              Curabitur egestas sed nisl rhoncus finibus
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Header;
