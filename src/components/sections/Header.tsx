import { Container } from "./Container";
import styles from "./Header.module.scss";

const links = ["Услуги", "Кейсы", "Отзывы", "Калькулятор", "Блог", "Контакты"];

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#" className={styles.logo}>
          Waynut<span className={styles.dot}>.</span>
        </a>
        <nav className={styles.nav}>
          {links.map((l) => (
            <a key={l} href={`#${l}`} className={styles.link}>{l}</a>
          ))}
        </nav>
        <a href="#cta" className={styles.cta}>Обсудить проект</a>
      </Container>
    </header>
  );
}