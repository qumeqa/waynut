import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { reviews } from "./data";
import styles from "./Reviews.module.scss";

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
    <section id="Отзывы" className={styles.section}>
      <Container>
        <div className={styles.block}>
          <div className={styles.header}>
            <h2 className={styles.h2}>Отзывы наших клиентов</h2>
            <div className={styles.nav}>
              <button onClick={prev} disabled={safeIndex === 0} aria-label="Предыдущий" className={styles.navBtn}>
                <ArrowLeft className={styles.navIcon} />
              </button>
              <button onClick={next} disabled={safeIndex >= maxIndex} aria-label="Следующий" className={styles.navBtn}>
                <ArrowRight className={styles.navIcon} />
              </button>
            </div>
          </div>
          <div className={styles.viewport}>
            <div className={styles.track} style={{ transform: `translateX(-${safeIndex * (100 / perView)}%)` }}>
              {reviews.map((r) => (
                <div key={r.name} className={styles.card} style={{ width: `${100 / perView}%` }}>
                  <p className={styles.text}>{r.text}</p>
                  <div className={styles.author}>
                    <img src={r.avatar} alt={r.name} className={styles.avatar} />
                    <div className={styles.authorMeta}>
                      <div className={styles.name}>{r.name}</div>
                      <div className={styles.role}>{r.role}</div>
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
