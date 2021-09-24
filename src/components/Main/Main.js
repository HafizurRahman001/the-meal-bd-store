import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, []);

    const [cart, setCart] = useState([]);

    const addToCartHandler = product => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className='row mt-4'>
                <div className="col-md-9">
                    <div className="row g-3">
                        {
                            products.map(product => <Products
                                product={product}
                                key={product.idMeal}
                                addToCartHandler={addToCartHandler}
                            />)
                        }
                    </div>

                </div>
                <div className="col-md-3">
                    <Cart
                        cart={cart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;