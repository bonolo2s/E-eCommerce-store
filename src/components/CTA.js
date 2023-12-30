import homeImg from "../assets/unleash-section.jpg"
import { Link } from 'react-router-dom';

const Cta = () => {
    return (  
        <div className="CTA" style={{
            backgroundImage: `url(${homeImg})`,
        }}>
        <div className="CTA-home">
        <h1>Unleash Your Inner Athlete</h1>
            <p >Our mission at ActiveWearCentral is to inspire you to move and unleash your inner athlete. We believe that everyone has the power to achieve</p>
            <p >their fitness goals, and we’re here to help you along the way. Shop our collection now and take the first step towards a healthier, more active</p>
            <p >lifestyle.</p>
            <Link to = '/Shoes' ><button className="CTA-btn">Shoes</button></Link>
            <Link to = '/fitness' ><button className="CTA-btn">Fitness apparel</button></Link>
            
            
        </div>

        </div>
    );
}
export default Cta;