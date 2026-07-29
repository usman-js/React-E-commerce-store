import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";


export default function ProductGallery() {
  return (
    <div className="gallery">

      <div className="gallery-small">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>

      <div className="gallery-main">
        <img src={img3} alt="" />
      </div>

    </div>
  );
}