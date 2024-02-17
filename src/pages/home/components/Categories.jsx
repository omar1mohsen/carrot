import { FiShoppingBag } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa6";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiDress } from "react-icons/pi";
import { GiEmeraldNecklace } from "react-icons/gi";
import { SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper } from "swiper/react";

import { Link } from "react-router-dom";
import AnimateBox from "../../../shared-components/AnimateBox";
function Categories() {
  const categories_objs = [
    { name: "All", link: "all", icon: <FiShoppingBag />, items: "75" },
    {
      name: "jewelery",
      link: "jewelery",
      icon: <GiEmeraldNecklace />,
      items: "55",
    },
    {
      name: "Electronics",
      link: "electronics",
      icon: <FaLaptop />,
      items: "38",
    },
    {
      name: "Men",
      link: "men's clothing",
      icon: <LiaTshirtSolid />,
      items: "104",
    },
    {
      name: "Woman",
      link: "women's clothing",
      icon: <PiDress />,
      items: "212",
    },
  ];

  return (
    <AnimateBox>
      <main className="tre-categories-sec">
        <div className="container">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            loop="true"
            speed={2000}
            autoplay={{
              delay: 4000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, FreeMode]}
            className="tre-categories-slider"
          >
            {categories_objs.map((category, index) => {
              return (
                <SwiperSlide
                  className={`tre-category-slide tre-category-${index}`}
                  key={index}
                >
                  <div className="tre-category-contanier">
                    <span className="tre-category-icon d-flex-cent">
                      {category.icon}
                    </span>
                    <div className="tre-category-ceontent">
                      <Link
                        to={`products/${category.link}`}
                        className="tre-category-name"
                      >
                        {category.name}
                      </Link>
                      <span className="tre-category-amount">
                        ({category.items})
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </main>
    </AnimateBox>
  );
}

export default Categories;
