// import hero from "../../../assets/Header Banner.png";
import hero2 from "../../../assets/emile-perron.jpg";
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
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content justify-start p-0">
          <div className="text-white basis-[80ch]">
            <h1 className="text-2xl lg:text-5xl font-bold lg:leading-[4rem]">
              Custom Designed Websites I SEO I Digital Marketing With Fixed
              Costs
            </h1>
            <p className="py-6 text-md lg:text-lg">
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
