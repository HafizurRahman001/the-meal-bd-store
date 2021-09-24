import React from 'react';
import './Products.css'

const Products = (props) => {
    const { strMeal, strArea, strInstructions, strMealThumb, strCategory } = props.product
    return (
        <div className="col-md-4">
            <div className="card product-details" style={{ width: "18rem" }}>
                <img src={strMealThumb} className="card-img-top" alt="..." style={{ height: "200px", padding: '5px', borderRadius: '10px' }} />
                <div className="card-body product-body">
                    <h6 style={{ fontSize: "20px" }} className="card-title text-center">{strMeal}</h6>
                    <div className="d-flex justify-content-between">
                        <p>Category: {strCategory}</p>
                        <p>Area: {strArea}</p>
                    </div>
                    <p className="card-text">{strInstructions.slice(0, 90)}</p>
                    <button onClick={() => props.addToCartHandler(props.product)} className="btn btn-danger">Add Meal</button>
                </div>
            </div>
        </div >
    );
};

export default Products;