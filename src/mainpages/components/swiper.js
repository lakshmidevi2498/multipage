
import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import SwiperCore from 'swiper'; 
import 'swiper/swiper-bundle.css'; 
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';


SwiperCore.use([Pagination, Navigation]);

const MySwiper=()=> {
  
   
  const [swiperRef, setSwiperRef] = useState(null);

  const images = [
    { src: './assets/images/imgs1.jpg' ,text:"Roses"},
    { src: './assets/images/imgs2.jpg' ,text:"Lilly"},
    { src: './assets/images/imgs3.jpg',text:"Orchids" },
    { src: './assets/images/imgs6.jpg' ,text:"Paradise"},
    { src: './assets/images/imgs7.jpg' ,text:"Crimsons"},
    { src: './assets/images/imgs4.jpg' ,text:"Carnations"},
    { src: './assets/images/imgs5.jpg' ,text:"Gerberas"},
   
  ];
 

  return (
  
    <div className="mySwiper ">
       <h2 class="text-center  mt-4">Flowers by Types</h2>
        <p class="text-center">Discover the Everlasting Elegance of Flowers</p>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next',
        }} // Enable navigation arrows
        breakpoints={{
            426: {
              slidesPerView: 3,
            },

            769: {
              slidesPerView: 4,
            },
  
            
            1025: {
              slidesPerView: 5,
            },
          }}
      >
        

        {images.map((image, index) => (
          <SwiperSlide key={index}>
           <div className='container mt-2'>
            <div className='position-relative card-container'>
                <img src={image.src} alt={`Slide ${index + 1}`} className='swiper-slide img rounded-4'/>
                <div className="top-right">
                    <i className="fa-solid fa-cart-shopping p-2 bg-light rounded-5" style={{ position: "absolute", top: '-25px', left: '0px'}}></i>
                </div>
                <div className="top-right rightt"> 
                  <i class="fa-regular fa-heart p-2 bg-light rounded-5"></i>
                </div>
                <div className='card-body text-center'>
                    <h6 className='text-dark'>{image.text}</h6>
                </div>
            </div>
        </div>

          </SwiperSlide>
          
        ))}
         <div className="custom-swiper-button-prev"></div>
      <div className="custom-swiper-button-next"></div>
      </Swiper>
    </div>
  );
}

export default MySwiper;

