import { useState } from "react";
import { Plus } from "lucide-react";
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
                <div
                  key={f.q}
                  className="item"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="q-row">
                    <h3>{f.q}</h3>
                    <span className={`icon${isOpen ? " is-open" : ""}`}>
                      <Plus />
                    </span>
                  </div>
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