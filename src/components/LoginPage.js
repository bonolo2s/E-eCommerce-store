import { useState } from "react";
import { useHistory } from "react-router-dom";


const LoginPage = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (username === 'demo' && password === 'demo') {
        alert('Logged in successfully!');
        history.push("/shipping");

      } else {
        alert('Invalid credentials');
      }
    };

    return ( 
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

            <div className="login-container">

                <div className="login-container-1">
                    <p style={{fontWeight:'bold', fontSize:'18px'}}>New Customer</p>
                    <button style={{padding:'10px 20px', color:'white', backgroundColor:'green', border:'1px solid green', borderRadius:'50px'}}>Checkout Now</button>
                    <p>You can still create an account after checkout</p>
                </div>

                <div className="login-container-2">
                    <p style={{fontWeight:'bold', fontSize:'18px'}}>Existing Customer</p>
                    <p>sign in below</p>
                  
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username" style={{display:'block'}}>UserName :
                            <input type="text" required placeholder="Insert UserName" value={username} onChange={e => setUsername(e.target.value)} style={{padding:'10px'}} />
                        </label>
                        <label htmlFor="password"  style={{display:'block'}}>Password :
                            <input type="password" required placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{padding:'10px'}} />
                        </label>
                        <input type="submit" value="Sign in & Checkout" style={{padding:'10px 20px', fontSize:'15px', fontWeight:'bold', backgroundColor:'black', color:"white",border:'1px solid white', borderRadius:'50px'}}/>
                    </form>
                </div>

            </div>

            <p>please fill in "demo" for all fields</p>

        </div>
     );
}
 
export default LoginPage;