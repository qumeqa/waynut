import { Send, MessageCircle, Mail } from "lucide-react";
import { Container } from "./Container";
import styles from "./FooterCTA.module.scss";

const cols: { title: string; items: { label: string; href?: string }[] }[] = [
  { title: "Документы", items: [{ label: "Политика конфиденциальности" }, { label: "Политика использования cookie" }, { label: "Реквизиты" }] },
  { title: "Мы в соцсетях", items: [{ label: "Telegram" }, { label: "ВКонтакте" }, { label: "Max" }] },
  { title: "Для клиентов и партнеров", items: [{ label: "Telegram" }, { label: "ВКонтакте" }, { label: "info@waynut.ru", href: "mailto:info@waynut.ru" }] },
  { title: "Для вакансий", items: [{ label: "Telegram" }, { label: "ВКонтакте" }, { label: "info@waynut.ru", href: "mailto:hr@waynut.ru" }] },
];

export function FooterCTA() {
  return (
    <section id="cta" className={styles.section}>
      <Container>
        <div className={styles.block}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h2 className={styles.h2}>Давайте обсудим ваш проект</h2>
              <div className={styles.socials}>
                <a href="#" aria-label="Telegram" className={styles.social}><Send /></a>
                <a href="#" aria-label="VK" className={styles.social}><MessageCircle /></a>
                <a href="#" aria-label="Email" className={styles.social}><Mail /></a>
              </div>
            </div>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputs}>
                {["Имя*", "Почта*", "Телефон*"].map((p) => (
                  <input key={p} placeholder={p} className={styles.input} />
                ))}
              </div>
              <p className={styles.policy}>
                Отправляя заявку, вы соглашаетесь с{" "}
                <a href="#" className={styles.policyLink}>политикой конфиденциальности</a>
              </p>
              <button type="submit" className={styles.submit}>Отправить заявку</button>
            </form>
          </div>
          <div className={styles.cols}>
            {cols.map((c) => (
              <div key={c.title} className={styles.col}>
                <p className={styles.colLabel}>{c.title}</p>
                <ul className={styles.colList}>
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.href || "#"} className={styles.colLink}>{it.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            <a href="#" className={styles.logo}>
              Waynut<span className={styles.dot}>.</span>
            </a>
            <span className={styles.copyright}>© 2026 Waynut</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
