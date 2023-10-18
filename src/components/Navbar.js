import { IoIosCart } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <a href="#">
                    <h1>ACTIVE WEAR CENTRAL</h1>
                </a>
            </div>
            <div className='navbar-links'>
                <ul>
                    <li><a href="">Sale</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <a href="#"><IoIosCart /></a>
                <a href="#" className="menu-collapse-icon"><GiHamburgerMenu /></a>
            </div>
        </div>
     );
}
 
export default Navbar;