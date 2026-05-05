import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.find((i) => i.id === action.payload.id);
      if (exists) {
        return state.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((product) => product.id !== action.payload);
    case "INCREMENT":
      return state.map((product) =>
        product.id === action.payload.id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product,
      );
    case "DECREMENT":
      return state
        .map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1}
            : product,
        )
        .filter((product) => product.quantity > 0);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const saved = (() => {
    try {
      return JSON.parse(localStorage.getItem("shoppingcart")) || [];
    } catch (error) {
      console.error("Error parsing cart from localstorage:", error);
      return [];
    }
  })();

  const [cart, dispatch] = useReducer(cartReducer, saved);

  useEffect(() => {
    localStorage.setItem("shoppingcart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (Sum, item) => Sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, totalItems, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("UseCart must be in the CartProvider");
  return ctx;
};
