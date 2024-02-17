import React, { useEffect, useState } from "react";
import fetchData from "../../../utilits/fetchData";
import { SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Swiper } from "swiper/react";
import ProductCard from "../../../shared-components/ProductCard";
import AnimateBox from "../../../shared-components/AnimateBox";

function NewArrivals() {
  const [arrivals, setArrivals] = useState([]);
  useEffect(() => {
    fetchData(process.env.REACT_APP_JEWELERY_URL).then((res) => {
      setArrivals(res);
    });
  }, []);

  return (
    <main className="tre-section tre-arrivals-sec">
      <div className="container">
        <AnimateBox>
          <h5 className="tre-sec-title">New Arrivals</h5>
        </AnimateBox>
        <AnimateBox delay={0.2}>
          <p className="tre-sec-dec">Browse The Collection of Top Products.</p>
        </AnimateBox>
        <AnimateBox delay={0.4}>
          <Swiper
            spaceBetween={25}
            slidesPerView={4}
            loop="true"
            speed={2000}
            modules={[FreeMode]}
            className="tre-arrivals-slider"
          >
            {arrivals.map((product, index) => {
              return (
                <SwiperSlide className={`tre-product-slide`} key={index}>
                  <ProductCard product={product} key={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </AnimateBox>
      </div>
    </main>
  );
}

export default NewArrivals;
