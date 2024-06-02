import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    useEffect(() => {
        if (budget < totalExpenses) {
            window.alert("You cannot reduce the budget value lower than the spending");
        }
    }, [budget, totalExpenses]);

    return (
        <div className={`alert ${totalExpenses > budget ? 'alert-danger' : 'alert-success'}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
