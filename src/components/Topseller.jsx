import Blackjeans from "../assets/blackjeans.png";
import Greenshirt from "../assets/greenshirt.png";
import Tshirtorange from "../assets/tshirtorange.png"
import Shorts from "../assets/shorts.png" 
import NewArrival from "./Newarrival";
import Productcard from "./productCard";

const TopSellers =[
    {
        id:1,
        image: Greenshirt,
        title : "VERTICAL STRIPED SHIRT",
        price : 212,
        rating : 4,
    },
    {
        id:1,
        image: Tshirtorange,
        title:"COURAGE GRAPHIC T-SHIRT",
        price: 145,
        rating: 4,
    },
    {
         id:1,
         image: Shorts,
         title:"LOOSE FIT BERMUDA SHORTS",
         price: 80,
         rating: 4,
    },
    {
        id:1,
        image: Blackjeans,
        title:"FADED SKINNY JEANS",
        price: 210,
        rating: 4,
    }
]

export default function Topseller(){
    return(
        <div className="topSeller">
            <h1>Top Seller</h1>
            <div className="cards">
                {TopSellers.map(product=>(
                    <Productcard 
                    key = {product.id}
                    image = {product.image}
                    title = {product.title}
                    price = {product.price}
                    rating = {product.rating}/>
                ))}
            </div>
            </div>
    )

}  