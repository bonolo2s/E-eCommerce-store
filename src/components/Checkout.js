import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import { MdVerified } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import { IoIosReturnLeft} from 'react-icons/io';
import Cta from './CTA';

const Checkout = ({
    selectedProducts,
    getTotalPrice,
    getTotalProducts,
    calculateTotalPrice,
    getTotalVAT,
    getGrandTotal

    }) => {

        const totalPrice = getTotalPrice();
        const totalProducts = getTotalProducts();
        const totalVat = getTotalVAT();
        const grandTotal = getGrandTotal();

    return ( 
        <div  >
            <div style={{padding:'3% 8%'}} >
            <div className="Checkout-container">
                <div className="array-container">
                    <p style={{fontSize:'18px', fontWeight:'bold'}}>Shipped from ActiveWearCentarl Warehouse</p>
                    {selectedProducts.map((product, index) => (
                            <div key={index}>
                                <div className='Cart-Summary-Container'>
                                    <div style={{display:'flex',alignItems:"center",flex:'3'}}>
                                        <img src={product.image} alt={product.name} style={{width:'20%'}}/>
                                        <h2 style={{marginLeft:'10px'}}>{product.name}</h2>
                                    </div>
                                    <div style={{display:'flex', justifyContent:'space-between', alignItems:"center",flex:'1'}} >
                                        <p style={{marginRight:'10px'}}>Quantity: {product.quantity}</p>
                                        <p style={{fontWeight:'bold'}}>Total: ${calculateTotalPrice(product).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <p>Continue shopping link</p>
                </div>
                <div className="summary-container">
                    <div className="order-summary">
                        <h2>Order Summary</h2>
                        <br />
                        <p>Subtotal :{totalPrice}</p>
                        <br />
                        <p>VAT(Included) :{totalVat}</p>
                        <br />
                        <span style={{width:'100%', height:'1px', display:'inline-block', backgroundColor:"grey"}} ></span>
                        <br />
                        <div style={{display:'flex', justifyContent:"space-between"}}>
                            <p style={{fontSize:'1.2rem',fontWeight:'bold'}} >Grand Total :{totalProducts} item(s)</p>
                            <p style={{color:'green', fontSize:'20px',fontWeight:'bold'}}>{grandTotal}</p>
                        </div>
                        <br />
                        <Link ><button><MdVerified /> Proceed to Secure Checkout</button></Link>
                    </div>
                    <div className="coupon-container">
                        <input type="text" placeholder='Apply a discount code' />
                        <button>Add code</button>
                    </div>
                    <div className="D-terms-container">
                        <FaShippingFast />
                        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                            <p style={{fontWeight:'bold'}} >Free* Courier Delivery</p>
                            <a href="#"><button>Learn More</button></a>                        
                        </div>
                        <br />
                        <p>
                        Free courier delivery to your home or workplace if you order over $30.
                        </p>
                    </div>
                    <div className="Returns-container">
                        <IoIosReturnLeft />
                        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                                <p style={{fontWeight:'bold'}} >Free* Courier Delivery</p>
                                <a href="#"><button style={{padding:'10px 15px',borderRadius:'50px',backgroundColor:''}} >Learn More</button></a>                        
                        </div>
                        <br />
                        <p>
                            Free courier delivery to your home or workplace if you order over $30.
                        </p>
                    </div>
                </div>
            </div>

            </div>
            <Footer/>
        </div>
    );
}
 
export default Checkout;