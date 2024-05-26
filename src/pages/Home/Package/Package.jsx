import { BsPersonGear } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";

const data = [
  {
    icon: <BsPersonGear />,
    title: "Great Experiences",
    info: "At our web development agency, we craft great experiences through innovative design, seamless functionality, and user-centric solutions. We aim to create memorable and impactful digital interactions that drive success for our clients.",
  },
  {
    icon: <RiPagesLine />,
    title: "Reference for Result",
    info: "Great experiences are impactful moments that our web development agency strives to create through innovative design, seamless functionality, and exceptional user engagement, leaving lasting impressions and driving success for our clients.",
  },
  {
    icon: <RiTeamLine />,
    title: "Experienced Team",
    info: "Our web development agency boasts a skilled and seasoned team dedicated to delivering outstanding results. With expertise in design, development, and digital strategy, we transform ideas into successful, user-friendly websites.",
  },
];

const Package = () => {
  return (
    <section className="body-font mb-10 -mt-5">
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 -m-2 mx-0 lg:mx-20">
          {data.map((singleData, index) => (
            <div
              className="flex flex-col justify-start py-8 px-10 gap-5 border-gray-200 border rounded-lg shadow-lg bg-white package-icon"
              key={index}
            >
              <div className="w-16 h-16 shadow-sm rounded-md text-white text-3xl flex items-center justify-center bg-starter">
                {singleData.icon}
              </div>
              <div className="text-justify">
                <h2 className="text-gray-900 font-bold text-2xl mb-2">
                  {singleData.title}
                </h2>
                <p className="text-gray-500">{singleData.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Package;
