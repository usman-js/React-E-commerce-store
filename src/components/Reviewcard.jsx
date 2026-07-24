export default function Reviewcard(props){
    return(
        <div className="Reviewcard">
            <div className="star-icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <h2>{props.name}<i id="checkmark" class="fa-solid fa-circle-check"></i></h2>
            <p>{props.text}</p>
        </div>
    )
}