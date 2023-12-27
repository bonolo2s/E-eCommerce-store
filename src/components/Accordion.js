import { useState } from "react";

const Accordion = () => {
    const data = [
        {
            Question : '1. What is ActiveWearCentral?',
            answer : "ActiveWearCentral is an online store that specializes in providing high-quality activewear for both men and women. Our products range from workout clothes, sports gear, to accessories designed for fitness enthusiasts."
        },
        {
            Question : '2. What payment methods do you accept?',
            answer : "We accept a variety of payment methods including traditional methods like credit and debit cards, as well as modern alternatives such as digital wallets, mobile payments, and even cryptocurrencies."
        },
        {
            Question : '3. How long does shipping take?',
            answer : " Shipping times can vary depending on the destination. For domestic orders, customers can typically expect their orders to arrive within 1 to 6 business days. For international orders, standard shipping typically takes 1 to 3 weeks"
        },
        {
            Question : '4. What is your return policy?',
            answer : " We offer a 30-day return policy. If you are not satisfied with your purchase, you can return the product within 30 days of receiving it. The product must be in the same condition that you received it and in its original packaging"
        },
        {
            Question :'5. Do you offer international shipping',
            answer : "Yes, we offer international shipping to a wide range of countries. Please note that shipping times and costs may vary depending on the destination"
        },
        {
            Question :'6. What is your privacy policy?',
            answer : "We are committed to protecting your privacy. We collect personal information such as your name, email address, and shipping address when you make a purchase. This information is used solely for the purpose of fulfilling your order. We do not sell or share your information with third parties"
        },
        {
            Question :'7. How can I contact customer support?',
            answer :"You can contact our customer support team by email or phone.Our email address is support@yourstore.com, and our phone number is 555-1234.We are available Monday through Friday from 9am to 5pm."
        }
    ]

    const [selected, setSelected] = useState(null)

    const toggle = i => {
        if(selected === i){
            return setSelected(null)
        }
        
        setSelected(i)
    }
    
    return (
        <div>
            <div className="Accordion-wrapper">
                <div className="accordion">
                    {data.map((item, i) =>(
                        <div className="item" key={i}>
                            <div className="question" onClick={() => toggle(i)}>
                                <h3>{item.Question}</h3>
                                <span style={{fontWeight:'bold'}}>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
      );
    }
    
    export default Accordion;
    