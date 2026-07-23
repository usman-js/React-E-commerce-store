import jeans from "../assets/jeans.png"
import orangeshirt from "../assets/orangeshirt.png"
import checkshirt from "../assets/checkshirt.png"
import blackshirt from "../assets/blackshirt.png"
import Productcard from "./productCard"
export default function NewArrival(){
    return(
        <div className="new-arrival">
            <h1 className="new-arrival-heading">New Arrivals</h1>
                <div className="cards">
                  <Productcard 
                  image={blackshirt}
                  title="T-shirt with Tape Detail"
                  price="120"
                  rating={4}
                  />
                  <Productcard 
                  image={jeans}
                  title="Skinny Fit Jeans"
                  price="240"
                  rating={3}
                  />
                  <Productcard
                  image={checkshirt}
                  title="Checkered Shirt"
                  price="180"
                  rating={4}
                  />
                  <Productcard
                  image={orangeshirt}
                  title="Sleeve Striped T-shirt"
                  price="130"
                  rating={4}/>
                  </div>
            <button className="view-all"> View All </button>
            <hr className="divider"/>
        </div>

        )}