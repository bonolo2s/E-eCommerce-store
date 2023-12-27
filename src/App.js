import React, { useState } from 'react';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import homeBg from "./assets/home1.webp";
import gearUp from "./assets/gearUp.jpeg"
import missionImg from "./assets/mission.webp";
import julia from "./assets/julia.webp";
import luis from "./assets/luis.webp";
import maria from "./assets/maria.webp";
import Cta from "./components/CTA";
import shoeSale from "./assets/shoes-bg.jpg"
import fitnessSale from "./assets/fitness-bg.jpg"

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Equipment from "./components/Equipment";
import AllProducts from "./components/All";
import Shoes from "./components/Shoes";
import Contact from "./components/Contact";
import Sale from "./components/Sale";
import Fitness from "./components/fitness";
import Preview from "./components/Preview";
import OffCanvas from './components/OffCanvas';
import Checkout from './components/Checkout';
import Accordion from './components/Accordion';



function App() {
  
  //OffCanvas State
  const [isOffCanvasVisible, setOffCanvasVisible] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvasVisible(!isOffCanvasVisible);
  };


  // State for the selected products array
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = selectedProducts.find(p => p.id === product.id);
  
    if (existingProduct) {
      // If the product is already in the cart, increment its quantity
      existingProduct.quantity += 1;
      // Update the state with the new product list
      setSelectedProducts([...selectedProducts]);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };
  
  //Function to calculate the total price of an item
  const calculateTotalPrice = (product) => {
    if (!product) {
      return 0; // Return 0 if the product is not found
    }
    
    // Calculate and return the total price
    return product.quantity * product.price;
  };


  // Function to remove a product from the cart
  const removeFromCart = (productToRemove) => {
    setSelectedProducts(selectedProducts.filter(product => product.id !== productToRemove.id));
  };

  //Function to update the products
  const changeQuantity = (productId, quantity) => {
    setSelectedProducts(selectedProducts.map(product =>
      product.id === productId ? { ...product, quantity } : product
    ));
  };

  // Function to calculate the total price of the products in the cart
  const getTotalPrice = () => {
    return (selectedProducts.reduce((total, product) => total + (product.price * product.quantity * 100), 0) / 100).toFixed(2);
  };

  // Function to calculate the total VAT of the products in the cart
  const getTotalVAT = () => {
    const totalPrice = getTotalPrice();
    const vatRate = 0.14; // 14% VAT
    return (totalPrice * vatRate).toFixed(2);
  };

  // Function to calculate the grand total of the products in the cart
  const getGrandTotal = () => {
    const totalPrice = parseFloat(getTotalPrice());
    const totalVAT = parseFloat(getTotalVAT());

    // Calculate and return the grand total
    return (totalPrice + totalVAT).toFixed(2);
  };

  // Function to calculate the total number of products in the cart
  const getTotalProducts = () => {
    return selectedProducts.reduce((total, product) => total + product.quantity, 0);
  };

  //Function to clear the cart
  const clearCart = () => {
    setSelectedProducts([]);
  };

  //My checkout for in future when my knowledge broadens

  //const checkout = () => {
    // Here you might want to create an order summary,
    // save the order to a database, send a confirmation email, etc.

    // Clear the cart
    //clearCart();
 //};
  
  //On checkout for now.
  const checkout = () => {
    
    clearCart();

    // Redirect to the payment API
    //window.location.href = 'https://www.payment-api.com/checkout';
  };


  return (
    <Router>
    <div>
    <Navbar onCartClick={toggleOffCanvas} />
    <OffCanvas
      isVisible={isOffCanvasVisible}
      selectedProducts={selectedProducts}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      changeQuantity={changeQuantity}
      getTotalPrice={getTotalPrice}
      getTotalProducts={getTotalProducts}
      clearCart={clearCart}
      onCartClick={toggleOffCanvas}
      calculateTotalPrice = {calculateTotalPrice}
    />
      <Switch>
        <Route exact path='/'>
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
                <img className="" src={gearUp} alt="About-Img"/>
              </div>
              <div style={{display:'flex', flexDirection: 'column', justifyContent:'center',marginLeft:'50px'}}>
                <h1 style={{marginBottom:'20px',color:'blue', fontWeight:'bold'}}>ABOUT US</h1>
                <br />
                <h2 >Gear up with</h2>
                <h2 >ACtiveWearCentral</h2>
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
              <h3 style={{fontSize:'2rem',margin:'20px 0'}}>Why Choose ActiveWearCentral</h3>
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

          <div className="shop-now-section" style={{padding:'8%'}}>
            <div className="display" style={{
                backgroundImage: `url(${shoeSale})`,}}>
                  <div style={{margin:'auto',textAlign:'center'}} >
                    <p style={{fontSize:"30px", color:"aliceblue",fontWeight:'bold'}}>Shoes</p>
                    <Link to='Shoes'><button style={{padding:'15px 30px', fontSize:'15px', marginTop:'20px'}}>Shoes</button></Link>
                  </div>
            </div>
            <div className="display" style={{
                backgroundImage: `url(${fitnessSale})`}}>
                  <div style={{margin:'auto',textAlign:'center'}} >
                    <p style={{fontSize:"30px", color:"aliceblue",fontWeight:'bold'}}>Fitness apparel</p>
                    <Link to='Fitness'><button style={{padding:'15px 30px', fontSize:'15px', marginTop:'20px'}}>Fitness apparel</button></Link>
                  </div>
              </div>
            </div>
          


          <div style={{padding:'0 8%'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <p style={{fontSize:'25px',fontWeight:'500'}}>New Arrivals</p>
              <p ><Link to='Shoes' style={{fontSize:'20px', fontWeight:'bold'}}>VIEW ALL NEW ARRIVALS</Link></p>
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
          
        </Route>
        <Route exact path='/Sale' >
          <Sale/>
        </Route>
        <Route exact path='/Contact' >
          <Contact /> 
         </Route>
         <Route exact path='/Fitness' >
          <Fitness />  
         </Route>
         <Route exact path='/Shoes' >
          <Shoes />
         </Route>
         <Route exact path='/Equipment' >
          <Equipment />
         </Route>
         <Route exact path='/All' >
          <AllProducts />
         </Route>
         <Route exact path='/Preview/:id' >
          <Preview selectedProducts={selectedProducts} addToCart={addToCart} />
         </Route>
         <Route exact path='/Checkout' >
          <Checkout 
            selectedProducts={selectedProducts}
            getTotalPrice={getTotalPrice}
            calculateTotalPrice = {calculateTotalPrice}
            getTotalProducts={getTotalProducts}
            getTotalVAT = {getTotalVAT}
            getGrandTotal = {getGrandTotal}
          />
         </Route>

      </Switch>
    <Accordion/>
    </div>
  </Router>
  );
}

export default App;
