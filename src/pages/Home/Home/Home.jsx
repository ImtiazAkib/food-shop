import hero from "../../../assets/26515840.jpg";
import Package from "../Package/Package";
import Prices from "../Prices/Prices";
import Projects from "../Projects/Projects";
import Solutions from "../Solutions/Solutions";

const Home = () => {
  return (
    <>
      {/*----------------------- top hero section ---------------------------------*/}
      <div className="hero min-h-screen bg-first animation-gradient pt-20 lg:pt-5">
        <div className="hero-content flex-col lg:flex-row-reverse gap-14 lg:gap-28">
          <img
            src={hero}
            className="lg:max-w-md max-w-xs rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold lg:leading-[4rem] text-[#02006b]">
              WEBSEITEN OHNE TEMPLATES MIT FIXEN PREISEN
            </h1>
            <p className="py-6 text-white text-lg">
              Wenn Sie schnell online gehen möchten , jedoch keine fertige
              Vorlage wünschen, die Ihr Konkurrent schon besitzt, dann ist
              PUSH2HIT die perfekte Lösung für Ihr Unternehmen.
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
    </>
  );
};

export default Home;
