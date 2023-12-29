import React from 'react';

const Billing = () => {
    return (
        <div>
            <div style={{textAlign:'center',backgroundColor:'Highlight', padding:'10px 0'}}> 
                <p style={{fontWeight:'bold',fontSize:'2.5rem'}}>ActiveWearCentral</p>
            </div>
            <div className="Billing-container">
                <div style={{display:'flex', justifyContent:'space-between', margin:'10px 0'}}>
                    <button style={{padding:'10px 25px'}}>Cancel</button>
                    <p style={{color:"grey"}}>Secured by <span style={{fontWeight:'bold'}}>Stripe Payments</span> </p>
                </div>
                <div>
                    <form action="https://www.payfast.co.za/eng/process" method="post">
                        <input type="hidden" name="name_first" value="John"/>
                        <input type="hidden" name="name_last" value="Doe"/>
                        <input type="hidden" name="email_address" value="john@doe.com"/>
                        <input type="hidden" name="cell_number" value="0823456789"/> 

                        <input type="hidden" name="merchant_id" value="10000100" />
                        <input type="hidden" name="merchant_key" value="46f0cd694581a"/>
                        <input type="hidden" name="amount" value="100.00"/>
                        <input type="hidden" name="item_name" value="Test Product"/>
                        <input type="submit" value="Pay Now"/>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Billing;
