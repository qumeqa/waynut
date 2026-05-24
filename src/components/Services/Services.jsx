import { Container } from "../Container/Container";
import { services } from "../../pages/Home/data";
import "./Services.scss";
import TypeIt from "typeit-react";

export function Services() {
  return (
    <section id="Услуги" className="services">
      <Container>
        <div className="block">
          <div className="header">
            <div className="App">
              <h2>
                Наши услуги по{" "}
                <TypeIt
                  options={{
                    cursor: false,
                    loop: true,
                    waitUntilVisible: true,
                    speed: 50,
                    deleteSpeed: 50,
                    startDelay: 0,
                    loopDelay: 0,
                  }}
                  getBeforeInit={(instance) => {
                    instance
                      .type('<span class="accent">разработке</span>')
                      .pause(1500)
                      .delete()
                      .type('<span class="accent">поддержке</span>')
                      .pause(1500)
                      .delete()
                      .type('<span class="accent">продвижению</span>')
                      .pause(1500)
                      .delete()
                      .type('<span class="accent">дизайну</span>')
                      .pause(1500)
                      .delete();
                    return instance;
                  }}
                />
              </h2>
            </div>
          </div>
          <div className="grid">
            {services.map((s) => (
              <div key={s.title} className="col">
                <p className="col-label">{s.title}</p>
                <ul className="list">
                  {s.items.map((it) => <h3 key={it} className="item">{it}</h3>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
