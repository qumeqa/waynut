import { Container } from "./Container";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.badges}>
          <span className={styles.badge}>Сайт от 20 000 ₽</span>
          <span className={styles.badge}>От 7 дней</span>
        </div>
        <h1>
          Сайты, чат-боты и&nbsp;продвижение,<br />
          которые приносят клиентов
        </h1>
        <p className={styles.lede}>
          Помогаем владельцам бизнеса выйти в онлайн и получать клиентов
          <br className={styles.brMd} /> без технических сложностей и лишних затрат
        </p>
        <div className={styles.actions}>
          <a href="#cta" className={`${styles.btn} ${styles.btnPrimary}`}>Бесплатная консультация</a>
          <a href="#services" className={`${styles.btn} ${styles.btnLight}`}>Рассчитать стоимость</a>
        </div>
      </Container>
      <video
        className={styles.bgVideo}
        src="../src/assets/videos/bg.mp4"
        autoPlay muted loop playsInline preload="auto"
        poster="/videos/hero-poster.jpg"
      />
    </section>
  );
}
