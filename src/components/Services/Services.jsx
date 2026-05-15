import { Container } from "../Container/Container";
import { services } from "../../pages/Home/data";
import "./Services.scss";

export function Services() {
  return (
    <section id="Услуги" className="services">
      <Container>
        <div className="services__block">
          <div className="services__header">
            <h2>
              Наши услуги по <span className="services__accent">разработке</span>
            </h2>
          </div>
          <div className="services__grid">
            {services.map((s) => (
              <div key={s.title} className="services__col">
                <p className="services__col-label">{s.title}</p>
                <ul className="services__list">
                  {s.items.map((it) => <li key={it} className="services__item">{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}