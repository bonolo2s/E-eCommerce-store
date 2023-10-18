import { FaInstagram, FaPinterest, FaTwitter, FaFacebook, FaRecycle} from 'react-icons/fa';
import { BiSolidLockAlt } from 'react-icons/bi';
import { FaTruck } from 'react-icons/fa';


const Footer = () => {
    return ( 
        <div className="footer">
            <div className="offerings">
                <p><BiSolidLockAlt/><span>Secure Payment</span></p>
                <p><FaTruck /><span>Express Shipping</span></p>
                <p><FaRecycle/><span>Free Return</span></p>
            </div>
            <hr />
            <div className="footer-row">
                <div className="footer-col">
                    <h3>ActiveWearCentral</h3>
                    <p>Join the ActiveWearCentral community and stay up-to-date with the
                     latest trends and gear. Follow us on social media and never miss a beat.
                    </p>
                    <div className="social-icons">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaPinterest /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>

                </div>
                <div className="footer-col">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="">Fitness apparel</a></li>
                        <li><a href="">Sports Equipment</a></li>
                        <li><a href="">Shoes</a></li>
                    </ul>

                </div>
                <div className="footer-col">
                    <h3>About</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                </div>
                <div className="footer-col">
                    <h3>Need Help?</h3>
                    <ul>
                        <li><a href="">Shop</a></li>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Checkout</a></li>
                    </ul>

                </div>

            </div>



        </div>
     );
}
 
export default Footer;