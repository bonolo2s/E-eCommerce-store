import React, { useState } from 'react';

import Cta from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FiSmartphone } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { FaInstagram, FaPinterest, FaTwitter, FaFacebook} from 'react-icons/fa';
import Accordion from './Accordion';

const Contact = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (  
        <div>
            <div className="page-title">
                <h1>Contact</h1>
            </div>
            <div className="Contact-sec-container">
                <div style={{padding:'5%'}} >
                    <div className="Contact-form-sec">

                        <div className="info-section">
                            <div>
                                <p style={{fontSize:'25px',color:'black',fontWeight:'bold'}} ><FiSmartphone /><span>
                                Products & order</span> </p>
                                <p style={{fontSize:'20px',color:'grey'}}>(+1) 123-456-7890 available 24/7</p>
                            </div>
                            <span style={{width:'100%',height:'1px', backgroundColor:"black",display:'inline-block'}}></span>
                            <div>
                                <p style={{fontSize:'25px',color:'black',fontWeight:'bold'}} ><FiSmartphone /><span>
                                Info & enquiries</span> </p>
                                <p style={{fontSize:'20px',color:'grey'}} >(+1) 123-456-7890 available 24/7</p>
                            </div>
                            <span style={{width:'100%',height:'1px', backgroundColor:"black",display:'inline-block'}}></span>
                            <div>
                                <p style={{fontSize:'25px',color:'black',fontWeight:'bold'}} ><MdLocationOn /><span>
                                Store locator</span> </p>
                                <p style={{fontSize:'20px',color:'grey'}} >Find our retail near you</p>
                            </div>
                            <span style={{width:'100%',height:'1px', backgroundColor:"black",display:'inline-block'}}></span>
                            <div className="social-icons" style={{margin:'10px 0'}}>
                                <p style={{fontSize:'20px',color:'grey',margin:'20px 0'}} >Stay in touch</p>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaPinterest /></a>
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                            </div>
                        </div>

                        <div className="input-section">
                            <div>
                                <label style={{fontSize:'20px',color:'grey'}} htmlFor="name">Name</label >
                                <input style={{display:'block',width:'100%',height:'40px',padding:'2px',fontSize:'15px'}} type="text" name="name" id="" />
                            </div>
                            <div>
                                <label style={{fontSize:'20px',color:'grey'}} htmlFor="">Email</label>
                                <input style={{display:'block',width:'100%' ,height:'40px',padding:'2px',fontSize:'15px'}}  type="text" name="" id="" />
                            </div>
                            <div>
                                <label style={{fontSize:'20px',color:'grey'}} htmlFor="">Comment or Message</label>
                                <textarea style={{display:'block',width:'100%',padding:'2px',fontSize:'15px'}}  name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button >Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="FAQ">
                <div style={{textAlign:"center"}} >
                    <h2>Frequently Asked Questions</h2>
                    <p>Got questions about ActiveWearCentral? We’ve got answers!</p>
                </div>
                <span style={{width:'100%',height:'1px', backgroundColor:"black",display:'inline-block',margin:'20px 0'}}></span>

                <Accordion/>
                
            </div>
            <Cta/>
            <Footer/>
        </div>
    );
}
 
export default Contact;