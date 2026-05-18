import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Container } from "../Container/Container";
import { faqs } from "../../pages/Home/data";
import "./FAQ.scss";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq">
      <Container>
        <div className="grid">
          <div>
            <h2>Часто задаваемые вопросы</h2>
          </div>
          <div className="list">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="item">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="q-btn">
                    <span className="q">{f.q}</span>
                    <span className="icon">
                      {isOpen ? <Minus /> : <Plus />}
                    </span>
                  </button>
                  <div className={`answer-wrap ${isOpen ? "is-open" : ""}`}>
                    <div className="answer-inner">
                      <p className="a">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
