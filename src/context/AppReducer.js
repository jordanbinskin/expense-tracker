const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const ADD_TRANSACTION = 'ADD_TRANSACTION';

const filterTransaction = (transactions, deleteId) => {
  return transactions
    .filter(({ id }) => id !== deleteId)
}
export default (state, action) => {
  switch(action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: filterTransaction(state.transactions, action.id)
      };
    
    case ADD_TRANSACTION: 
      return {
        ...state,
        transactions: [
          ...state.transactions,
          action.transaction
        ]
      }
    default:
      return state;
  }
} 