import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { clearCart } from "../store/cartSlice";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClear = () => dispatch(clearCart());

  const handleCheckout = () => {
    handleClose();
    navigate("/checkout");
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 400); // matches CSS transition
  };

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return createPortal(
    <>
      <div className="cart-backdrop" onClick={handleClose} />
      <div className={`cart-modal ${isClosing ? "close" : "open"}`}>
        <h2>
          Your Tray
          <button className="cart-close-icon" onClick={handleClose}>
            ×
          </button>
        </h2>

        {/* <h2>Your Tray</h2> */}
        <CartItems />
        <div className="cart-actions">
          {cartItems.length > 0 && (
            <div className="button-group">
              <button onClick={handleClear} className="clear-cart">
                Clear Tray
              </button>
              <button onClick={handleCheckout} className="checkout-btn">
                Checkout
              </button>
            </div>
          )}
          <button onClick={handleClose}>Close</button>
          {/* <button onClick={handleClose} className="close-btn">
            Close
          </button> */}
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
