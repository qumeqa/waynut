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
        <div className="faq__grid">
          <div>
            <h2>Часто задаваемые вопросы</h2>
          </div>
          <div className="faq__list">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="faq__item">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="faq__btn">
                    <span className="faq__q">{f.q}</span>
                    <span className="faq__icon">
                      {isOpen ? <Minus /> : <Plus />}
                    </span>
                  </button>
                  <div className={`faq__answer-wrap ${isOpen ? "is-open" : ""}`}>
                    <div className="faq__answer-inner">
                      <p className="faq__a">{f.a}</p>
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