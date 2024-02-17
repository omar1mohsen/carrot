import React from "react";
import { SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import AnimateBox from "../../../shared-components/AnimateBox";

// assets/images/logo.png
function LastNews() {
  const news = [
    {
      author: "Food",
      content: "Best guide to Shopping for organic ingredients.",
      day: "12",
      month: "feb",
    },
    {
      author: "Snacks",
      content: "Urna pretium elit mauris cursus at elit Vestibulum.",
      day: "10",
      month: "feb",
    },
    {
      author: "Snacks",
      content: "Cursus at elit vestibulum urna pretium elit mauris.",
      day: "29",
      month: "jun",
    },
    {
      author: "Vegetable",
      content: "Urna pretium elit mauris cursus at elit Vestibulum.",
      day: "28",
      month: "jun",
    },
  ];
  return (
    <main className="tre-section tre-news-sec">
      <div className="container">
        <AnimateBox>
          <h5 className="tre-sec-title ">Latest News</h5>
        </AnimateBox>
        <AnimateBox delay={0.2}>
          <p className="tre-sec-dec">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore lacus vel facilisis.
          </p>
        </AnimateBox>
        <AnimateBox delay={0.4}>
          <div className="tre-news-wrap">
            <Swiper
              spaceBetween={15}
              slidesPerView={3}
              loop="true"
              modules={[FreeMode]}
              className="tre-news-slider"
            >
              {news.map((item, index) => {
                return (
                  <SwiperSlide className={`tre-new-slide`} key={index}>
                    <div className="tre-new-card">
                      <div className="tre-new-image">
                        <img
                          src={`assets/images/news-${index + 1}.jpg`}
                          alt=""
                        />
                        <div className="tre-new-data">
                          <span className="tre-post-time">
                            {item.day}
                            <code>{item.month}</code>
                          </span>
                        </div>
                      </div>
                      <div className="tre-new-content">
                        <span className="tre-author">
                          By Admin |<code>{item.author}</code>
                        </span>
                        <h5 className="tre-new-text">{item.content}</h5>
                        <Link to="#" className="tre-new-btn">
                          Read More
                          <span className="tre-btn-icon-wrap">
                            <i className="ri-arrow-right-line" />
                            <span className="tre-dots-wrap">
                              <i />
                              <i />
                              <i />
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </AnimateBox>
      </div>
    </main>
  );
}

export default LastNews;
