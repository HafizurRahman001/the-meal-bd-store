import React from 'react';
import CartSummary from '../CartSummary/CartSummary';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className="cart-section">
            <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}>Total Added Products: <i className="fas fa-cart-arrow-down"></i><sup style={{ fontSize: '25px', fontWeight: 'bold' }}>{cart.length}</sup> </h4><hr style={{ color: 'black', marginLeft: '-25px', marginRight: '-10px', marginTop: '2px' }} />

            {
                cart.map(singleCart => <CartSummary
                    singleCart={singleCart}
                ></CartSummary>)
            }

        </div>
    );
};

export default Cart;