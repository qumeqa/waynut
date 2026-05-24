import { Container } from "../Container/Container";
import { steps } from "../../pages/Home/data";
import "./Process.scss";
import gr from '../../assets/images/gr.png';

export function Process() {
  return (
    <section className="process">
      <Container className="inner">
        <h2>Как мы работаем</h2>
        <div className="grid">
          {steps.map((s) => (
            <div key={s.n} className="card">
              <img src={s.icon} alt="" className="icon" />
              <div className="body">
                <h3>{s.t}</h3>
                <p className="text">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={gr} className="gr" alt="Градиент" />
      </Container>
    </section>
  );
}