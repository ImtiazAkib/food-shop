import hero from "../../../assets/Header Banner.png";
import Faq from "../Faq/Faq";
import Package from "../Package/Package";
import Prices from "../Prices/Prices";
import Projects from "../Projects/Projects";
import Solutions from "../Solutions/Solutions";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/*----------------------- top hero section ---------------------------------*/}
      <div className="hero lg:min-h-screen bg-first animation-gradient pt-20 md:pt-36 md:pb-36">
        <div className="hero-content flex-col md:flex-row-reverse gap-14 lg:gap-20">
          <img
            src={hero}
            className="lg:max-w-lg max-w-xs rounded-lg shadow-2xl"
          />
          <div className="text-justify">
            <h1 className="text-2xl lg:text-5xl font-bold lg:leading-[4rem] text-[#02006b]">
              Custom Designed Websites I SEO I Digital Marketing With Fixed
              Costs
            </h1>
            <p className="py-6 text-white text-md lg:text-lg">
              Go to a digital trip with WebTrails : Custom Website Marketing
              Design & Expert SEO Specifically, Our Transparent Fixed Pricing
              Guarantees A Clear Online Presence, Higher Search Rankings &
              Enhanced Marketing Impact without any hidden charges or surprises!
              Your Dream Adventure Awaits NOW!
            </p>
            <button className="btn glass px-10 h-[3.5rem] lg:text-lg hover:bg-inherit">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/*----------------------- business packages ---------------------------------*/}
      <Package />
      {/*----------------------- business solutions ---------------------------------*/}
      <Solutions />
      {/*----------------------- Package prices ---------------------------------*/}
      <Prices />
      {/*----------------------- PERSONALIZED ON REQUEST ---------------------------------*/}
      <Package solution={"solution"} />
      {/*----------------------- Our Projects ---------------------------------*/}
      <Projects />
      {/*----------------------- Our Projects ---------------------------------*/}
      <Testimonial />
      {/*----------------------- Our Projects ---------------------------------*/}
      <Faq />
    </>
  );
};

export default Home;
