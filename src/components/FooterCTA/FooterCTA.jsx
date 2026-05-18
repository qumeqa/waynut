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
        <div className="block">
          <div className="top">
            <div className="left">
              <h2>Давайте обсудим ваш проект</h2>
              <div className="socials">
                <a href="#" aria-label="Telegram" className="social"><Send /></a>
                <a href="#" aria-label="VK" className="social"><MessageCircle /></a>
                <a href="#" aria-label="Email" className="social"><Mail /></a>
              </div>
            </div>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="inputs">
                {["Имя*", "Почта*", "Телефон*"].map((p) => (
                  <input key={p} placeholder={p} className="input" />
                ))}
              </div>
              <p className="policy">
                Отправляя заявку, вы соглашаетесь с{" "}
                <a href="#" className="policy-link">политикой конфиденциальности</a>
              </p>
              <button type="submit" className="btn btn--primary submit">Отправить заявку</button>
            </form>
          </div>
          <div className="cols">
            {cols.map((c) => (
              <div key={c.title} className="col">
                <p className="col-label">{c.title}</p>
                <ul className="col-list">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <a href={it.href || "#"} className="col-link">{it.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bottom">
            <a href="#" className="logo">
              Waynut<span className="dot">.</span>
            </a>
            <span className="copyright">© 2026 Waynut</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
