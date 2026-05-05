import { useState } from "react";
import './Productcard.css'
import {useCart} from "../context/Cartcontext"

export const Productcard = ({ products }) => {
    const [added, setAdded] = useState(false);
    const {dispatch, cart} = useCart()
    const exists = cart.find(i => i.id === products.id);
    const check = "\u2713"


    const handleAdd = () => {
      dispatch({type : "ADD_ITEM", payload:products})
      setAdded(true)
      setTimeout(() => setAdded(false),1500)
    }


  return (
    <div className="card">
      {products.badge && <span className="card__badge">{products.badge}</span>}
      <div className="card__visual">
        <span className="card-emoji">{products.emoji}</span>
      </div>
      <div className="card__info">
        <p className="card__category">{products.category}</p>
        <h3 className="card__name">{products.name}</h3>
        <p className="card__description">{products.description}</p>
        <div className="card__rating-row">
            <span className="card__stars">
                {'\u2B50'.repeat(Math.round(products.rating))}
                {'\u2606'.repeat(5-Math.round(products.rating))}
            </span>
            <span className="card__reviews">{products.review}</span>
        </div>
    <div className="card__footer">
        <span className="card__price"> $ {products.price.toFixed(2)}</span>
        <button className={`card__add-btn ${added ? 'card__add-btn': "" }`}
        onClick={handleAdd}>
          {added ? `${check} Added` : exists ? ` In Cart (${exists.quantity})` : `Add to Cart`}
        </button>
    </div>
      </div>
    </div>
  );
};
