import { Container } from "./Container";
import { projects } from "./data";
import styles from "./Cases.module.scss";

export function Cases() {
  return (
    <section id="Кейсы" className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.h2}>Реализованные проекты</h2>
        <div className={styles.grid}>
          {projects.map((p) => (
            <a key={p.name} href="#" className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={p.img} alt={p.name} loading="lazy" className={styles.img} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{p.name}</h3>
                <p className={styles.text}>{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
