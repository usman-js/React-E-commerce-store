export default function ProductInfo() {
  return (
    <div className="product-info">

      <h1>ONE LIFE GRAPHIC T-SHIRT</h1>

      <div className="rating">
        ⭐⭐⭐⭐☆
        <span>4.5/5</span>
      </div>

      <div className="price">
        <h2>$260</h2>
        <del>$300</del>
        <span>-40%</span>
      </div>

      <p>
        This graphic t-shirt is perfect for any occasion.
      </p>

      <hr />

      <h4>Select Colors</h4>

      <div className="colors">
        <div className="brown"></div>
        <div className="green"></div>
        <div className="purple"></div>
      </div>

      <hr />

      <h4>Choose Size</h4>

      <div className="sizes">
        <button>Small</button>
        <button>Medium</button>
        <button>Large</button>
        <button>X-Large</button>
      </div>

      <hr />

      <div className="cart-row">

        <div className="quantity">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button className="cart-btn">
          Add to Cart
        </button>

      </div>

    </div>
  );
}