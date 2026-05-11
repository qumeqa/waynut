import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "./Container";
import { faqs } from "./data";
import styles from "./FAQ.module.scss";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.h2}>Часто задаваемые вопросы</h2>
          </div>
          <div className={styles.list}>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className={styles.item}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className={styles.btn}>
                    <span className={styles.q}>{f.q}</span>
                    <span className={styles.icon}>
                      {isOpen ? <Minus /> : <Plus />}
                    </span>
                  </button>
                  <div className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ""}`}>
                    <div className={styles.answerInner}>
                      <p className={styles.a}>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
