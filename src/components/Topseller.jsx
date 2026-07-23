import Blackjeans from "../assets/blackjeans.png";
import Greenshirt from "../assets/greenshirt.png";
import Tshirtorange from "../assets/tshirtorange.png"
import Shorts from "../assets/shorts.png" 
import NewArrival from "./Newarrival";
import Productcard from "./productCard";

export default function Topseller(){
    return(
        <div className="topSeller">
            <h1>Top Seller</h1>
            <div className="cards">
                <Productcard
                image={Greenshirt}
                title="VERTICAL STRIPED SHIRT"
                price="212"
                rating={4}
                />
                <Productcard
                image={Tshirtorange}
                title="COURAGE GRAPHIC T-SHIRT"
                price="145"
                rating={4}
                />
                <Productcard
                image={Shorts}
                title="LOOSE FIT BERMUDA SHORTS"
                price="80"
                rating={4}
                />
                <Productcard
                image={Blackjeans}
                title="FADED SKINNY JEANS"
                price="210"
                rating={4}
                />
                
            </div>
            </div>
            



    )

}  