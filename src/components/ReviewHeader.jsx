export default function ReviewHeader() {
  return (
    <div className="review-header">

      <div className="review-left">
        <h2>
          All Reviews <span>(451)</span>
        </h2>
      </div>

      <div className="review-right">

        <button className="filter-btn">
          <i className="fa-solid fa-sliders"></i>
        </button>

        <select className="latest">
          <option>Latest</option>
          <option>Oldest</option>
          <option>Highest Rating</option>
        </select>

        <button className="write-btn">
          Write a Review
        </button>

      </div>

    </div>
  );
}