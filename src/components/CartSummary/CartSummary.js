import React from 'react';
import './CartSummary.css';

const CartSummary = (props) => {
    const { strMeal } = (props.singleCart);
    return (
        <div className="summary-section">
            <h5>{strMeal}</h5>
        </div>
    );
};

export default CartSummary;