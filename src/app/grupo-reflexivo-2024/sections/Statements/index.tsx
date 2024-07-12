"use client";
import { StatementProps } from "@/slices/Statements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";
import { PrismicImage } from "@prismicio/react";
import Image from "next/image";
import { next, prev } from "@/app/assets";
import { useState } from "react";

export default function Statements({ slice }: StatementProps) {
  const [current, setCurrent] = useState(1);
  return (
    <section id="statement" className="statements statements--container">
      <div className="statements--content">
        <h3 className="statements--title">
          O QUE DIZEM SOBRE OS
          <br />
          <strong>GRUPOS REFLEXIVOS</strong>
        </h3>
      </div>
      <div className="statements--carousel-container">
        <Swiper
          slidesPerView="auto"
          onActiveIndexChange={(e) => setCurrent(e.activeIndex + 1)}
          centeredSlides
          spaceBetween={16}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
        >
          {slice.primary.statements.map((statement) => (
            <SwiperSlide key={statement.name}>
              <div className="statements--item-container">
                <div className="statements--person">
                  <div className="statements--person-image">
                    <PrismicImage field={statement.image} />
                  </div>
                  <div className="statements--person-details">
                    <p className="name">{statement.name}</p>
                    <p className="subtitle">{statement.details}</p>
                  </div>
                </div>
                <div className="statemets--text">
                  <p>{statement.statement}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="statements--carousel-controllers">
            <button className="image-swiper-button-prev">
              <Image src={prev} alt="voltar" />
            </button>
            <span>
              {current}/{slice.primary.statements.length}
            </span>
            <button className="image-swiper-button-next">
              <Image src={next} alt="avançar" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

