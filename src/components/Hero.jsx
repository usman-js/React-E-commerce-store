import heroImg from "../assets/HeroImg.png";
export default function Hero(){
     return(
        <div className="hero">
        <div className="hero-section">
            <h1>FIND CLOTHES THAT MATCH YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="hero-btn">Shop Now</button>
            <div className="stats">
                <div className="brands">
                    <h1>200+</h1>
                    <p>International Brands</p>
                </div>
                <div className="Products">
                    <h1>2,000+</h1>
                    <p>High-Quality Products</p>
                </div>
                <div className="customers">
                    <h1>30,000+</h1>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
        </div>
    )
}