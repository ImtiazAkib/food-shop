import hero from "../../../assets/rew.jpg";

const Solutions = () => {
  return (
    <>
      <div className="hero lg:min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-14 lg:gap-20">
          <img
            src={hero}
            className="lg:max-w-xl max-w-xs md:max-w-lg rounded-md shadow-2xl"
          />
          <div className="text-justify">
            <h1 className="text-xl w-64 font-bold text-[#3B6AFF] mb-5 lg:mb-10 divider divider-start divider-primary">
              About Company
            </h1>
            <h2 className="text-[1.4rem] md:text-3xl lg:text-4xl font-bold lg:leading-[3rem]">
              WEBSITE DESIGN AND DIGITAL MARKETING SOLUTIONS FOR ALL INDUSTRY
            </h2>
            <p className="py-6 text-md md:text-lg">
              Take Your Business to New Heights with Custom Website Design and
              Digital Marketing Solution. Our expertise is geared towards
              helping companies win online. We will help you create user
              friendly websites and reap the benefits of your labour with our
              effective online marketing services. Let&apos;s work with you to
              express yourself effectively, draw customers and grow your
              business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
