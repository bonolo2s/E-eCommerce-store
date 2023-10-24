import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cta from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { products } from "../data/products";
import Preview from "./Preview"; // import your Preview component


const AllProducts = () => {
 
    return (
       
    <div>
        <Navbar/>
        <Cta/>
        <div style={{backgroundColor:'aliceblue',padding:'3% 8%'}}>
            <div style={{backgroundColor:'white', width:'100%',padding:'3%'}} >
                <h1 style={{fontSize:'5rem',color:'black'}}>All Products</h1>

                {/* Map over the products array and display each product */}
                <div className="Rendering-products">
                {products.map((product) => (
                        <div key={product.id} style={{margin: '10px'}}>
                            <Link style={{color: 'black'}} to={`/Preview/${product.id}`}>
                                <div style={{width:'300px'}}>
                                    <img src={product.image} alt={product.name} style={{width:'300px', height:"300px"}} />
                                    <p style={{fontSize:'20px', color:'grey'}}>{product.category}</p>
                                    <h2>{product.name}</h2>
                                    <p>Price: ${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>  
    );
}
 
export default AllProducts;