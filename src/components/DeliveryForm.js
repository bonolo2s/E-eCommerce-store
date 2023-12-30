import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DeliveryForm = () => {

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
    );
}
 
export default DeliveryForm;