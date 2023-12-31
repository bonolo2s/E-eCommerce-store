import React, { useState } from 'react';
import { Link } from 'react-router-dom'


import { IoIosCart } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = ({
    onCartClick,
    getTotalProducts
}) => {

    const [menuOpen, setMenuOpen] = useState(false); 
    const totalProducts = getTotalProducts();

    return ( 
        <div className="navbar"> 
            <div className="navbar-container">
                <div className="logo">
                    <Link to='/' >
                        <h1>ACTIVE WEAR CENTRAL</h1>
                    </Link>
                </div>
                <div className='navbar-links'>
                    <ul>
                        <li><Link to='/Sale' >Sale</Link></li>
                        <li className='dropdown' ><Link to='/All'>Shop</Link>
                        <ul className='dropdown-child' >
                            <li><Link to='/Fitness'>•Fitness apparel</Link></li>
                            <li><Link to='/Shoes'>•Shoes</Link></li>
                            <li><Link to='/Equipment'>•Sports equipment</Link></li>
                            <li><Link to='/All'>•View all Products</Link></li>
                        </ul>
                        </li>
                        <li><Link to='/Contact'>Contact</Link></li>
                    </ul>
                    <div style={{position:'relative'}}>
                        <IoIosCart style={{fontSize:'25px'}} onClick={onCartClick} />
                        <span style={{backgroundColor:"green",borderRadius:'50px',padding:'5px',position:'absolute', top:'15px',left:'15px'}} >{totalProducts}</span>
                    </div>
                    <GiHamburgerMenu className='menu-collapse-icon'  onClick={() =>
                    setMenuOpen(!menuOpen)} />
                </div>
            </div>
            <div className='Hidden-navbar-links' style={{width:'100%'}}>
                <br />
                <ul className={menuOpen ? "open show" : "open"} >
                    <li><Link to='/Sale'>Sale</Link></li>
                    <li><Link to='/All' className='hidden-dropdown'>Shop</Link>
                        <ul className='hidden-dropdown-child' >
                            <li><Link to='/Fitness'>•Fitness apparel</Link></li>
                            <li><Link to='/Shoes'>•Shoes</Link></li>
                            <li><Link to='/Equipment'>•Sports equipment</Link></li>
                            <li><Link to='/All'>• View all Products</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;