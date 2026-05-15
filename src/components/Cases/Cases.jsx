import { Container } from "../Container/Container";
import { projects } from "../../pages/Home/data";
import "./Cases.scss";

export function Cases() {
  return (
    <section id="Кейсы" className="cases">
      <Container className="cases__inner">
        <h2>Реализованные проекты</h2>
        <div className="cases__grid">
          {projects.map((p) => (
            <a key={p.name} href="#" className="cases__card">
              <div className="cases__img-wrap">
                <img src={p.img} alt={p.name} loading="lazy" className="cases__img" />
              </div>
              <div className="cases__body">
                <h3>{p.name}</h3>
                <p className="cases__text">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}