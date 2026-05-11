import { Container } from "./Container";
import { services } from "./data";
import styles from "./Services.module.scss";

export function Services() {
  return (
    <section id="Услуги" className={styles.section}>
      <Container>
        <div className={styles.block}>
          <div className={styles.header}>
            <h2 className={styles.h2}>
              Наши услуги по <span className={styles.accent}>разработке</span>
            </h2>
          </div>
          <div className={styles.grid}>
            {services.map((s) => (
              <div key={s.title} className={styles.col}>
                <p className={styles.colLabel}>{s.title}</p>
                <ul className={styles.list}>
                  {s.items.map((it) => <li key={it} className={styles.item}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
