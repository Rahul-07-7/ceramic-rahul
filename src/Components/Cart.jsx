import React, { useState } from "react";

function Cart({ cartItems, updateQuantity, closeCart }) {
  const [showForm, setShowForm] = useState(false);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const timer = () => {
    alert("Order confirm");
    setTimeout(() => {
      closeCart();
    }, 1000);
  };

  return (
    <div>
      <div className="container">
        <div className="cart-overlay">
          <div className="model">
            <div className="model-header">
              <h2>My Cart</h2>
              <i
                className="fa-solid fa-xmark close-icon"
                onClick={closeCart}
              ></i>
            </div>
            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <h4>Your cart is empty 🛒</h4>
                <button
                  onClick={closeCart}
                  className="btn btn-outline-dark mt-3"
                >
                  Keep Shopping
                </button>
              </div>
            ) : !showForm ? (
              <>
                <table className="table border-bottom">
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                  </tr>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.img}
                            alt={item.productName}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                              marginRight: "10px",
                            }}
                          />
                          {item.productName}
                        </td>

                        <td>
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="cart-btn"
                          >
                            -
                          </button>
                          {item.quantity}
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="cart-btn"
                          >
                            +
                          </button>
                        </td>
                        <td>{item.price}</td>
                        <td>{(item.price * item.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-between px-4">
                  <button onClick={closeCart} className="btn btn-light">
                    Keep Shopping
                  </button>
                  <button
                    onClick={() => setShowForm(true)}
                    className="btn btn-dark"
                  >
                    Next
                  </button>
                </div>
                <div className="text-end pe-4 pt-3">
                  <h3>Sub Total : {totalPrice.toFixed(2)} ₹ </h3>
                </div>
              </>
            ) : (
              <>
                {!isSubmitted ? (
                  <form className="p-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label>Phone Number</label>
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label>Shipping Address</label>
                      <textarea
                        name="address"
                        className="form-control"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between btn-sub">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setShowForm(false)}
                      >
                        Back
                      </button>
                      <button type="submit" className="btn btn-success">
                        Submit Order
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-3">
                    <h4>Confirm Your Order</h4>
                    <p>
                      <strong>Name:</strong> {formData.name}
                    </p>
                    <p>
                      <strong>Phone:</strong> {formData.phone}
                    </p>
                    <p>
                      <strong>Address:</strong> {formData.address}
                    </p>

                    <h5>Items:</h5>
                    <ul>
                      {cartItems.map((item) => (
                        <li key={item.id}>
                          {item.productName} x {item.quantity} = ₹
                          {(item.price * item.quantity).toFixed(2)}
                        </li>
                      ))}
                    </ul>
                    <h5>Total: ₹{totalPrice.toFixed(2)}</h5>

                    <div className="d-flex justify-content-end gap-2 mt-3">
                      <button className="btn btn-success" onClick={timer}>
                        Confirm
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Go Back
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
