import web from "../../../assets/app-development.png";
import social from "../../../assets/social-media.png";
import Button from "../../Shared/Button/Button";

const data = [
  {
    icon: web,
    title: "Starter-Web",
    info: "Perfect for startups and small businesses. Includes a custom landing page, responsive design, basic SEO, and one month of support.",
    title2: "Duration:",
    info2: "10 Days",
    title3: "Package Included:",
    info3: [
      "Custom website",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Standard support",
      "Domain, Hosting & SSL Certificate",
    ],
    price: 850,
  },
  {
    icon: web,
    title: "Flexi-Web",
    info: "Ideal for businesses looking to expand their online presence. Includes a multi-page website, advanced SEO, CMS integration, and three months of support.",
    title2: "Duration:",
    info2: "20 Days",
    title3: "Package Included:",
    info3: [
      "10-page custom website",
      "Mobile responsive design",
      "Advanced SEO optimization",
      "Standard support",
      "Blog integration",
      "Domain, Hosting & SSL Certificate",
    ],
    price: 2050,
  },
  {
    icon: web,
    title: "Pro-Web",
    info: "Designed for larger businesses needing a comprehensive online solution. Includes a fully customized website, e-commerce integration, personalized design, ongoing SEO support, and six months of post-launch support.",
    title2: "Duration:",
    info2: "30 Days",
    title3: "Package Included:",
    info3: [
      "20-page custom website",
      "Mobile responsive design",
      "Comprehensive SEO optimization",
      "Priority support",
      "Blog integration",
      "E-commerce functionality",
      "Domain, Hosting & SSL Certificate",
    ],
    price: 3050,
  },
];
const data2 = [
  {
    icon: social,
    title: "Starter-Marketing Paket",
    info: "Best suited for: Start-ups and Small Business If that doesn’t sound exciting, we don’t know what does. Joining a startup will help you increase brand awareness and social media presence.",
    title2: "Duration:",
    info2: "30 Days",
    title3: "Package Included:",
    info3: [
      "Best suited for small to medium businesses",
      "management of social media (1 platform)",
      "Monthly content calendar",
      "Basic ad campaign management",
      "Output: Increases the popularity and presence on social media of the brand.",
    ],
    price: 500,
  },
  {
    icon: social,
    title: "Flexi-Marketing Package",
    info: "Perfect for a growing businesses who want more customers online. Boosts engagement and paves the way for more successful marketing efforts.",
    title2: "Duration:",
    info2: "30 Days",
    title3: "Package Included:",
    info3: [
      "All of the information on top 4 Treads To Follow by your businesses which i proved, these attempts will enable multiple marketing for any business. This platform is a win-win situation to enhance your business.",
      "All features of Basic Marketing Package",
      "Management of Social Media (3 platforms)",
      "Email marketing campaigns",
      "Monthly performance report",
    ],
    price: 2000,
  },
  {
    icon: social,
    title: "Pro-Marketing Package",
    info: "For larger businesses that require as all-inclusive an online resolution randintfn1 Reach maximised and significant marketing ROI achieved.",
    title2: "Duration:",
    info2: "30 Days",
    title3: "Package Included:",
    info3: [
      "Designed for modular marketing plans",
      "Standard Marketing Package Features",
      "Full ad campaign control",
      "Influencer marketing",
      "Detailed analytics and reporting",
      "Output: max reach, ensure solid marketing roi",
    ],
    price: 3000,
  },
];

const Prices = () => {
  return (
    <div className="bg-[#000611] py-10 pb-20 text-white">
      <div className="flex justify-center py-20">
        <div className="basis-[40ch] md:basis-[80ch] text-center">
          <h1 className="text-lg lg:text-2xl font-bold mb-5 lg:mb-10 divider divider-primary">
            PACKAGES AND PRICES
          </h1>
          <p>
            We&apos;ve discovered that most of the projects we bid on fall into
            distinct categories. To simplify your choice, we&apos;ve developed
            three different products. Each of these products is designed for a
            specific purpose and delivers a unique result.
          </p>
        </div>
      </div>
      <h1 className="text-2xl lg:text-5xl font-bold mb-5 lg:my-20 text-center uppercase">
        Web Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 lg:mx-28">
        {data.map((singleData, index) => (
          <div
            className="card bg-[#060f20] hover:border-opacity-0 transition-opacity shadow-xl border-solid border-2 border-[#252525] rounded-md overflow-hidden"
            key={index}
          >
            <figure className="px-10 pt-10 text-red-600">
              <img
                src={singleData.icon}
                alt="web development"
                className="w-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{singleData.title}</h2>
              <p>{singleData.info}</p>
              <h3 className="text-xl font-semibold mt-5">
                {singleData.title2} {singleData.info2}
              </h3>
              <h4 className="text-xl font-semibold mt-5">
                {singleData.title3}
              </h4>
              <ul className="flex-grow">
                {singleData.info3.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
              <div className="card-actions items-center gap-20 mt-8">
                <p className="text-lg font-semibold">
                  Price:€{singleData.price}
                </p>
                <Button info="Buy Now" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-lg lg:text-5xl font-bold my-5 lg:my-20 text-center uppercase">
        Digital Marketing Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 lg:mx-20">
        {data2.map((singleData, index) => (
          <div
            className="card bg-[#060f20] hover:border-opacity-0 transition-opacity shadow-xl border-solid border-2 border-[#252525] rounded-md overflow-hidden"
            key={index}
          >
            <figure className="px-10 pt-10 text-red-600">
              <img
                src={singleData.icon}
                alt="web development"
                className="w-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{singleData.title}</h2>
              <p>{singleData.info}</p>
              <h3 className="text-xl font-semibold mt-5">
                {singleData.title2} {singleData.info2}
              </h3>
              <h4 className="text-xl font-semibold mt-5">
                {singleData.title3}
              </h4>
              <ul className="flex-grow leading-7">
                {singleData.info3.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
              <div className="card-actions items-center gap-20 mt-8">
                <p className="text-lg font-semibold">
                  Price:€{singleData.price}
                </p>
                <Button info="Buy Now" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
