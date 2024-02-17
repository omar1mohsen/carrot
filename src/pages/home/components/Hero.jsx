import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import Btn from '../../../shared-components/Btn';
import AnimateBox from '../../../shared-components/AnimateBox';

function Hero() {
    const slides = [
        {
            title:"Fashion sale for women's.",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.",
        },
        {
            title:"Explore jeans summer sale.",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.",
        },
    ]

  return (
    <main className='tre-section tre-hero' data-aos="fade-up">
      <div className='container'>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides={true}
      speed={2000}
      autoplay={{
        delay: 4000,
      }}
      modules={[Autoplay]}
      className='tre-hero-slider'
    >
     {slides.map((item, index)=>{
        return(
            <SwiperSlide className='tre-hero-slide' key={index}>
                <div className="tre-hero-contanier">
                    <img src={`/assets/images/hero-${index +1}.jpg`} alt={item.title} loading='lazy' className='tre-image-overlay' />
                    <div className="tre-hero-content">
                        <span className='tre-slide-badge'><span>100%</span> Cotton Fabric</span>
                        <AnimateBox >
                          <h1 className='tre-slide-title'>{item.title}</h1>
                        </AnimateBox>
                        <AnimateBox delay={.2} >
                        <p className='tre-slide-text'>
                          {item.content}
                          </p>
                        </AnimateBox>
                        <AnimateBox delay={.5} >
                          <Btn title="Show Now" />
                        </AnimateBox>

                    </div>
                </div>
            </SwiperSlide>
        )
     })}

    </Swiper>
    </div>

    </main>
  )
}

export default Hero