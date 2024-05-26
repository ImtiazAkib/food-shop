import Button from "../../Shared/Button/Button";
import { BsPersonGear } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";

const data = [
  {
    icon: <BsPersonGear />,
    title: "Standard support",
  },
  {
    icon: <FaUserDoctor />,
    title: "Initial consultation to understand your needs",
  },
  {
    icon: <CiMobile3 />,
    title: "Mobile responsive design",
  },
  {
    icon: <IoNewspaperOutline />,
    title: "SSL Certificate",
  },
];

const Services = () => {
  return (
    <>
      <div className="hero min-h-screen bg-[#000611] text-white my-10 py-10">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-0 md:gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.map((singleData, index) => (
              <div
                className="card justify-center items-start py-5 px-5 gap-5 bg-[#060f20] hover:border-opacity-0 transition-opacity shadow-xl border-solid border-2 border-[#252525] rounded-md overflow-hidden"
                key={index}
              >
                <div className="w-16 h-16 shadow-sm rounded-md text-[#3B6AFF] text-5xl flex items-center justify-center">
                  {singleData.icon}
                </div>
                <div className="">
                  <h2 className="text-white font-bold text-2xl mb-2">
                    {singleData.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <div className="basis-[60ch] md:basis-[95ch] text-start md:text-justify p-1">
            <h1 className="text-xl font-bold mb-5 lg:mb-10 divider w-64 divider-start divider-neutral capitalize">
              What we do
            </h1>
            <h1 className="text-5xl font-bold">
              The Perfect Services We’re Offering
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <Button info="Get Started" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
