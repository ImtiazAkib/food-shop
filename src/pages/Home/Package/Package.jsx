import { FaLayerGroup } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { RiZoomInLine } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const data = [
  {
    icon: <FaLayerGroup />,
    info: "CMS System",
  },
  {
    icon: <FaLock />,
    info: "DSGVO Cookie Banner",
  },
  {
    icon: <RiZoomInLine />,
    info: "SEO Optimierung",
  },
  {
    icon: <FaPencilAlt />,
    info: "Website Editor",
  },
];

const Package = () => {
  return (
    <section className="text-gray-600 body-font bg-[#37B1E0] mb-20">
      <div className="container px-5 pt-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            ALLE PAKETE ENTHALTEN
          </h1>
        </div>
        <div className="flex gap-5 flex-wrap lg:flex-nowrap -m-2 mx-0 lg:mx-10">
          {data.map((singleData, index) => (
            <div className="lg:w-1/3 md:w-1/2 w-full relative" key={index}>
              <div className="h-full flex justify-start lg:justify-center items-center border-gray-200 border p-4 rounded-lg shadow-lg py-10 bg-white">
                <div className="w-14 h-14 shadow-sm rounded-md text-white text-xl flex items-center justify-center mr-5 bg-pink-700">
                  {singleData.icon}
                </div>
                <div>
                  <h2 className="text-gray-900 font-medium text-2xl">
                    {singleData.info}
                  </h2>
                </div>
              </div>
              <div className="h-12 w-12 flex items-center justify-center text-3xl shadow-sm text-white bg-blue-900 rounded-[50%] absolute top-[-15px] right-[-15px]">
                <IoMdCheckmark />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[300px] bg-image"></div>
    </section>
  );
};

export default Package;
