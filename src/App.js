import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Shop from "./Components/Shop";
import Contect from "./Components/Contect";
import Workshop from "./Components/Workshop";
import Blog from "./Components/Blog";
import Loader from "./Components/Loader";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(false);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const handleCartClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCart(true);
    }, 2000);
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setShowCart(true);
  };

  const updateQuantity = (productId, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(item.quantity + change, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      {loading && <Loader />}
      {showCart && (
        <Cart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          closeCart={closeCart}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Header
              openCart={openCart}
              addToCart={addToCart}
              handleCartClick={handleCartClick}
            />
          }
        />
        <Route
          path="/shop/:category?"
          element={<Shop openCart={openCart} addToCart={addToCart} />}
        />
        <Route path="/contact" element={<Contect openCart={openCart} />} />
        <Route path="/blog" element={<Blog openCart={openCart} />} />
        <Route
          path="/workshop"
          element={<Workshop openCart={openCart} addToCart={addToCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
