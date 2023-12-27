import Cta from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { products } from "../data/products";

import shoeSale from "../assets/learnMore.jpeg"
import HotDeal from "../assets/HotDeal.jpeg"

const Sale = () => {
    const onSaleProducts = products.filter(product => product.categories.includes('On Sale'));
    return ( 
        <div>
            <Cta/>
            <div style={{backgroundColor:'aliceblue',padding:'3% 8%'}}>
            <div style={{backgroundColor:'white', width:'100%',padding:'3%'}} >
                <h1 style={{fontSize:'5rem',color:'black',textAlign:'center'}}>Sale</h1>

                <div className="OnSale-Container">

                    <div className="sale-1" style={{
                        backgroundImage: `url(${shoeSale})`
                    }}>
                        <div style={{margin:'20% auto', lineHeight:'2'}}>
                            <h1 style={{color:'white'}}>Hot Kicks</h1>
                            <h2 style={{fontSize:'3rem',color:'white'}}>Buy One Get</h2>
                            <h2 style={{fontSize:'3rem',color:'white'}}>One Free</h2>
                            <button style={{padding:'10px 20px', fontSize:'18px', background:'transparent',color:'white',border:'2px solid white'}}>Learn More</button>
                        </div>
                    </div>

                    <div className="sale-2" style={{
                         backgroundImage: `url(${HotDeal})`
                    }}>
                        <div style={{margin:'20% auto', lineHeight:'2'}}>
                            <h1 style={{color:'white'}}>Hot Deal</h1>
                            <h2 style={{fontSize:'3rem',color:'white'}}>Buy One Get</h2>
                            <h2 style={{fontSize:'3rem',color:'white'}}>One Free</h2>
                            <button style={{padding:'10px 20px', fontSize:'18px', background:'transparent',color:'white',border:'2px solid white'}}>Learn More</button>
                        </div>
                    </div>
                </div>

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