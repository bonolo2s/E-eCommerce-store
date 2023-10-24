import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cta from './CTA';

const Preview = () => {
    const location = useLocation();
    const product = location.state.product;

    // Check if product is not null
    if (product) {
        return (
            <div>
                <Navbar/>
                <div style={{backgroundColor:'aliceblue',padding:'3% 8%'}}>
                    <div style={{backgroundColor:'white', width:'100%',padding:'3%'}} >
                        <div>
                            <div style={{display:'flex'}}>
                                <div style={{padding:'3%',}} >
                                    <img src={product.image} alt={product.name} style={{width:'100%', height:"auto"}} />
                                </div>
                                <div style={{padding:'3%',}}>
                                    <p style={{fontSize:'18px', fontWeight:'600',color:'grey'}}>Category: {product.categories}</p>
                                    <h1 style={{fontSize:'2.5rem',margin:'20px 0'}}>{product.name}</h1>
                                    <p>Price: ${product.price}</p>
                                    <p style={{fontSize:'18px',color:'grey'}}>{product.description}</p>
                                    <div style={{margin:'20px 0'}}>
                                        <input type="text" />
                                        <button style={{padding:'15px 30px',color:'aliceblue', backgroundColor:'black', border:'none'}}>Add to cart</button>
                                    </div>
                                    <hr />
                                    <span style={{width:'250px',height:'2px',backgroundColor:'black'}}></span>
                                    
                                </div>
                            </div>
                            {/* Add more product details here */}
                        </div>
                    </div>
                </div>
                <Cta/>
                <Footer/>
            </div>
        );
    } else {
        // If no product is selected, don't render anything
        return null;
    }
}

export default Preview;
