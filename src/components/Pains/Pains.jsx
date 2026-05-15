import { Container } from "../Container/Container";
import { pains } from "../../pages/Home/data";
import "./Pains.scss";

export function Pains() {
  return (
    <section className="pains">
      <Container className="pains__inner">
        <h2>Знакомая ситуация?</h2>
        <div className="pains__grid">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className="pains__card">
                <div className="pains__icon-box"><Icon className="pains__icon" /></div>
                <div className="pains__body">
                  <h3>{p.t}</h3>
                  <p className="pains__text">{p.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}