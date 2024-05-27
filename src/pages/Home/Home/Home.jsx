// import hero from "../../../assets/Header Banner.png";
import hero2 from "../../../assets/emile-perron.jpg";
import Button from "../../Shared/Button/Button";
import Faq from "../Faq/Faq";
import Package from "../Package/Package";
import Prices from "../Prices/Prices";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Solutions from "../Solutions/Solutions";
import Team from "../Team/Team";
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
        <div className="hero-content justify-start p-2 md:p-0">
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
            <Button info="Get Started" />
          </div>
        </div>
      </div>
      {/*----------------------- business packages ---------------------------------*/}
      <Package />
      {/*----------------------- Our Team ---------------------------------*/}
      <Team />
      {/*----------------------- business solutions ---------------------------------*/}
      <Solutions />
      {/*----------------------- Services ---------------------------------*/}
      <Services />
      {/*----------------------- Package prices ---------------------------------*/}
      <Prices />
      {/*----------------------- Our Projects ---------------------------------*/}
      <Projects />
      {/*----------------------- Reviews ---------------------------------*/}
      <Testimonial />
      {/*----------------------- Faq ---------------------------------*/}
      <Faq />
    </>
  );
};

export default Home;
