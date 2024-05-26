import faq from "../../../assets/faq.jpg";

const data = [
  {
    title: "How do I get started with WebTrails.de?",
    info: "Getting started is easy! Contact us through our website to schedule a consultation. We’ll discuss your needs and develop a customized plan for your project.",
  },
  {
    title: "What types of businesses do you work with?",
    info: "We work with businesses of all sizes across various industries. Whether you’re a small startup or a large corporation, we have the expertise to help you succeed online.",
  },
  {
    title: "How long does it take to complete a project?",
    info: "The timeline for each project varies depending on its scope and complexity. Typically, a basic website design project can take 2-4 weeks, while more complex projects, like an e-commerce site, may take 6-8 weeks or longer.",
  },
  {
    title: "Will my website be mobile-friendly?",
    info: "Absolutely! All of our website designs are mobile-responsive to ensure they look great and function well on all devices.",
  },
];

const Faq = () => {
  return (
    <>
      <div className="hero min-h-screen pt-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 flex-grow">
          <img
            src={faq}
            className="max-w-xs md:max-w-xl rounded-lg shadow-2xl"
          />
          <div>
            <div className="my-5">
              <h1 className="text-xl w-[30rem] font-bold text-[#3B6AFF] mb-5 lg:mb-10 divider divider-start divider-primary">
                Frequently asked questions
              </h1>
              <h2 className="text-[1.4rem] md:text-3xl lg:text-4xl font-bold lg:leading-[3rem]">
                You Are Confused! Question & Answers.
              </h2>
            </div>
            <div className="collapse collapse-plus border-b-2 rounded-none">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What services does WebTrails.de offer?
              </div>
              <div className="collapse-content">
                <p>
                  We offer a range of digital services including custom website
                  design, SEO optimization, digital marketing, and graphic
                  design. Each service is tailored to meet the specific needs of
                  your business.
                </p>
              </div>
            </div>
            {data.map((singleData, index) => (
              <div
                className="collapse collapse-plus border-b-2 rounded-none"
                key={index}
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  {singleData.title}
                </div>
                <div className="collapse-content">
                  <p>{singleData.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
