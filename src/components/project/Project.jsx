import React from 'react';
import "./Project.css";
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export const Project = () => {

  return (
    <section className="project container section" id="project">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Web Projects</span>

        <Swiper className="project__container"
         spaceBetween={30}
         slidesPerView={1}
         grabCursor={true}
         loop={true}
         centeredSlides={true}
         autoplay={{
           delay: 6000,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
      >
        {Data.map(({id,image,title,description,github,host}) =>{
            return(
              <SwiperSlide className="project__card" key={id}>
              <div className="portfolio-item">
              <div className="image">
              <img src={image} alt="" className="project__img"/>
              </div>
              <div className="hover-items">
  <h3>Project Source</h3>
  <div className="icons">
      <a href={github} className="icon" target="_blank" rel="noreferrer">
          <i className="uil uil-github"></i>
      </a>
      <a href={host} className="icon" target="_blank" rel="noreferrer">
          <i className="bx bxl-chrome"></i>
      </a>
  </div>
</div>
</div>        <div className="project__word">
              <h3 className="project__name">{title}</h3>
              <p className="project__description">{description}</p></div>
          </SwiperSlide>
                
            )
        })}

        </Swiper>
    </section>
   
  )
}
