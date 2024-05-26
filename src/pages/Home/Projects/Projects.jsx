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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  return (
    <div className="bg-[#000611] text-white py-10 pb-20">
      <div className="flex justify-center py-20">
        <div className="basis-[40ch] md:basis-[80ch] text-center">
          <h1 className="text-lg lg:text-2xl font-bold mb-5 lg:mb-10 divider divider-primary">
            Our Projects
          </h1>
          <p>
            We&apos;ve discovered that most of the projects we bid on fall into
            distinct categories. To simplify your choice, we&apos;ve developed
            three different products. Each of these products is designed for a
            specific purpose and delivers a unique result.
          </p>
        </div>
      </div>
      <div className="mx-10">
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {data.map((singleData, index) => (
            <SwiperSlide key={index}>
              <img src={singleData.img} alt="project" className="h-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
