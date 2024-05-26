import faq from "../../../assets/faq.png";

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
    title: "What is included in the custom website design packages?",
    info: "All our website design packages include a custom design tailored to your brand, mobile responsiveness, basic SEO optimization, and standard support. Additional features vary by package.",
  },
  {
    title: "Can I update my website myself after it’s built?",
    info: "Yes, we build our websites on user-friendly platforms that allow you to make updates easily. We also provide training and support to help you manage your website.",
  },
  {
    title: "Will my website be mobile-friendly?",
    info: "Absolutely! All of our website designs are mobile-responsive to ensure they look great and function well on all devices.",
  },
  {
    title: "What is SEO and why is it important?",
    info: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results. This increases visibility, drives more traffic to your site, and helps you attract more customers.",
  },
  {
    title: "How long does it take to see results from SEO?",
    info: "SEO is a long-term strategy, and it typically takes 3-6 months to start seeing significant results. However, the exact timeline can vary depending on your industry and competition.",
  },
  {
    title: "What digital marketing services do you offer?",
    info: "We offer a range of digital marketing services including social media management, email marketing, content marketing, and ad campaign management. Each service is customized to meet your specific marketing goals.",
  },
  {
    title: "How do you measure the success of a digital marketing campaign?",
    info: "We use a variety of metrics to measure success, including website traffic, conversion rates, engagement on social media, and ROI. We provide detailed reports to keep you informed about the performance of your campaigns.",
  },
  {
    title: "What graphic design services do you provide?",
    info: "Our graphic design services include logo design, brand identity packages, marketing materials, and custom website graphics. We aim to create visually compelling designs that effectively communicate your brand’s message.",
  },
  {
    title: "Can you help rebrand my business?",
    info: "Yes, we offer comprehensive rebranding services including logo redesign, updated brand materials, and a refreshed website design to help your business stand out.",
  },
  {
    title: "What are your pricing options?",
    info: "We offer a variety of packages with fixed pricing to suit different needs and budgets. Custom quotes are also available for more specific projects.",
  },
  {
    title: "How do I make a payment?",
    info: "We accept payments via bank transfer, credit card, or PayPal. Detailed payment instructions will be provided in your invoice.",
  },
  {
    title: "Do you offer any discounts or promotions?",
    info: "Occasionally, we offer special promotions and discounts. Subscribe to our newsletter or follow us on social media to stay updated on our latest offers.",
  },
  {
    title: "Do you offer ongoing support and maintenance?",
    info: "Yes, we offer ongoing support and maintenance packages to ensure your website continues to run smoothly and stays up-to-date with the latest trends and technologies.",
  },
  {
    title: "How can I contact customer support?",
    info: "You can reach our customer support team via email, phone, or through the contact form on our website. We’re here to help with any questions or issues you may have.",
  },
];

const Faq = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen pt-10">
        <div className="hero-content flex-col gap-10 flex-grow">
          <img
            src={faq}
            className="max-w-xs md:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="collapse collapse-arrow shadow-md rounded-md">
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
                className="collapse collapse-arrow shadow-md rounded-md"
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
