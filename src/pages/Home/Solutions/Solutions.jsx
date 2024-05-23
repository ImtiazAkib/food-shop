import demo from "../../../assets/demo.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Solutions.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const data = [
  {
    logo: demo,
  },
  {
    logo: demo,
  },
  {
    logo: demo,
  },
  {
    logo: demo,
  },
  {
    logo: demo,
  },
  {
    logo: demo,
  },
  {
    logo: demo,
  },
  {
    logo: demo,
  },
];

const Solutions = () => {
  return (
    <div className="pb-16">
      <h1 className="text-center text-2xl lg:text-4xl font-bold mb-0 lg:mb-10">
        BEAUTIFUL WEB DESIGN AND SOLUTIONS
      </h1>
      <div className="h-[300px] mx-10">
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
              <img src={singleData.logo} alt="logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Solutions;
