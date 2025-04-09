import React from "react";
import Nav from "./Nav";
import Workhop1 from "./Workhop1";
import Workhop2 from "./Workshop2";
import Footer from "./Footer";

function Workshop({ openCart, addToCart }) {
  return (
    <div style={{ backgroundColor: "#E1E1E1" }}>
      <Nav openCart={openCart} />
      <div className="workshop-img">
        <h1>WorkShop</h1>
      </div>
      <Workhop1
        img={
          "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_9/m66gvqwa/element_363/rwdMode_1/666x666/Workshop_1.webp"
        }
        title={"Online workshop"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus."
        }
        price={5000}
        addToCart={addToCart}
      />
      <Workhop2
        title={"Workshop for adults"}
        img={
          "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_6/m66gvrhr/element_363/rwdMode_1/666x666/Workshop_4.webp"
        }
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus."
        }
        price={15000}
        addToCart={addToCart}
      />

      <Workhop1
        img={
          "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_10/m66gvra7/element_363/rwdMode_1/666x666/Workshop_2.webp"
        }
        title={"Workshop for Children"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus."
        }
        price={10000}
        addToCart={addToCart}
      />
      <Workhop2
        title={"Workshop for companie"}
        img={
          "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_10/m66gvra7/element_363/rwdMode_1/666x666/Workshop_2.webp"
        }
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum. Donec viverra a neque vel egestas. Ut quis urna orci. Nullam sollicitudin est et quam rhoncus, nec imperdiet sem efficitur. Etiam aliquam posuere hendrerit. Curabitur egestas sed nisl rhoncus finibus."
        }
        price={25000}
        addToCart={addToCart}
      />
      <div className="mt-5"></div>
      <Footer />
    </div>
  );
}

export default Workshop;
