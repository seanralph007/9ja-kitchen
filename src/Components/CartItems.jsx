import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, removeFromCart } from "../store/cartSlice";

export default function CartItems() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-content">
      {cartItems.length === 0 ? (
        <p>No meal on your tray yet!</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <strong>{item.title}</strong> - ₦{item.price.toFixed(2)}
              </div>
              <div className="cart-item-actions">
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="cart-total-price">
        Total: <strong>₦{totalPrice}</strong>
      </p>
    </div>
  );
}
