import React from 'react';
import Slider from 'react-slick';


const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div className="h-auto sm:h-[500px] bg-purple-500 relative before:bg-gradient-to-r before:from-purple-600 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider className="h-full hidden sm:block" {...settings}>
      <div>
					<div className="h-[500px] bg-center bg-no-repeat bg-cover"
					     style={{backgroundImage: 'url(https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg)'}}></div>
				</div>
				<div>
					<div className="h-[500px] bg-center bg-no-repeat bg-cover"
					     style={{backgroundImage: 'url(https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg)'}}></div>
				</div>
        </Slider>
    </div>
  )
}

export default HeroSection