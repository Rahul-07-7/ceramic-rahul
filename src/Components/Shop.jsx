import React from "react";
import ShopHeader from "./Shop-Header";
import Nav from "./Nav";
import Product from "./Product";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Cart from "./Cart";

function Shop({
  openCart,
  addToCart,
  updateQuantity,
  cartItems,
  showCart,
  closeCart,
}) {
  const { category } = useParams();

  const products = [
    {
      id: 1,
      img: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_6/m66gvrhr/element_363/rwdMode_1/666x666/Workshop_4.webp",
      productName: "Workshops for companies",
      price: 25000,
      category: "New",
    },
    {
      id: 2,
      img: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_9/m66gvqwa/element_363/rwdMode_1/666x666/Workshop_1.webp",
      productName: "Workshop for adults",
      price: 15000,
      category: "product",
    },
    {
      id: 3,
      img: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_9/m66gvqwa/element_363/rwdMode_1/666x666/Workshop_1.webp",
      productName: "Workshop for Children",
      price: 10000,
      category: "product",
    },
    {
      id: 4,
      img: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_6/m66gvrhr/element_363/rwdMode_1/666x666/Workshop_4.webp",
      productName: "Online workshop",
      price: 5000,
      category: "product",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1520031473529-2c06dea61853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww",
      productName: "Set of containers",
      price: 15000,
      category: "New",
    },
    {
      id: 6,
      img: "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/productpage_5/m66gvr20/element_363/rwdMode_1/666x666/product_1.webp",
      productName: "Sart Set",
      price: 2500,
      category: "New",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1520031473529-2c06dea61853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww",
      productName: "Nordic containers",
      price: 2000,
      category: "New",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1499028203764-8669cfd05719?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhdGV8ZW58MHx8MHx8fDA%3D",
      productName: "Moon plate",
      price: 2500,
      category: "product",
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1584958642878-52035e999578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2lsdmVyJTIwc2V0fGVufDB8fDB8fHww",
      productName: "Silver set",
      price: 1500,
      category: "product",
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1520031473529-2c06dea61853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww",
      productName: "Sara mug",
      price: 2000,
      category: "product",
    },
  ];

  let filteredProducts;
  if (category) {
    filteredProducts = products.filter((item) => item.category === category);
  } else {
    filteredProducts = products;
  }

  return (
    <div>
      <Nav openCart={openCart} />
      <ShopHeader />
      <div className="container">
        <div className="row">
          <div className="col-lg-2 mt-5 shop-p">
            <ul>
              <li>
                <Link to="/shop">All</Link>
              </li>
              <li>
                <Link to="/shop/New">New</Link>
              </li>
              <li>
                <Link to="/shop/product">Product</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-10">
            {category && (
              <div className="breadcrumb mt-5">
                <p>Shop / {category}</p>
              </div>
            )}

            <div className="main-product flex-wrap d-flex gap-3 mt-5">
              {filteredProducts?.map((item) => (
                <Product
                  key={item.id}
                  img={item.img}
                  productName={item.productName}
                  price={item.price}
                  id={item.id}
                  addToCart={addToCart}
                />
              ))}
              {showCart && (
                <Cart
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                  closeCart={closeCart}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
