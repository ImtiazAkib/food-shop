import icon from "../../../assets/app-development.png";

const data = [
  {
    icon: icon,
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
    icon: icon,
    title: "Flexi-Web",
    info: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    title2: "Languages I speak:",
    info2: ["HTML5", "CSS3", "Javascript"],
    title3: "Dev Tools:",
    info3: ["Bootstrap5", "Material UI", "Github", "Terminal", "Tailwind"],
    price: 65,
  },
  {
    icon: icon,
    title: "Front-end Developer",
    info: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
    title2: "Languages I speak:",
    info2: ["HTML5", "CSS3", "Javascript"],
    title3: "Dev Tools:",
    info3: ["Bootstrap5", "Material UI", "Github", "Terminal", "Tailwind"],
    price: 65,
  },
];

const Prices = () => {
  return (
    <div className="">
      <div className="flex justify-center py-20">
        <div className="basis-[40ch] md:basis-[80ch] text-center">
          <h1 className="text-2xl lg:text-5xl font-bold mb-0 lg:mb-10">
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
      <h1 className="text-2xl lg:text-5xl font-bold mb-0 lg:my-20 text-center">
        Web Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 lg:mx-36">
        {data.map((singleData, index) => (
          <div
            className="card bg-base-100 shadow-xl border-solid border-2"
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
                {singleData.title2}
              </h3>
              <p>{singleData.info2}</p>
              <h4 className="text-xl font-semibold mt-5">
                {singleData.title3}
              </h4>
              <ul>
                {singleData.info3.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
              <div className="card-actions items-center gap-20 mt-8">
                <p className="text-lg font-semibold">
                  Price:€{singleData.price}
                </p>
                <button className="btn btn-outline">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl lg:text-5xl font-bold mb-0 lg:my-20 text-center">
        Web Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 lg:mx-36">
        {data.map((singleData, index) => (
          <div
            className="card bg-base-100 shadow-xl border-solid border-2"
            key={index}
          >
            <figure className="px-10 pt-10 text-6xl text-red-600">
              {singleData.icon}
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{singleData.title}</h2>
              <p>{singleData.info}</p>
              <h3 className="text-xl font-semibold mt-5">
                {singleData.title2}
              </h3>
              <p>{singleData.info2}</p>
              <h4 className="text-xl font-semibold mt-5">
                {singleData.title3}
              </h4>
              <ul>
                {singleData.info3.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
              <div className="card-actions items-center gap-20 mt-5">
                <p className="text-lg font-semibold">
                  Price:{singleData.price}$
                </p>
                <button className="btn btn-outline">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-2xl lg:text-5xl font-bold mb-0 lg:my-20 text-center">
        Web Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-2 lg:mx-36">
        {data.map((singleData, index) => (
          <div
            className="card bg-base-100 shadow-xl border-solid border-2"
            key={index}
          >
            <figure className="px-10 pt-10 text-6xl text-red-600">
              {singleData.icon}
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{singleData.title}</h2>
              <p>{singleData.info}</p>
              <h3 className="text-xl font-semibold mt-5">
                {singleData.title2}
              </h3>
              <p>{singleData.info2}</p>
              <h4 className="text-xl font-semibold mt-5">
                {singleData.title3}
              </h4>
              <ul>
                {singleData.info3.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
              <div className="card-actions items-center gap-20 mt-5">
                <p className="text-lg font-semibold">
                  Price:{singleData.price}$
                </p>
                <button className="btn btn-outline">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
