import Cta from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { products } from "../data/products";

const Sale = () => {
    const onSaleProducts = products.filter(product => product.categories.includes('On Sale'));
    return ( 
        <div>
            <Cta/>
            <div style={{backgroundColor:'aliceblue',padding:'3% 8%'}}>
            <div style={{backgroundColor:'white', width:'100%',padding:'3%'}} >
                <h1 style={{fontSize:'5rem',color:'black'}}>Sale</h1>

                {/* Map over the products array and display each product */}
                <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
                {onSaleProducts.map((product) => (
                        <div key={product.id} style={{margin: '10px'}}>
                            <div style={{width:'300px'}}>
                                <img src={product.image} alt={product.name} style={{width:'300px', height:"300px"}} />
                                <p style={{fontSize:'20px', color:'grey'}}>{product.categories}</p>
                                <h2>{product.name}</h2>
                                <p style={{textDecoration:'line-through'}}>Price: ${product.price}</p>
                                <p>Sale price: ${product.salePrice}</p>
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
 
export default Sale;