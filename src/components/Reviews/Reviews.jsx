import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "../Container/Container";
import { reviews } from "../../pages/Home/data";
import "./Reviews.scss";

export function Reviews() {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);
  const safeIndex = Math.min(index, maxIndex);
  const prev = () => setIndex((i) => Math.max(0, Math.min(i, maxIndex) - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, Math.min(i, maxIndex) + 1));

  return (
    <section id="Отзывы" className="reviews">
      <Container>
        <div className="reviews__block">
          <div className="reviews__header">
            <h2>Отзывы наших клиентов</h2>
            <div className="reviews__nav">
              <button onClick={prev} disabled={safeIndex === 0} aria-label="Предыдущий" className="reviews__nav-btn">
                <ArrowLeft className="reviews__nav-icon" />
              </button>
              <button onClick={next} disabled={safeIndex >= maxIndex} aria-label="Следующий" className="reviews__nav-btn">
                <ArrowRight className="reviews__nav-icon" />
              </button>
            </div>
          </div>
          <div className="reviews__viewport">
            <div className="reviews__track" style={{ transform: `translateX(-${safeIndex * (100 / perView)}%)` }}>
              {reviews.map((r) => (
                <div key={r.name} className="reviews__card" style={{ width: `${100 / perView}%` }}>
                  <p className="reviews__text">{r.text}</p>
                  <div className="reviews__author">
                    <img src={r.avatar} alt={r.name} className="reviews__avatar" />
                    <div className="reviews__author-meta">
                      <div className="reviews__name">{r.name}</div>
                      <div className="reviews__role">{r.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}