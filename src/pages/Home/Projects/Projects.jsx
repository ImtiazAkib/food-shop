import pic1 from "../../../assets/1.jpg";
import pic2 from "../../../assets/2.jpg";
import pic3 from "../../../assets/3.jpg";
import pic4 from "../../../assets/4.jpg";
import pic5 from "../../../assets/5.jpg";
import pic6 from "../../../assets/6.jpg";
import pic7 from "../../../assets/7.jpg";
import pic8 from "../../../assets/8.jpg";
import pic9 from "../../../assets/9.webp";

const data = [
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic1,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic2,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic3,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic4,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic5,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic6,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic7,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic8,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic9,
  },
];

const Projects = () => {
  return (
    <div>
      <div className="flex justify-center pb-20">
        <div className="basis-[40ch] md:basis-[80ch] text-center">
          <h1 className="text-3xl lg:text-5xl mb-5 lg:mb-10">Our Projects</h1>
          <p>Here are a few design projects I&apos;ve worked on recently</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-5 lg:mx-10 relative">
        {data.map((singleData, index) => (
          <div
            className="relative project overflow-hidden h-80 rounded-md flex justify-center"
            key={index}
          >
            <figure className="text-center">
              <img src={singleData.img} alt="project" />
            </figure>
            <figcaption
              className={`text-center px-10 lg:px-20 bg-slate-500 absolute top-0 bottom-0 flex items-center flex-col justify-center opacity-0 transition-opacity duration-300 `}
            >
              <p>{singleData.info}</p>
              <button className="btn btn-outline mt-3 px-16 rounded-md capitalize">
                Visit project
              </button>
            </figcaption>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
