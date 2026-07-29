import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ReviewTabs from "../components/ReviewTab";
import ReviewHeader from "../components/ReviewHeader";
import Reviewcard from "../components/Reviewcard";
import Signup from "../components/Signup";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import Topseller from "../components/Topseller";


export default function Product() {
  return (
    <>
      <Header />

      <div className="product-page">
        <Breadcrumb />

        <div className="product-container">
          <ProductGallery />
          <ProductInfo />
        </div>
      </div>
      <ReviewTabs />
      <ReviewHeader />
      <div className="review-grid">
      <Reviewcard
        name="Sarah M."
        text="I'm blown away by the quality and style..."
        date="Posted on August 14, 2023"
        rating="⭐⭐⭐⭐⭐"
         />
         <Reviewcard
        name="Sarah M."
        text="I'm blown away by the quality and style..."
        date="Posted on August 14, 2023"
        rating="⭐⭐⭐⭐⭐"
         />
         <Reviewcard
        name="Sarah M."
        text="I'm blown away by the quality and style..."
        date="Posted on August 14, 2023"
        rating="⭐⭐⭐⭐⭐"
         />
         <Reviewcard
        name="Sarah M."
        text="I'm blown away by the quality and style..."
        date="Posted on August 14, 2023"
        rating="⭐⭐⭐⭐⭐"
         />
         <Reviewcard
        name="Sarah M."
        text="I'm blown away by the quality and style..."
        date="Posted on August 14, 2023"
        rating="⭐⭐⭐⭐⭐"
         />
         <Reviewcard
        name="Sarah M."
        text="I'm blown away by the quality and style..."
        date="Posted on August 14, 2023"
        rating="⭐⭐⭐⭐⭐"
         />
         </div>
         <button className="load-btn">
         Load More Reviews
         </button>
         <h1 className="might-like-heading">
         YOU MIGHT ALSO LIKE
         </h1>
         <Topseller />
      <Signup />
      <Footer />
    </>
  );
}