import Reviewcard from "./Reviewcard"

export default function Reviews(){
    return(
        <div className="heading">
            <div className="top">
            <h1>Our Happy Customers</h1>
            <div className="arrows">
            <i class="fa-solid fa-arrow-left"></i>
            <i class="fa-solid fa-arrow-right"></i>
            </div>
            </div>
            <div className="review-card"> 
                <Reviewcard
                name="Sarah M."
                text="I'm blown away by the quality and style
                of the clothes I received from Shop.co. From casual
                wear to elegant dresses, every piece I've bought has
                exceeded my expectations."
                />
                <Reviewcard 
                name="Alex K."
                text="Finding clothes that align with my personal 
                style used to be a challenge until I discovered Shop.co.
                The range of options they offer is truly remarkable, 
                catering to a variety of tastes and occasions."
                />
                <Reviewcard
                name="James L."
                text="As someone who's always on the lookout for unique
                fashion pieces, I'm thrilled to have stumbled upon Shop.co.
                The selection of clothes is not only diverse but also
                on-point with the latest trends."
                />
            </div>
        </div>

    )

}