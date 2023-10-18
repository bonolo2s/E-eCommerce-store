import homeImg from "../assets/unleash-section.jpg"

const Cta = () => {
    return (  
        <div style={{
            backgroundImage: `url(${homeImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            height: '50vh',
            padding: '0 8%',
            display:'flex',
            justifyContent:'center'
        }}>
        <div className="CTA-home">
        <h1>Unleash Your Inner Athlete</h1>
            <p >Our mission at ActiveWearCentral is to inspire you to move and unleash your inner athlete. We believe that everyone has the power to achieve</p>
            <p >their fitness goals, and we’re here to help you along the way. Shop our collection now and take the first step towards a healthier, more active</p>
            <p >lifestyle.</p>
            <button className="CTA-btn">Shoes</button>
            <button className="CTA-btn">Fitness apparel</button>
        </div>

        </div>
    );
}
export default Cta;