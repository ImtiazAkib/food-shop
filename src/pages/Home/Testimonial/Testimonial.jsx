// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import avatar1 from "../../../assets/test1.jpg";
import avatar2 from "../../../assets/test2.jpg";
import avatar3 from "../../../assets/test3.jpg";

const data = [
  {
    img: avatar1,
    info: "Choosing webtrails.de for our website development was the best decision we made. Their team's professionalism and attention to detail ensured a seamless process and a final product that exceeded our expectations.",
    name: "Patrick Metzger",
  },
  {
    img: avatar2,
    info: "We couldn't be happier with the website webtrails.de created for us. Their dedication to understanding our needs and delivering a user-friendly design truly set them apart. Thank you for an exceptional experience!",
    name: "Wolfgang Sommer",
  },
  {
    img: avatar3,
    info: "Impressed doesn't even begin to describe how we feel about the website developed by webtrails.de. From concept to launch, their team demonstrated expertise, creativity, and unwavering support. Highly recommend their services!",
    name: "Susanne Boehm",
  },
  {
    img: avatar1,
    info: "Working with webtrails.de was a game-changer for our business. Their expertise in web development and commitment to delivering results ensured our project was a success. We're grateful for their professionalism and creativity.",
    name: "Swen Peters",
  },
  {
    img: avatar1,
    info: "The website developed by webtrails.de has been instrumental in our online presence. Their team's innovative approach, attention to detail, and responsiveness made the entire process a breeze. We're thrilled with the outcome and look forward to future collaborations.",
    name: "Frank Bader",
  },
];

const Testimonial = () => {
  return (
    <div className="mx-0 md:mx-96 my-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-10">
        Testimonials
      </h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((singleData, index) => (
          <SwiperSlide className="py-5 px-14 lg:px-20" key={index}>
            <div className="">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-36 h-36 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={singleData.img}
                />
                <p className="leading-relaxed">{singleData.info}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {singleData.name}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
