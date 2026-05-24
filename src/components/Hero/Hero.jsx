import { Container } from "../Container/Container";
import "./Hero.scss";
import bgVideo from "../../assets/videos/bg.mp4";
import bgImage from "../../assets/images//hero/bg.webp";

const defaultBadges = ["Сайт от 20 000 ₽", "От 7 дней"];

const defaultTitle = (
  <>
    Сайты, чат-боты и&nbsp;продвижение,<br />
    которые приносят клиентов
  </>
);

const defaultLede = (
  <>
    Помогаем владельцам бизнеса выйти в&nbsp;онлайн и&nbsp;получать клиентов
    <br className="br-md" /> без&nbsp;технических сложностей и&nbsp;лишних затрат
  </>
);

const defaultActions = [
  { label: "Бесплатная консультация", href: "#cta", variant: "primary" },
  { label: "Рассчитать стоимость", href: "#services", variant: "light" },
];

export function Hero({
  badges = defaultBadges,
  title = defaultTitle,
  lede = defaultLede,
  actions = defaultActions,
}) {
  return (
    <section className="hero">
      <div className="gr"></div>
      <video
        className="bg"
        src={bgVideo}
        autoPlay muted loop playsInline preload="auto"
        poster={bgImage}
      />
      <Container className="inner">
        <div className="badges">
          {badges.map((b) => (
            <span key={b} className="badge">{b}</span>
          ))}
        </div>
        <div className="hero-text">
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
        </div>
        <div className="actions">
          {actions.map((a) => (
            <a key={a.label} href={a.href} className={`btn btn--${a.variant}`}>{a.label}</a>
          ))}
        </div>
      </Container>
    </section>
  );
}