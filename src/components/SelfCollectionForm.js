const SelfCollectionForm = () => {
    return (
        <div>
            <div className="SelfCollection-Container" >
 
                <p style={{fontSize:'18px',margin:'20px 0',fontWeight:'bold'}} >Who will pick up your order? 😊</p>
                <div className="personalDetails">
                    <label htmlFor="" style={{display:'block',width:"100%"}}>
                        <input type="text" required placeholder="First Name" style={{padding:'10px', border:'1px solid grey', borderRadius:'10px',margin:'10px 0',width:'80%'}}/>
                    </label>
                    <label htmlFor="" style={{display:'block',width:"100%"}} >
                        <input type="text" required placeholder="Last Name" style={{padding:'10px', border:'1px solid grey', borderRadius:'10px',margin:'10px 0',width:'80%'}}/>
                    </label>
                </div>

                <div className="ContactDetials" >
                    <label htmlFor="" style={{display:'block',width:"100%"}} >
                        <input type="text" required placeholder="Phone number" style={{padding:'10px', border:'1px solid grey', borderRadius:'10px',margin:'10px 0',width:'80%'}}/>
                    </label>
                    <label htmlFor="" style={{display:'block',width:"100%"}}>
                        <input type="email" required placeholder="Email Address" style={{padding:'10px', border:'1px solid grey', borderRadius:'10px',margin:'10px 0',width:'80%'}} />
                    </label>
                </div>
            </div>
            
        </div>
     );
}
 
export default SelfCollectionForm;