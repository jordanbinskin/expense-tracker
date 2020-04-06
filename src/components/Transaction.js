import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const { text, amount, id } = props.transaction;
    const sign = amount < 0 ? '-' : '+';
    return (
        <li className={amount < 0 ? 'minus' : 'plus'} onClick={() => deleteTransaction(id)}>
          {text}<span>{sign}${Math.abs(amount)}</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
