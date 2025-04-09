import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function Nav({ openCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const sidebarRef = useRef(null);
  const menuRef = useRef(null); // Add ref for menu button

  const handleCartClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      openCart();
    }, 1000);
  };

  // Detect clicks outside sidebar & menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {showLoader && <Loader />}

      <div className="container">
        <nav>
          <div>
            <img
              src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/layout_2/m66gvf7w/element_203/rwdMode_1/118x94/logo.webp"
              alt="Logo"
            />
          </div>
          <div ref={sidebarRef}>
            <ul className={isOpen ? "sidebar open" : "sidebar"}>
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <Link to="/workshop">WORKSHOP</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <Link>
                  <i
                    className="fa-solid fa-cart-shopping"
                    onClick={handleCartClick}
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="menu"
            ref={menuRef}
            onClick={() => setIsOpen(!isOpen)}
          >
            <i
              className={`fa-solid fa-bars ${isOpen ? "rotate" : "rotate-y"}`}
            ></i>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
