import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Cta from './CTA';
import SelfCollectionForm from './SelfCollectionForm';
import DeliveryForm from './DeliveryForm';

import { FaShippingFast } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { IoIosReturnLeft} from 'react-icons/io';

const ShippingDetails = ({
    selectedProducts,
    getTotalPrice,
    getTotalProducts,
    calculateTotalPrice,
    getTotalVAT,
    getGrandTotal
}) => {

    const [isDelivery, setIsDelivery] = useState(true);

    const totalPrice = getTotalPrice();
    const totalProducts = getTotalProducts();
    const totalVat = getTotalVAT();
    const grandTotal = getGrandTotal();

    const handleDeliveryClick = () => {
        setIsDelivery(true);
    };

    const handleSelfCollectionClick = () => {
        setIsDelivery(false);
    };
    

    return ( 
        <div>
            <div className='shipping-container'>
                <div className="shipping-container-1" >
                    <p style={{fontSize:'3rem'}}>Could you please share your preferred method for receiving your order?</p>
                    <div className="delivery-method">
                        <button onClick={handleDeliveryClick} style={{padding:'30px 40px', borderRadius:'50px', border:'2px solid black', margin:'5px',cursor:'pointer'}}><FaShippingFast /> Delivery to my adress</button>
                        <button onClick={handleSelfCollectionClick} style={{padding:'30px 40px', borderRadius:'50px', border:'1px solid black', margin:'5px',cursor:'pointer'}}>Self collect at Pick Up point</button>
                    </div>
                    <p style={{backgroundColor:'aliceblue',padding:'10px', margin:'10px 0', borderRadius:'10px', width:'95%'}}><FaExclamationTriangle style={{marginRight:'10px'}} /><span>Kindly note that we are unable to deliver orders to a P.O. Box or an incomplete address</span></p>
                    {isDelivery ? <DeliveryForm/> : <SelfCollectionForm/>}
                

                </div>

                <div className="summary-container">

                    <div className="summary-container">
                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <br />
                            <p>Subtotal : $ {totalPrice}</p>
                            <br />
                            <p>VAT(Included) :$ {totalVat}</p>
                            <br />
                            <span style={{width:'100%', height:'1px', display:'inline-block', backgroundColor:"grey"}} ></span>
                            <br />
                            <div style={{display:'flex', justifyContent:"space-between"}}>
                                <p style={{fontSize:'1.2rem',fontWeight:'bold'}} >Grand Total :{totalProducts} item(s)</p>
                                <p style={{color:'green', fontSize:'20px',fontWeight:'bold'}}>$ {grandTotal}</p>
                            </div>
                            <br />
                            <Link to='/Billing'><button><MdVerified /> Continue to secure payment</button></Link>
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
        </div>
     );
}
 
export default ShippingDetails;