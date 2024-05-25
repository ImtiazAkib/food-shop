// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./Solutions.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

import hero from "../../../assets/Second-Section.png";

const Solutions = () => {
  return (
    <>
      <div className="hero lg:min-h-screen pt-5">
        <div className="hero-content flex-col lg:flex-row-reverse gap-14 lg:gap-20">
          <img
            src={hero}
            className="lg:max-w-xl max-w-xs md:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="text-justify">
            <h1 className="text-[1.4rem] md:text-3xl lg:text-4xl font-bold lg:leading-[3rem] text-[#02006b]">
              WEBSITE DESIGN AND DIGITAL MARKETING SOLUTIONS FOR ALL INDUSTRY
            </h1>
            <p className="py-6 text-white text-md md:text-lg">
              Take Your Business to New Heights with Custom Website Design and
              Digital Marketing Solution. Our expertise is geared towards
              helping companies win online. We will help you create user
              friendly websites and reap the benefits of your labour with our
              effective online marketing services. Let&apos;s work with you to
              express yourself effectively, draw customers and grow your
              business.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="h-[300px] mx-10">
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
      </div> */}
    </>
  );
};

export default Solutions;
