import pic from "../../../assets/26515840.jpg";

const data = [
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic,
  },
  {
    info: "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    img: pic,
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-5 lg:mx-10">
        {data.map((singleData, index) => (
          <div
            className="relative project overflow-hidden h-80 rounded-md"
            key={index}
          >
            <figure>
              <img src={singleData.img} alt="" />
            </figure>
            <figcaption className="text-center px-10 lg:px-20 bg-slate-500 absolute top-0 bottom-0 flex items-center flex-col justify-center opacity-0 transition-opacity duration-300">
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
