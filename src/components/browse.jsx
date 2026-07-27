import casual from "../assets/casual.png"
import formal from "../assets/formal.png"
import party from "../assets/party.png"
import gym from "../assets/gym.png"

const firstRow = [
    {
        id:1,
        src:casual,
        alt:"casual",
        className: "casual"
    },
     {
        id:2,
        src:formal,
        alt:"formal",
        className: "formal"
    }
]
const secondRow = [
    {
        id:1,
        src:party,
        alt:"party",
        className: "party"
    },
     {
        id:2,
        src:gym,
        alt:"gym",
        className: "gym"
    }
]

export default function Browse(){
    return(
        <div className="browse">
            <div className="browse-heading">BROWSE BY DRESS STYLE</div>
            <div className="imgs1">
                {firstRow.map(firstRow =>(
                    <img
                    key={firstRow.id}
                    src={firstRow.src}
                    alt={firstRow.alt}
                    className={firstRow.className}
                    />
                ))}
                </div>
                <div className="imgs2">
                {secondRow.map(secondRow =>(
                    <img
                    key={secondRow.id}
                    src={secondRow.src}
                    alt={secondRow.alt}
                    className={secondRow.className}
                    />
                ))}
                </div>
        </div>
    )}