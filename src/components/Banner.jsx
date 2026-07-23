import varsace from "../assets/Group.png"
import zara from "../assets/zara.png"
import parada from "../assets/parada.png"
import gucci from "../assets/gucci.png"
import ck from "../assets/ck.png"
export default function Banner(){
    return(
        <div className="banner">
            <span><img className="v" src={varsace} alt="varsace" /></span>
            <span><img className="z" src={zara} alt="zara" /></span>
            <span><img className="p" src={parada} alt="parada" /></span>
            <span> <img className="g" src={gucci} alt="gucci" /></span>
            <span> <img className="c" src={ck} alt="ck" /></span>
        </div>
    )
} 