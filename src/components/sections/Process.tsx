import { Check } from "lucide-react";
import { Container } from "./Container";
import { steps } from "./data";
import styles from "./Process.module.scss";

export function Process() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.h2}>Как мы работаем</h2>
        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.n} className={styles.card}>
              <div className={styles.iconBox}><Check className={styles.icon} /></div>
              <h3 className={styles.title}>{s.t}</h3>
              <p className={styles.text}>{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
