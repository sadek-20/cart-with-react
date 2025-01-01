import React, { createContext, useContext, useReducer } from "react";
import { initialState } from "./shopReducer"; // Ensure this is correctly defined
import reducer from "./shopReducer"; // Import the reducer function

const shopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState); // Correct usage

    const addToCart = (product) => {
        const existingProduct = state.products.find(item => item.id === product.id);
        let updatedCart;

        if (existingProduct) {
            // If the product already exists, increase the quantity
            updatedCart = state.products.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            // If the product does not exist, add it to the cart with quantity 1
            updatedCart = [...state.products, { ...product, quantity: 1 }];
        }

        calculate(updatedCart);
        dispatch({ type: 'ADD TO CART', payload: { products: updatedCart } });
    };

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter(item => item.id !== product.id);
        calculate(updatedCart);
        dispatch({ type: 'REMOVE FROM CART', payload: { products: updatedCart } });
    };

    const updateQuantity = (id, quantity) => {
        const updatedCart = state.products.map(product =>
            product.id === id ? { ...product, quantity } : product
        );
        calculate(updatedCart);
        dispatch({ type: 'UPDATE QUANTITY', payload: { id, quantity } });
    };

    const calculate = (products) => {
        let total = 0;
        products.forEach(item => {
            total += item.price * item.quantity;
        });
        dispatch({ type: 'CALCULATE TOTALS', payload: { total } });
    };

    const values = {
        cart: state.products,
        total: state.total,
        addToCart,
        removeFromCart,
        updateQuantity,
    };

    return (
        <shopContext.Provider value={values}>
            {children}
        </shopContext.Provider>
    );
};

const useShop = () => {
    const context = useContext(shopContext);
    if (!context) throw new Error("useShop must be used within a ShopProvider");
    return context;
};

export default useShop;