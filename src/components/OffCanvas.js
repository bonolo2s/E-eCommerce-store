// OffCanvas.js
import React from 'react';
import { Link } from 'react-router-dom'

import { FiArrowRight } from "react-icons/fi";
import { MdDelete } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';

function OffCanvas({
    isVisible,
    selectedProducts,
    addToCart,
    removeFromCart,
    changeQuantity,
    getTotalPrice,
    getTotalProducts,
    clearCart,
    onCartClick
  }) {

    //Function to calculate the total price of an item
    const calculateTotalPrice = (productId) => {
      // Find the product in the selectedProducts array
      const product = selectedProducts.find(product => product.id === productId);
    
      if (!product) {
        return 0; // Return 0 if the product is not found
      }
    
      // Calculate and return the total price
      return product.quantity * product.price;
    };

    const totalPrice = getTotalPrice();
    const totalProducts = getTotalProducts();

  return (
    <div class="offCanva" style={{ display: isVisible ? 'block' : 'none' }}>

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <p style={{fontSize:'2rem'}}>SHOPPING CART</p>
          <FiArrowRight style={{fontSize:'20px', fontWeight:'bold'}} onClick={onCartClick} />
        </div>

        <span style={{width:'100%', height:'1px',backgroundColor:'black', display:'inline-block'}}></span>
        
        <div style={{ height:'50vh',overflowY:'scroll'}}>
        {selectedProducts.map((product, index) => (
          <div key={index} className='item' >
            <div style={{flex:"1"}}>
             <img src={product.image} alt={product.name} style={{width:'100%'}} ></img>
            </div>
            <div style={{flex:'3',padding:'0 10px'}} >
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h2>{product.name}</h2>
                <FaTimes  onClick={() => removeFromCart(product)} />
              </div>
              <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                
                  <input type="number" min={0} style={{width:'100px', height:'30px', padding:'2px', fontSize:'20px'}} 
                    value={product.quantity}
                    onChange={(e) => changeQuantity(product.id, parseInt(e.target.value))}
                  />
                  <p>Price: ${product.price}</p>
                  <p>{((product.quantity * product.price * 100) / 100).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
        </div>

        <span style={{width:'100%', height:'1px',backgroundColor:'black', display:'inline-block'}}></span>

        <div style={{display:'flex', justifyContent:'space-between',margin:'10px 0'}} >
            <p style={{fontSize:'1.5rem', fontWeight:'bold'}} >Subtotal: {totalPrice}</p>
            <MdDelete style={{fontSize:'1.5rem', fontWeight:'bold'}} onClick={() => clearCart()}/>
        </div>

        <p style={{fontSize:'1.5rem', fontWeight:'bold',margin:'10px 0'}} >Cart Total: {totalProducts}</p>

        <div style={{display:'flex', justifyContent:'space-between'}}>
          <Link to='/Checkout' onClick={onCartClick} ><button style={{padding:'15px 20px'}}>Checkout</button></Link>
        </div>
    </div>
  );
}

export default OffCanvas;
