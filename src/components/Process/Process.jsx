import { Check } from "lucide-react";
import { Container } from "../Container/Container";
import { steps } from "../../pages/Home/data";
import "./Process.scss";

export function Process() {
  return (
    <section className="process">
      <Container className="process__inner">
        <h2>Как мы работаем</h2>
        <div className="process__grid">
          {steps.map((s) => (
            <div key={s.n} className="process__card">
              <div className="process__icon-box"><Check className="process__icon" /></div>
              <h3>{s.t}</h3>
              <p className="process__text">{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}