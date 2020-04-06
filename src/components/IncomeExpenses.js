import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const items = transactions
    .reduce((acc, curr) => {
      if (curr.amount >= 0) return { ...acc, plus: acc.plus + curr.amount }
      else return { ...acc, minus: Math.abs(acc.minus - curr.amount) }
    }, { plus: 0, minus: 0 });
    
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${items.plus}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${items.minus}</p>
        </div>
      </div>

    </div>
  )
}

export default IncomeExpenses
