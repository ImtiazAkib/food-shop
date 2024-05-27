import person1 from "../../../assets/Istiak Abir.jpg";
import person2 from "../../../assets/Mirza Tatarevic.jpg";
import person3 from "../../../assets/ImtiazAkib.jpg";
import person4 from "../../../assets/test2 - Copy.jpg";

const data = [
  {
    img: person1,
    name: "Istiak Abir",
    info: "FullStack Web Developer",
  },
  {
    img: person2,
    name: "Mirza Tatarevic",
    info: "Frontend Web Developer",
  },
  {
    img: person3,
    name: "Imtiaz Akib",
    info: "Backend Web Developer",
  },
  {
    img: person4,
    name: "Kenan Aljiji",
    info: "UX/UI Designe",
  },
];

const Team = () => {
  return (
    <>
      <div className="bg-[#000611] py-10 pb-20 text-white mt-20">
        <div className="flex justify-center py-20">
          <div className="basis-[40ch] md:basis-[80ch] text-center">
            <h1 className="text-lg lg:text-2xl font-bold mb-5 lg:mb-10 divider divider-primary">
              Our Team
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-2 lg:mx-28">
          {data.map((singleData, index) => (
            <div
              className="card bg-[#060f20] hover:border-opacity-0 transition-opacity shadow-xl border-solid border-2 border-[#252525] rounded-md overflow-hidden"
              key={index}
            >
              <figure className="px-10 pt-10 text-red-600">
                <img
                  src={singleData.img}
                  alt="web developer"
                  className="w-32 rounded-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{singleData.name}</h2>
                <p>{singleData.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
