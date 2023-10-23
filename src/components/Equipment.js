import Cta from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { products } from "../data/products";

const Equipment = () => {
    const equipment = products.filter(product => product.categories === 'Sport Equipment');
    return ( 
    <div>
        <Navbar/>
        <Cta/>
        <div style={{backgroundColor:'aliceblue',padding:'3% 8%'}}>
            <div style={{backgroundColor:'white', width:'100%',padding:'3%'}} >
                <h1 style={{fontSize:'5rem',color:'black'}}>Sports equipment</h1>

                {/* Map over the products array and display each product */}
                <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
                {equipment.map((product) => (
                        <div key={product.id} style={{margin: '10px'}}>
                            <div style={{width:'300px'}}>
                                <img src={product.image} alt={product.name} style={{width:'300px', height:"300px"}} />
                                <p style={{fontSize:'20px', color:'grey'}}>{product.category}</p>
                                <h2>{product.name}</h2>
                                <p>Price: ${product.price}</p>
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
 
export default Equipment;