import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { useHistory, Link } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

  };
  

  const handlePayClick = () => {
    // Show the alert when the "Pay" button is clicked
    alert("Oops! Our payment system is currently on a safari in the wild plains of South Africa! 🦁 But don't worry, our Maker is on a mission to bring it back. So, keep your shopping spirit high!😊 A seamless payment experience is just around the corner. Stay tuned! 🚀");
  };



  return (
    <div style={{display:'flex',justifyContent:'center'}}>
        <div className='Payment-container'>
            <form onSubmit={handleSubmit}>
                <label style={{display:'block'}} >
                    <input type="text" name="cardholder-name" placeholder='Card Holder' style={{padding:"8px", border:'1px solid grey', margin:'20px 0',fontSize:'18px'}} />
                </label>
                <label style={{display:'block'}} >
                    <input type="text" name="postal-code" placeholder='Postal code' style={{padding:"8px", border:'1px solid grey', margin:'20px 0',fontSize:'18px'}} />
                </label>
                <CardElement />
                <button onClick={handlePayClick} type="submit" disabled={!stripe} style={{padding:'10px 30px', margin:'20px 0'}} >
                    Pay
                </button>
            </form>
        </div>
    </div>


  );
};

const Billing = ({getGrandTotal}) => {

    const grandTotal = getGrandTotal();
    const history = useHistory();

    const handleCancel = () => {
      history.push('/Checkout');
    };


  return (
    <div>
      <div style={{textAlign:'center',backgroundColor:'Highlight', padding:'10px 0'}}>
        <p style={{fontWeight:'bold',fontSize:'2.5rem'}}>ActiveWearCentral</p>
      </div>
      <div className="Billing-container">
        <div style={{display:'flex', justifyContent:'space-between', margin:'10px 0'}}>
          <Link to= 'Checkout' ><button style={{padding:'10px 25px'}}>Cancel</button></Link>
          <p style={{fontWeight:'bold'}} >$ {grandTotal}</p>
          <p style={{color:"grey"}}>Secured by <span style={{fontWeight:'bold'}}>Stripe Payments</span> </p>
        </div>
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Billing;
