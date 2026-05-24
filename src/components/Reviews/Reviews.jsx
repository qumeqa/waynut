// Установить: npm install swiper
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "../Container/Container";
import { reviews } from "../../pages/Home/data";
import "./Reviews.scss";

export function Reviews() {
  const swiperRef = useRef(null);

  return (
    <section id="Отзывы" className="reviews">
      <Container>
        <div className="block">
          <div className="header">
            <h2>Отзывы наших клиентов</h2>
            <div className="nav">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Предыдущий"
                className="nav-btn"
              >
                <ArrowLeft className="nav-icon" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Следующий"
                className="nav-btn"
              >
                <ArrowRight className="nav-icon" />
              </button>
            </div>
          </div>

          <div className="viewport">
            <Swiper
              onSwiper={(s) => { swiperRef.current = s; }}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {reviews.map((r) => (
                <SwiperSlide key={r.name}>
                  <div className="card">
                    <p className="text">{r.text}</p>
                    <div className="author">
                      <img src={r.avatar} alt={r.name} className="avatar" />
                      <div className="author-meta">
                        <div className="name">{r.name}</div>
                        <div className="role">{r.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}