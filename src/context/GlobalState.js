import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
  transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
  const ADD_TRANSACTION = 'ADD_TRANSACTION';

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      id
    });
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: ADD_TRANSACTION,
      transaction
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}