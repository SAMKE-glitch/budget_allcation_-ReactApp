import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setNewBudget(value);
        dispatch({ type: 'SET_BUDGET', payload: value });
    };

    return (
        <div className='alert alert-secondary'>
            <label>Budget {currency}</label>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                style={{ marginLeft: '5px' }}
            />
        </div>
    );
};

export default Budget;
