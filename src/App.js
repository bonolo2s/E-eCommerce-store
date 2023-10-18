import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import homeBg from "./assets/home1.webp";
import aboutImg from "./assets/about-us.jpg";
import missionImg from "./assets/mission.webp";
import julia from "./assets/julia.webp";
import luis from "./assets/luis.webp";
import maria from "./assets/maria.webp";
import Cta from "./components/CTA";
import shoeSale from "./assets/shoes-bg.jpg"
import fitnessSale from "./assets/fitness-bg.jpg"

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';





function App() {
  return (
    <div>
      <Navbar/>
      <div id="home" style={{
        backgroundImage: `url(${homeBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100vh',
        padding: '0 8%',
        display:'flex'
        }}>
          <div style={{margin:'auto 0'}}>
            <h1>Activewear for</h1>
            <h1>the Game</h1>
            <h1>changers</h1>
            <p></p>
            <button className="home-section-btn">Shoes</button>
            <button className="home-section-btn">Fitness apparel</button>
          </div>
      </div>
      
      <div style={{backgroundColor:'aliceblue',padding:'3% 8%'}}>
        <div className="about-section">
          <div>
            <img src={aboutImg} alt="About-Img" />
          </div>
          <div style={{display:'flex', flexDirection: 'column', justifyContent:'center',marginLeft:'50px'}}>
            <h1 style={{marginBottom:'20px',color:'blue', fontWeight:'bold'}}>ABOUT US</h1>
            <br />
            <h2 style={{fontSize:'2.5rem'}}>Gear up with</h2>
            <h2 style={{fontSize:'2.5rem'}}>ACtiveWearCentral</h2>
            <br />
            <p style={{marginTop: '20px', lineHeight:'1.5',fontSize:'20px',color:'grey'}}>Welcome to ActiveWearCentral, the ultimate destination for sportswear enthusiasts.
              We are passionate about movement and strive to bring you the latest and greatest 
              athletic apparel. Our collection features high-quality gear that helps you stay
              ahead of the game and unleash your inner athlete.
            </p>
            <br />
            <a href="#"style={{color:'black',textDecoration:'none',fontWeight:'bold'}}>Read More</a>
          </div>
        </div>

        <div style={{textAlign:'center',margin:'50px 0'}}>
          <h3 style={{fontSize:'2.5rem',margin:'20px 0'}}>Why Choose ActiveWearCentral</h3>
          <p style={{color:'grey',fontSize:'20px'}}>At ActiveWearCentral, we believe in quality, style, and affordability.
            Our collection features top-of-the-line sportswear that meets your unique 
            needs and preferences. Whether you’re a seasoned athlete or a beginner, 
            our gear is designed to help you perform at your best and look great doing it.
          </p>
        </div>
    
        <div style={{marginTop:'40px'}}className="authority">
          <div className="authority-col">
              <p style={{color:'blue',fontSize:'25px', fontWeight:'bold'}}>01.</p>
              <p style={{fontSize:'1.5rem',fontWeight:'bold'}}>Top-Quality Products</p>
              <p style={{color:'grey',fontSize:'18px',marginBottom:'10px'}}>We offer the best athletic gear on the market, with a focus on quality, durability, 
                and functionality. Our products are designed to help you perform 
                at your best and keep you comfortable throughout your workout.
              </p>
              <hr />
          </div>
          <div className="authority-col">
              <p style={{color:'blue',fontSize:'25px', fontWeight:'bold'}}>02.</p>
              <p style={{fontSize:'1.5rem',fontWeight:'bold'}}>Stylish Designs</p>
              <p style={{color:'grey',fontSize:'18px',marginBottom:'10px'}}>
                Our collection features a wide range of stylish and trendy athletic 
                apparel that keeps you looking great, no matter the activity. With a variety of colors, styles, and designs, 
                you’re sure to find the perfect look to match your personal style.
              </p>
              <hr />
          </div>
        </div>
        <div style={{marginTop:'40px'}}className="authority">
          <div className="authority-col">
              <p style={{color:'blue',fontSize:'25px', fontWeight:'bold'}}>03.</p>
              <p style={{fontSize:'1.5rem',fontWeight:'bold'}}>Affordable Prices</p>
              <p style={{color:'grey',fontSize:'18px',marginBottom:'10px'}}>
                We believe that everyone should have access to high-quality athletic gear,
                which is why we offer affordable prices without compromising on quality. 
                Get the best deals on the hottest athletic apparel at ActiveWearCentral.
              </p>
          </div>
          <div className="authority-col">
              <p style={{color:'blue',fontSize:'25px', fontWeight:'bold'}}>04.</p>
              <p style={{fontSize:'1.5rem',fontWeight:'bold'}}>Easy Shopping Experience</p>
              <p style={{color:'grey',fontSize:'18px',marginBottom:'10px'}}>
                We’ve made shopping for sportswear easy and stress-free. 
                Our user-friendly website allows you to easily navigate through our collection and find the perfect gear for your needs.
                Plus, our customer service team is always here to help you with any questions or concerns.
              </p>
          </div>
        </div>
      </div>

      <div className="shop-now" style={{padding:'8%'}}>
        <div >
          <div style={{
            display:'flex',
            justifyContent:'center',
            backgroundImage: `url(${shoeSale})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width:'75vh',
            height:'35rem'}}>
              <div style={{margin:'auto',textAlign:'center'}} >
                <p style={{fontSize:"30px", color:"aliceblue",fontWeight:'bold'}}>Shoes</p>
                <button style={{padding:'15px 30px', fontSize:'15px', marginTop:'20px'}}>Shoes</button>
              </div>
          </div>
        </div>

        <div>
          <div style={{
            display:'flex',
            justifyContent:'center',
            backgroundImage: `url(${fitnessSale})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width:'75vh',
            height:'35rem'}}>
              <div style={{margin:'auto',textAlign:'center'}} >
                <p style={{fontSize:"30px", color:"aliceblue",fontWeight:'bold'}}>Fitness apparel</p>
                <button style={{padding:'15px 30px', fontSize:'15px', marginTop:'20px'}}>Fitness apparel</button>
              </div>
          </div>
        </div>
      </div>

      <div style={{padding:'0 8%'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <p style={{fontSize:'25px',fontWeight:'500'}}>New Arrivals</p>
          <p ><a href="#" style={{fontSize:'20px', fontWeight:'bold'}}>VIEW ALL NEW ARRIVALS</a></p>
        </div>
        <div>
          <p>Images coming soon</p>
        </div>
      </div>

      <div style={{padding:'1% 5%',margin:'1% 3%',backgroundColor:'aliceblue'}} >
        <div style={{margin:'10px'}} className="mission-section">
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginRight:'10%'}}>
          <p style={{fontSize:'18px',color:'grey'}}>At ActiveWearCentral, we believe in sustainability and taking care of our planet.
            We are committed to reducing our environmental impact by using eco-friendly materials and
            implementing sustainable practices throughout our operations. Join us in our mission to
            protect our planet by choosing ActiveWearCentral.
          </p>

          </div>
          <img src={missionImg} alt="Our-mission" width={300} style={{borderRadius:'50%'}}/>
        </div>
      </div>

      <div style={{textAlign:'center',margin:'50px 0'}}>
        <p style={{fontSize:'3rem',fontWeight:'600'}}>Our Customers speak for us</p>
      </div>

      <div className="card-container">
        <div className="card">
          <div>
            <p style={{lineHeight:'1.5',fontStyle:'italic', color:'grey'}}>"
              Im in love with my new Air Jordan
              Retro 7 sneakers from
              ACtiveWearCentral.They're are not only
              stylidh but also super comfortable and durable."
            </p>
          </div>
          <div style={{margin:'20px 0'}}>
            <p style={{color:'green',fontWeight:'bold'}}><span><img src={julia} alt="" style={{borderRadius:'50%'}} /></span> JULIA KEYS</p>
          </div>
        </div>
        
        <div className="card">
          <div>
            <p style={{lineHeight:'1.5',fontStyle:'italic', color:'grey'}}>"
              The Powerpuff boxing gloves from ActiveWearCentral
              are a game-changer. They fit perfectly and provide great 
              support for my boxing workouts"
            </p>
          </div>
          <div style={{margin:'20px 0'}}>
            <p style={{color:'green',fontWeight:'bold'}}><span><img src={luis} alt="" style={{borderRadius:'50%'}} /></span> LUIS ADRIAN</p>
          </div>
        </div>
        
        <div className="card">
          <div>
            <p style={{lineHeight:'1.5',fontStyle:'italic', color:'grey'}}>"
              i absolutely love the the flex Fit yoga
              pants from ActiveWearCentral. They're so comfortable and
              stylish,and they make me feel great during my yoga practice"
            </p>
          </div>
          <div style={{margin:'20px 0'}}>
            <p style={{color:'green',fontWeight:'bold'}}><span><img src={maria} alt="" style={{borderRadius:'50%'}} /></span> MARIA ANNE</p>
          </div>
        </div>
      </div>

      <div style={{textAlign:'center', margin:'25px 0'}} >
        <p style={{color:'black', fontSize:'25px',fontWeight:'bold'}} >4.8 average rating from 1814 reviews</p>
      </div>

      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
