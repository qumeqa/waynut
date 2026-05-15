import { Send, MessageCircle, Mail } from "lucide-react";
import { Container } from "../Container/Container";
import "./FooterCTA.scss";

const cols = [
  { title: "Документы", items: [{ label: "Политика конфиденциальности" }, { label: "Политика использования cookie" }, { label: "Реквизиты" }] },
  { title: "Мы в соцсетях", items: [{ label: "Telegram" }, { label: "ВКонтакте" }, { label: "Max" }] },
  { title: "Для клиентов и партнеров", items: [{ label: "Telegram" }, { label: "ВКонтакте" }, { label: "info@waynut.ru", href: "mailto:info@waynut.ru" }] },
  { title: "Для вакансий", items: [{ label: "Telegram" }, { label: "ВКонтакте" }, { label: "info@waynut.ru", href: "mailto:hr@waynut.ru" }] },
];

export function FooterCTA() {
  return (
    <section id="cta" className="footer-cta">
      <Container>
        <div className="footer-cta__block">
          <div className="footer-cta__top">
            <div className="footer-cta__left">
              <h2>Давайте обсудим ваш проект</h2>
              <div className="footer-cta__socials">
                <a href="#" aria-label="Telegram" className="footer-cta__social"><Send /></a>
                <a href="#" aria-label="VK" className="footer-cta__social"><MessageCircle /></a>
                <a href="#" aria-label="Email" className="footer-cta__social"><Mail /></a>
              </div>
            </div>
            <form className="footer-cta__form" onSubmit={(e) => e.preventDefault()}>
              <div className="footer-cta__inputs">
                {["Имя*", "Почта*", "Телефон*"].map((p) => (
                  <input key={p} placeholder={p} className="footer-cta__input" />
                ))}
              </div>
              <p className="footer-cta__policy">
                Отправляя заявку, вы соглашаетесь с{" "}
                <a href="#" className="footer-cta__policy-link">политикой конфиденциальности</a>
              </p>
              <button type="submit" className="footer-cta__submit">Отправить заявку</button>
            </form>
          </div>
          <div className="footer-cta__cols">
            {cols.map((c) => (
              <div key={c.title} className="footer-cta__col">
                <p className="footer-cta__col-label">{c.title}</p>
                <ul className="footer-cta__col-list">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.href || "#"} className="footer-cta__col-link">{it.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-cta__bottom">
            <a href="#" className="footer-cta__logo">
              Waynut<span className="footer-cta__dot">.</span>
            </a>
            <span className="footer-cta__copyright">© 2026 Waynut</span>
          </div>
        </div>
      </Container>
    </section>
  );
}