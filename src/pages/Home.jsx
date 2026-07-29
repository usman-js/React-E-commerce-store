import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import TopSeller from "../components/Topseller";
import Browse from "../components/Browse";
import Reviews from "../components/Reviews";
import Signup from "../components/Signup";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <NewArrival />
      <TopSeller heading="TOP SELLING" />
      <Browse />
      <Reviews />
      <Signup />
      <Footer />
    </>
  );
}