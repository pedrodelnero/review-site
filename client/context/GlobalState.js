import React, { useReducer, createContext } from 'react';
import ProductReducer from '../reducers/ProductReducer';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, {});

  // Action
  const addProduct = product => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product
    })
  }

  const deleteProduct = id => {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: id
    })
  }

  const addReview = review => {
    dispatch({
      type: 'ADD_REVIEW',
      payload: review
    })
  }

  const deleteReview = (productId, reviewId) => {
    dispatch({
      type: 'DELETE_REVIEW',
      payload: {
        productId, reviewId
      }
    })
  }


  return (
    <GlobalContext.Provider value={{
      products: state.products,
      addProduct,
      deleteProduct,
      addReview,
      deleteReview
    }}>
      {children}
    </GlobalContext.Provider>
  )
};
