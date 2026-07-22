export default function Header(){
    return(
        <header className="navbar">
            <h1>Shop.co</h1>
            <div className="a-tags">
                <a href="#">Shop</a>
                <a href="#">On Sale</a>
                <a href="#">New Arrival</a>
                <a href="#">Brand</a>
            </div>
            <div className="search-bar">
                <div className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                <input className="input-tag" type="text" placeholder="Search for products..." />
            </div>
            <div className="icons">
            <div className="cart-icon"><i class="fa-solid fa-cart-shopping"></i></div>
            <div className="contact-icon"><i class="fa-solid fa-circle-user"></i></div>
            </div>
        </header>
    )

}
