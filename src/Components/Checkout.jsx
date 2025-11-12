import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (val, item) => val + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="checkout-container">
      {/* LEFT SIDE - ORDER SUMMARY */}
      <section className="checkout-summary">
        <div className="checkout-items">
          <h3>
            {cartItems.length > 1
              ? `${cartItems[0].title} and ${cartItems.length - 1} more`
              : cartItems[0]?.title || "Your Tray"}
          </h3>

          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div>
                  <p>{item.title}</p>
                  <p className="qty">Plate: {item.quantity}</p>
                </div>
                <p className="price">
                  ₦{(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <p className="checkout-total">Total: ₦{totalPrice.toFixed(2)}</p>
        </div>

        <footer className="powered-by">
          <p>
            Powered by <strong>Stripe</strong>
          </p>
          <div className="links">
            <a href="#">Terms</a> • <a href="#">Privacy</a>
          </div>
        </footer>
      </section>

      {/* RIGHT SIDE - PAYMENT FORM */}
      <section className="checkout-form">
        <h3>Choose Payment Option</h3>

        {/* Dropdown for payment method */}
        <div className="form-section">
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="payment-dropdown"
          >
            <option value="card">Pay with Card</option>
            <option value="delivery">Pay on Delivery</option>
          </select>
        </div>

        <form>
          {/* SHARED INPUTS */}
          <div className="form-section">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Address" required />
            <input type="number" placeholder="Phone Number" required />
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* CONDITIONAL RENDERING */}
          {paymentMethod === "card" ? (
            <>
              <div className="form-section">
                <label>Payment details</label>
                <input type="number" placeholder="Card number" required />
                <div className="card-row">
                  <input type="number" placeholder="MM / YY" required />
                  <input type="number" placeholder="CVC" required />
                </div>
              </div>
              <button type="submit" className="pay-btn" onClick={handleClick}>
                Pay ₦{totalPrice.toFixed(2)}
              </button>
            </>
          ) : (
            <>
              <div className="form-section">
                <label>Payment Method: Pay on Delivery</label>
                <p className="info-text">
                  You’ll pay when your order arrives. Please make sure your
                  address and phone number are correct.
                </p>
              </div>
              <button type="submit" className="pay-btn" onClick={handleClick}>
                Place Order
              </button>
            </>
          )}
        </form>
      </section>
    </div>
  );
}
