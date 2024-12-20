import React from 'react';
import Slider from  "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Rahima Akter",
        text: "The coffee here is absolutely amazing—smooth, rich, and full of flavor!",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Tawhida Jannat",
        text: "I love the cozy ambiance; it’s the perfect spot to relax and enjoy a cup.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Shadhin Ahmed",
        text: "The baristas are so friendly and skilled, making every visit a delight.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 4,
        name: "Dewan Ahmed Muhtasim",
        text: "Their cappuccino is the best I’ve ever had—perfectly frothy and flavorful!",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 5,
        name: "Simba Rahi",
        text: "I can’t get enough of their premium blend coffee; it’s always fresh and aromatic.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 6,
        name: "Oggy Oggy",
        text: "The service is quick, and the quality is top-notch every single time!",
        img: "https://picsum.photos/102/102",
    },
]

const Testimonial = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slideToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                    initialSlide: 1,
                },
            },
            
        ]
    };
  return (
    <div className='py-14 mb-10'>
      <div className='container'>
        {/*header Section*/}
        <div data-aos="fade-up" className='text-center mb-10'>
            <h1 className='text-4xl font-bold font-cursive text-gray-800'>
                Testimonials
            </h1>
        </div>
        {/* Testimonials cards section*/}
        <div data-aos="zoom-in">
            <Slider {...settings}>
                {TestimonialData.map((data, index) =>{
                        return(
                            <div className='my-6' key={data.id}>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                    {/*Image Section*/}
                                  <div className='mb-4'>
                                        <img 
                                            src={data.img} 
                                            alt=""
                                            className='rounded-full w-20 h-20'
                                        />
                                    </div>
                                    {/* Content Section*/}
                                    <div className='flex flex-col item-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/70 font-cursive'>{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                </div>
                            </div>
                            
                        );
                })}
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
