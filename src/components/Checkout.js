import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import { MdVerified } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import Cta from './CTA';

const Checkout = ({selectedProducts}) => {
    return ( 
        <div  >
            <div style={{padding:'3% 8%'}} >
            <div className="Checkout-container">
                <div className="array-container">
                    <p>served for my products</p>
                </div>
                <div className="summary-container">
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <br />
                        <p>Subtotal :</p>
                        <br />
                        <p>VAT(Included) :</p>
                        <br />
                        <span style={{width:'100%', height:'1px', display:'inline-block', backgroundColor:"grey"}} ></span>
                        <br />
                        <p style={{fontSize:'1.2rem',fontWeight:'bold'}} >Grand Total :</p>
                        <br />
                        <button><MdVerified /> Proceed to Secure Checkout</button>
                    </div>
                    <div className="coupon-container">
                        <input type="text" placeholder='Apply a discount code' />
                        <button>Add code</button>
                    </div>
                    <div className="D-terms-container">
                        <FaShippingFast />

                    </div>
                    <div className="Returns-container">

                    </div>
                </div>
            </div>

            </div>
            <Footer/>
        </div>
    );
}
 
export default Checkout;