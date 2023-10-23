import Cta from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { products } from "../data/products"; 

const Shoes = () => {
    const shoes = products.filter(product => product.categories === 'Shoes');
    return ( 
        <div>
            <Navbar/>
            <Cta/>
            <div style={{backgroundColor:'aliceblue',padding:'3% 8%'}}>
            <div style={{backgroundColor:'white', width:'100%',padding:'3%'}} >
                <h1 style={{fontSize:'5rem',color:'black'}}>Shoes</h1>

                {/* Map over the products array and display each product */}
                <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
                {shoes.map((shoe) => (
                        <div key={shoe.id} style={{margin: '10px'}}>
                            <div style={{width:'300px'}}>
                                <img src={shoe.image} alt={shoe.name} style={{width:'300px', height:"300px"}} />
                                <p style={{fontSize:'20px', color:'grey'}}>{shoe.category}</p>
                                <h2>{shoe.name}</h2>
                                <p>Price: ${shoe.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
            <Footer/>
        </div>
     );
}
 
export default Shoes;