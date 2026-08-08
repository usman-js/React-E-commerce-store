import varsace from "../assets/Group.png"
import zara from "../assets/zara.png"
import parada from "../assets/parada.png"
import gucci from "../assets/gucci.png"
import ck from "../assets/ck.png"

const brandsLogo = [
    {
        id:1,
        src: varsace,
        alt: "varsace",
        className:"v"
    },
     {
        id:2,
        src: zara,
        alt: "zara",
        className:"z"
    },
     {
        id:3,
        src: parada,
        alt: "parada",
        className:"p"
    },
     {
        id:4,
        src: gucci,
        alt: "gucci",
        className:"g"
    },
     {
        id:5,
        src: ck,
        alt: "ck",
        className:"c"
    }
]

export default function Banner(){
    return(
        <Image className="banner">
            {brandsLogo.map(brand => (
                <img 
                key={brand.id}
                src={brand.src}
                className={brand.className}
                alt={brand.alt}
                />
            ))}
        </Image>
    )
} 