import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Cta from './CTA';

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

    const totalPrice = getTotalPrice();
    const totalProducts = getTotalProducts();
    const totalVat = getTotalVAT();
    const grandTotal = getGrandTotal();

    const [streetAddress, setStreetAddress] = useState('');
    const [suburb, setSuburb] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
    // Add your validation logic here
    if (!streetAddress || !suburb || !city || !province || !postalCode) {
        alert('Please fill in all fields.');
        } else {
        alert('Form submitted successfully!');
        }
        };

    return ( 
        <div>
            <div className='shipping-container'>
                <div className="shipping-container-1" >
                    <p style={{fontSize:'3rem'}}>Could you please share your preferred method for receiving your order?</p>
                    <div className="delivery-method">
                        <button style={{padding:'30px 40px', borderRadius:'50px', border:'1px solid black', margin:'5px'}}><FaShippingFast /> Delivery to my adress</button>
                        <button style={{padding:'30px 40px', borderRadius:'50px', border:'1px solid black', margin:'5px'}}>Self collect at Pick Up point</button>
                    </div>
                    <p style={{backgroundColor:'aliceblue',padding:'10px', margin:'10px 0', borderRadius:'10px', width:'95%'}}><FaExclamationTriangle style={{marginRight:'10px'}} /><span>Kindly note that we are unable to deliver orders to a P.O. Box or an incomplete address</span></p>
                
                    <div className="shipping-details">
                        <div className="street-address">
                            <p style={{fontWeight:'bold'}}>Adventure awaits your package! 📦</p>
                            <p style={{fontWeight:'bold'}}> Could you please share the destination where this exciting journey will end?😊</p>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="streetAddress">
                                    <input type="text" id="streetAddress" required placeholder='Street Address' value={streetAddress} onChange={e => setStreetAddress(e.target.value)} style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}}/>
                                </label>
                                <label htmlFor="suburb">
                                    <input type="text" id="suburb" required placeholder='Suburb' value={suburb} onChange={e => setSuburb(e.target.value)} style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}} />
                                </label>
                                <label htmlFor="city">
                                    <input type="text" id="city" required placeholder='City / Town' value={city} onChange={e => setCity(e.target.value)}  style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}}/>
                                </label>
                                <label htmlFor="province">
                                    <input type="text" id="province" required placeholder='Province' value={province} onChange={e => setProvince(e.target.value)} style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}}/>
                                </label>
                                <label htmlFor="postalCode">
                                    <input type="text" id="postalCode" required placeholder='Postal Code' value={postalCode} onChange={e => setPostalCode(e.target.value)} style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}}/>
                                </label>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="contact-Info">
                            <p style={{fontWeight:'bold'}}>Could you please provide your contact information?</p>
                            <p style={{fontWeight:'bold'}}> We promise to handle your details with utmost care.😊</p>

                            <form>
                                <label htmlFor="firstName" style={{display:'block'}}>
                                    <input id="firstName" type="text" required placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}} />
                                </label>

                                <label htmlFor="lastName" style={{display:'block'}}>
                                    <input id="lastName" type="text" required placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}} />
                                </label>

                                <label htmlFor="mobileNumber" style={{display:'block'}}>
                                    <input id="mobileNumber" type="tel" required placeholder='Mobile Number' value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}} />
                                </label>

                                <label htmlFor="email" style={{display:'block'}}>
                                    <input id="email" type="email" required placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} style={{height:'30px', width:'95%', border:'1px solid grey', borderRadius:'10px', margin:'10px 0',padding:'5px'}}/>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="summary-container">

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
                            <Link to='/LoginPage'><button><MdVerified /> Continue to secure payment</button></Link>
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