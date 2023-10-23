import React from 'react';
import { useLocation } from 'react-router-dom';

const Preview = () => {
    const location = useLocation();
    const product = location.state.product;

    // Check if product is not null
    if (product) {
        return (
            <div>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} style={{width:'300px', height:"300px"}} />
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <button>Add to Cart</button>
                {/* Add more product details here */}
            </div>
        );
    } else {
        // If no product is selected, don't render anything
        return null;
    }
}

export default Preview;
