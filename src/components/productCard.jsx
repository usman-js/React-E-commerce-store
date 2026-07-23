export default function Productcard(props){
    return(
            <div className="card">
                <img src={props.image} alt="orangeshirt" />
                    <h4>{props.title}</h4>
                        <div className="reviews">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <p>{props.rating}/5</p>
                        </div>
                        <p>${props.price}</p>
            </div>
       
    )
}