import "./Cart.css";
import {useCart} from "../context/Cartcontext";
import { useState } from "react";
import successHtml from '../emailTemplate/success.html?raw'

const shoppingBag = '\uD83D\uDED2';
const successIcon = '\u2705';

const Cart = ({ setPage }) => {

    const {cart, dispatch, totalItems, totalPrice} = useCart();

    const [order, setOrder] = useState(false);
    const Tax = totalPrice * 0.08;
    const Shipping = totalPrice >= 100?0:9;

    const sendEmail = async({userEmail, subject, html}) => {
        try {
          const response = fetch('http://localhost:3000/api/send-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userEmail, subject, html})
          });
          const data = (await response).json();
          return data;
        } catch (error) {
          console.error('Error sending email', error);
        }
      }

    const handleCheckout = async () => {
      dispatch({type: "CLEAR"})
      setOrder(true);
      
      sendEmail({
        userEmail: "olajidesulaimon339@gmail.com",
        subject: "Order confirmation - Shopping-Cart",
        html: successHtml
      })
    }

    if(order){
      return(
        <main className="cart">
             <div className="cart__success">
              <span className="cart_success-icon">
                {successIcon}
              </span>
              <h2 className="cart_success-title">Order Comfirmed</h2>
              <p className="cart_success-text">Thank you for your purchase. you will receive a confirmation email shortly.</p>
              <button className="cart__success-btn" onClick={() => {setOrder(false); setPage("shop")}}>Continue Shopping</button>
             </div>
        </main>
      )
    }

if(cart.length === 0){
  return(
      <main className="cart">
        <div style={{textAlign: 'center', padding: '40px 20px'}}>
          <span style={{fontSize: '60px', display: 'block', marginBottom: '20px'}}>
            {shoppingBag}
          </span>
          <h2 style={{color: '#f5ede0', marginBottom: '10px'}}>Your cart is empty</h2>
          <p style={{color: '#c9813a', marginBottom: '20px'}}>Discover Something worth keeping</p>
          <button onClick={() =>setPage('shop')} style={{padding: '10px 20px', backgroundColor: '#c9813a', border: 'none', cursor: 'pointer', borderRadius: '3px'}}>Browse Collection</button>
        </div>
      </main>
    )
}
    

  return (
    <main>
        <div className="cart__items">
        {cart.map((item) => (
            <div key={item.id} className="cart__item">
                <div className="cart__items-visual">
                    {item.emoji}
                </div>
                <div className="card__item-info">
                    <p className="cart__item-category">{item.category}</p>
                    <p className="cart__item-name">{item.name}</p>
                    <p className="cart__item-price">${Number(item.price).toFixed(2)}</p>
                </div>
                <div className="cart__item-controls">
                    <button className="cart__qty-btn" onClick={() => dispatch({type: "DECREMENT", payload: item})}>-</button>
                    <span className="cart__qty">{item.quantity}</span>
                    <button className="cart__qty-btn" onClick={() => dispatch({type: "INCREMENT", payload: item})}>+</button>
                </div>
            </div>
        ))}
    </div>
    <div className="cart__summary">
      <h3 className="cart__summary-title">Order Summary</h3>
      <div className="cart__summary-rows">
        <div className="cart__summary-row">
          <span className="cart__summary-label">Subtotal</span>
          <span className="cart__summary-value">${Number(totalPrice).toFixed(2)}</span>
        </div>
        <div className="cart__summary-row">
          <span className="cart__summary-label">Shipping</span>
          <span className="cart__summary-value"> {Shipping === 0? "Free" : "$9.00"} </span>
        </div>
        <div className="cart__summary-row">
          <span className="cart__summary-label">Tax (8%)</span>
          <span className="cart__summary-value">${Number(Tax).toFixed(2)}</span>
        </div>
      </div>
      <div className="cart__divider" />
      <div className="cart__total-row">
        <span className="cart__summary-label">Total</span>
    <span className="cart__summary-value">${(Number(totalPrice) + Shipping + Number(Tax)).toFixed(2)}</span>
      </div>
      {Shipping > 0 && (<p className="cart__free-shipping">Add ${(100 - Number(totalPrice)).toFixed(2)}
           more for free shipping </p>)}
      <button className="cart__checkout-btn" onClick={handleCheckout}>Place order</button>
      <button className="cart__continue-shopping-btn" onClick={() =>setPage('shop')}>ContinueShopping</button>
    </div>
    </main>
  );
};

export default Cart;

