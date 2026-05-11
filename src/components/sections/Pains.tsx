import { Container } from "./Container";
import { pains } from "./data";
import styles from "./Pains.module.scss";

export function Pains() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.h2}>Знакомая ситуация?</h2>
        <div className={styles.grid}>
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className={styles.card}>
                <div className={styles.iconBox}><Icon className={styles.icon} /></div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{p.t}</h3>
                  <p className={styles.text}>{p.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
