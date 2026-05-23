import { Container } from "../Container/Container";
import "./Hero.scss";
import bgVideo from "../../assets/videos/bg.mp4";
import bgImage from "../../assets/images//hero/bg.webp";

export function Hero() {
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
          <span className="badge">Сайт от 20 000 ₽</span>
          <span className="badge">От 7 дней</span>
        </div>
        <div className="hero-text">
          <h1>
            Сайты, чат-боты и&nbsp;продвижение,<br />
            которые приносят клиентов
          </h1>
          <p className="lede">
            Помогаем владельцам бизнеса выйти в&nbsp;онлайн и&nbsp;получать клиентов
            <br className="br-md" /> без&nbsp;технических сложностей и&nbsp;лишних затрат
          </p>
        </div>
        <div className="actions">
          <a href="#cta" className="btn btn--primary">Бесплатная консультация</a>
          <a href="#services" className="btn btn--light">Рассчитать стоимость</a>
        </div>
      </Container>
    </section>
  );
}
