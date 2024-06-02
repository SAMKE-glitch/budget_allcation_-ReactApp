import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../Currency.css'; // Import the CSS file

const Location = () => {
    const { dispatch } = useContext(AppContext);

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    return (
        <div className='alert alert-success currency-selector'>
            Currency
            <select name="Location" id="Location" onChange={event => changeLocation(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Location;
