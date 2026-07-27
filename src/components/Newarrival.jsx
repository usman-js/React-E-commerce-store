import jeans from "../assets/jeans.png"
import orangeshirt from "../assets/orangeshirt.png"
import checkshirt from "../assets/checkshirt.png"
import blackshirt from "../assets/blackshirt.png"
import Productcard from "./productCard"

const NewArrivals = [
    {
        id: 1,
        image: blackshirt,
        title:"T-shirt with Tape Detail",
        price: 120,
        rating: 4 ,
    },
    {
        id: 2,
        image: jeans,
        title: "Skinny Fit Jeans",
        price: 240,
        rating: 3,
    },
    {
        id: 3,
        image: checkshirt,
        title: "Checkered Shirt",
        price: 180,
        rating: 4,
    },
    {
        id: 4,
        image: orangeshirt,
        title: "Sleeve Striped T-shirt",
        price: 130,
        rating: 4,
    },

]

export default function NewArrival(){
    return(
        <div className="new-arrival">
            <h1 className="new-arrival-heading">New Arrivals</h1>
                <div className="cards">
                    {NewArrivals.map(product =>
                        (
                            <Productcard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            rating={product.rating} />
                        ))}
                 </div>
            <button className="view-all"> View All </button>
            <hr className="divider"/>
        </div>
        )}