import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>You have no items in your cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(index)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
