// useCardContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    total_items: 0,
    // Add more state properties as needed
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (book) => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
  };

  return <CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>;
};

const useCardContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCardContext };
