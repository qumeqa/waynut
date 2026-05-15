import { Container } from "../Container/Container";
import "./Hero.scss";

export function Hero() {
  return (
    <section className="hero">
      <div aria-hidden className="hero__bg">
        <div className="hero__bg-radial" />
        <div className="hero__bg-fade" />
        <svg className="hero__bg-wave" viewBox="0 0 1920 1130" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <pattern id="wave" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 30 Q15 10 30 30 T60 30" stroke="currentColor" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1920" height="1130" fill="url(#wave)" />
        </svg>
      </div>
      <Container className="hero__inner">
        <div className="hero__badges">
          <span className="hero__badge">Сайт от 20 000 ₽</span>
          <span className="hero__badge">От 7 дней</span>
        </div>
        <h1>
          Сайты, чат-боты и&nbsp;продвижение,<br />
          которые приносят клиентов
        </h1>
        <p className="hero__lede">
          Помогаем владельцам бизнеса выйти в онлайн и получать клиентов
          <br className="hero__br-md" /> без технических сложностей и лишних затрат
        </p>
        <div className="hero__actions">
          <a href="#cta" className="hero__btn hero__btn--primary">Бесплатная консультация</a>
          <a href="#services" className="hero__btn hero__btn--light">Рассчитать стоимость</a>
        </div>
      </Container>
    </section>
  );
}