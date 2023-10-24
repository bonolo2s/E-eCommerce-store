import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Cta from './CTA';
import paymentMethod from '../assets/Credit-Card.webp'
import { products } from "../data/products";

const Preview = () => {
    const { id } = useParams(); // Get the product id from the URL
    const numericId = Number(id);

    const product = products.find(prod => prod.id === numericId); // Find the product with the matching id

    // Check if product is not null
    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <Navbar/>
            <div style={{backgroundColor:'aliceblue',padding:'3% 8%'}}>
                <div className='preview'>
                    <div className='preview-sec1'>
                        <img src={product.image} alt={product.name} style={{width:'100%', height:"auto"}} />
                    </div>
                    <div className='preview-sec2' >
                        <p style={{fontSize:'20px', color:'grey'}} >Category: {product.categories}</p>
                        <h1>{product.name}</h1>
                        <p style={{fontSize:'40px', color:'grey'}} >Price: ${product.price}</p>
                        <p style={{fontSize:'20px', color:'grey'}} >Description: {product.description}</p>
                        <div>
                            <input type="number" id='quantity' name="quantity" min="1" max="5" style={{width:'100px', height:'40px'}} />
                            <button className='add-to-cart-btn'>Add to cart</button>
                        </div>
                        <span style={{width:'100%',height:'1px', backgroundColor:"black",display:'inline-block',margin:'20px 0'}}></span>
                        <p>Category :{product.categories}</p>
                        <div style={{border:'1px solid black', padding:'5%',textAlign:'center',margin:'10px 0'}} >
                            <img src={paymentMethod} alt='supported payment methods' style={{maxWidth:'100%',height:'auto'}} />
                        </div>

                    </div>
                </div>
            </div>
            <Cta/>
            <Footer/>
        </div>
    );
}

export default Preview;
