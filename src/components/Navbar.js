import { IoIosCart } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Link } from 'react-router-dom'

const Navbar = () => {
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
                        <li><Link to='Sale' >Sale</Link></li>
                        <li className='dropdown' ><Link to='All'>Shop</Link>
                        <ul className='dropdown-child' >
                            <li><Link to='Fitness'>•Fitness apparel</Link></li>
                            <li><Link to='Shoes'>•Shoes</Link></li>
                            <li><Link to='Equipment'>•Sports equipment</Link></li>
                            <li><Link to='All'>•View all Products</Link></li>
                        </ul>
                        </li>
                        <li><Link to='Contact'>Contact</Link></li>
                    </ul>
                    < Link to='#'><IoIosCart /></Link>
                    <Link to='#' className="menu-collapse-icon"><GiHamburgerMenu /></Link>
                </div>
            </div>
            <div className='hidden-navbar-links' style={{width:'100%'}}>
                <br />
                <ul>
                    <li><Link to='Sale'>Sale</Link></li>
                    <li><Link to='Sale' className='hidden-dropdown'>Shop</Link>
                        <ul className='hidden-dropdown-child' >
                            <li><Link to='Fitness'>•Fitness apparel</Link></li>
                            <li><Link to='Shoes'>•Shoes</Link></li>
                            <li><Link to='Equipment'>•Sports equipment</Link></li>
                            <li><Link to='All'>• View all Products</Link></li>
                        </ul>
                    </li>
                    <li><Link to='Contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;