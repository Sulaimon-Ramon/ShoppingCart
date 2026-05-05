import { createContext, useContext, useEffect, useState } from "react"
import {initDB, incrementItem, clearCart, getCart, addToCart, decrementItem} from "../database/database"

const CartContext = createContext(null)

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_ITEM": {
//             const exists = state.find(i => i.id === action.payload.id)
//             if (exists) {
//                 return state.map(i =>
//                     i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
//                 )
//             }
//             return [...state, { ...action.payload, quantity: 1 }]
//         }
//         case "REMOVE_ITEM":
//             return state.filter(product => product.id !== action.payload.id)
//         case "INCREMENT":
//             return state.map(product =>
//                 (product.id === action.payload.id) && (product.quantity < product.stock)?
//                     { ...product, quantity: product.quantity + 1 }
//                     : product
//             )
//         case "DECREMENT":
//             return state.map(product =>
//                 product.id === action.payload.id
//                     ? { ...product, quantity: product.quantity - 1 }
//                     : product
//             ).filter(product => product.quantity > 0)
//         case "CLEAR":
//             return []
//         default:
//             return state
//     }
// }
const normalizeCart = (cartItems) =>
    cartItems.map(item => ({ ...item, price: Number(item.price) }));

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [dbReady, setDbReady] = useState(false);

    useEffect(() => {
        const boot = async () => {
            await initDB();
            setCart(normalizeCart(getCart())); 
            setDbReady(true)
        };
        boot();
    }, []);

    

const dispatch = ({ type, payload }) => {
    if (!dbReady) return;

    switch (type) {
        case "ADD_ITEM":
            setCart(normalizeCart(addToCart(payload)));
            break;
        case "INCREMENT":
            setCart(normalizeCart(incrementItem(payload.id)));
            break;
        case "DECREMENT":
            setCart(normalizeCart(decrementItem(payload.id)));
            break;
        case "CLEAR":
            setCart(clearCart());
            break;
    }
};

    const saved = (() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || []
        } catch (error) {
            console.error("Error parsing cart from localStorage:", error)
            return []
        }
    })()

    // const [mcart, dispatch] = useReducer(cartReducer, saved)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])
    
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{ cart, dispatch, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error("useCart must be used inside the CartProvider")
    return ctx
}