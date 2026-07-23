import casual from "../assets/casual.png"
import formal from "../assets/formal.png"
import party from "../assets/party.png"
import gym from "../assets/gym.png"


export default function Browse(){
    return(
        <div className="browse">
            <div className="browse-heading">BROWSE BY DRESS STYLE</div>
            <div className="imgs1">
                <img className="casual" src={casual} alt="casual" />
                <img className="formal" src={formal} alt="formal" />
                </div>
                <div className="imgs2">
                <img className="party" src={party} alt="party" />
                <img className="gym" src={gym} alt="gym" />
                </div>

            
        </div>
    )
}