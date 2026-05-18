import { Check } from "lucide-react";
import { Container } from "../Container/Container";
import { steps } from "../../pages/Home/data";
import "./Process.scss";

export function Process() {
  return (
    <section className="process">
      <Container className="inner">
        <h2>Как мы работаем</h2>
        <div className="grid">
          {steps.map((s) => (
            <div key={s.n} className="card">
              <div className="icon-box"><Check className="icon" /></div>
              <div className="body">
                <h3>{s.t}</h3>
                <p className="text">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
