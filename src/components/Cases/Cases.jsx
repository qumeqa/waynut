import { Container } from "../Container/Container";
import { projects } from "../../pages/Home/data";
import "./Cases.scss";

export function Cases() {
  return (
    <section id="Кейсы" className="cases">
      <Container className="inner">
        <h2>Реализованные проекты</h2>
        <div className="grid">
          {projects.map((p) => (
            <a key={p.name} href="#" className="card">
              <div className="img-wrap">
                <img src={p.img} alt={p.name} loading="lazy" className="img" />
              </div>
              <div className="body">
                <h3>{p.name}</h3>
                <p className="text">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
