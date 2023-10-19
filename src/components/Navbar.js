import { IoIosCart } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="#">
                        <h1>ACTIVE WEAR CENTRAL</h1>
                    </a>
                </div>
                <div className='navbar-links'>
                    <ul>
                        <li><a href="">Sale</a></li>
                        <li className='dropdown' ><a href="">Shop</a>
                        <ul className='dropdown-child' >
                            <li><a href="">•Fitness apparel</a></li>
                            <li><a href="">•Shoes</a></li>
                            <li><a href="">•Sports equipment</a></li>
                            <li><a href="">•all</a></li>
                        </ul>
                        </li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    <a href="#"><IoIosCart /></a>
                    <a href="#" className="menu-collapse-icon"><GiHamburgerMenu /></a>
                </div>
            </div>
            <div className='hidden-navbar-links' style={{width:'100%'}}>
                <br />
                <ul>
                    <li><a href="">Sale</a></li>
                    <li><a href="" className='hidden-dropdown'>Shop</a>
                        <ul className='hidden-dropdown-child' >
                            <li><a href="">•Fitness apparel</a></li>
                            <li><a href="">•Shoes</a></li>
                            <li><a href="">•Sports equipment</a></li>
                            <li><a href="">•all</a></li>
                        </ul>
                    </li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;