import React from 'react'
import { SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Swiper } from 'swiper/react';
import AnimateBox from '../../../shared-components/AnimateBox';

function Services() {
    const  services = [
        {title:"Product Packing",description:"Lorem ipsum dolor sit amet, consectetur adipisicing.",icon:"ri-red-packet-line"},
        {title:"24X7 Support",description:"Lorem ipsum dolor sit amet, consectetur adipisicing.",icon:"ri-customer-service-2-line"},
        {title:"Delivery in 5 Days",description:"Lorem ipsum dolor sit amet, consectetur adipisicing.",icon:"ri-truck-line"},
        {title:"Payment Secure",description:"Lorem ipsum dolor sit amet, consectetur adipisicing.",icon:"ri-money-dollar-box-line"},
        {title:"Product Packing",description:"Lorem ipsum dolor sit amet, consectetur adipisicing.",icon:"ri-red-packet-line"},
    ]
  return (
    <AnimateBox>
    <main className='tre-section'>
        <div className="container">
        <Swiper
          spaceBetween={25}
          slidesPerView={4}
          loop="true"
          speed={2000}
          modules={[FreeMode]}
          className="tre-services-slider"
        >
          {services.map((service, index) => {
            return (
              <SwiperSlide className={`tre-service-slide`} key={index}>
                <div className="tre-service-contanier">
                    <div className='tre-service-icon d-flex-cent'>
                        <span className='tre-icon'><i className={service.icon}></i></span>
                    </div>
                    <div className='tre-service-content'>
                        <h5 className='tre-service-name'> {service.title}</h5>
                        <p className='tre-service-desc'>{service.description}</p>
                    </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        </div>
    </main>
    </AnimateBox>
  )
}

export default Services