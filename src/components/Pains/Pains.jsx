import { Container } from "../Container/Container";
import { pains } from "../../pages/Home/data";
import "./Pains.scss";

export function Pains() {
  return (
    <section className="pains">
      <Container className="inner">
        <h2>Знакомая ситуация?</h2>
        <div className="grid">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className="card">
                <div className="icon-box"><Icon className="icon" /></div>
                <div className="body">
                  <h3>{p.t}</h3>
                  <p className="text">{p.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
