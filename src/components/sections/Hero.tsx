import { Container } from "./Container";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div aria-hidden className={styles.bg}>
        <div className={styles.bgRadial} />
        <div className={styles.bgFade} />
        <svg className={styles.bgWave} viewBox="0 0 1920 1130" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <pattern id="wave" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 30 Q15 10 30 30 T60 30" stroke="currentColor" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1920" height="1130" fill="url(#wave)" />
        </svg>
      </div>
      <Container className={styles.inner}>
        <div className={styles.badges}>
          <span className={styles.badge}>Сайт от 20 000 ₽</span>
          <span className={styles.badge}>От 7 дней</span>
        </div>
        <h1 className={styles.title}>
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
    </section>
  );
}
