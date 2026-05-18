import { Container } from "../Container/Container";
import "./WhyUs.scss";

const avatars = [
  "https://api.builder.io/api/v1/image/assets/TEMP/08f2f964053013ec7e402bdb0b227501da6500e1?width=200",
  "https://api.builder.io/api/v1/image/assets/TEMP/97ebe2dac7e08633610e211e1f9011ce176e7145?width=200",
  "https://api.builder.io/api/v1/image/assets/TEMP/df3145082a37aa8b80513bd9abaa4b1dcd9df943?width=200",
];
const middleImage =
  "https://api.builder.io/api/v1/image/assets/TEMP/d505d4de46f7c3637f448bace7338ae15383cbe2?width=1200";

export function WhyUs() {
  return (
    <section className="why">
      <Container className="inner">
        <h2>Почему именно мы</h2>

        <div className="grid">
          <div className="col">
            <div className="card card--big">
              <p className="big-num">100%</p>
              <div className="body">
                <p className="title">Проектов сданы в срок</p>
                <p className="text">Прописываем дедлайны в договоре и придерживаемся их в процессе разработки</p>
              </div>
            </div>
            <div className="card card--small">
              <p className="title">Личное общение</p>
              <p className="text">Общаетесь напрямую с командой разработки и всегда знаете на каком этапе ваш проект</p>
            </div>
          </div>

          <div className="col">
            <div className="card card--middle">
              <div className="middle-image-wrap">
                <img src={middleImage} alt="" className="middle-image" />
                <div className="middle-image-fade" />
              </div>
              <div className="middle-text">
                <p className="title">Доступные цены</p>
                <p className="text">Называем стоимость сразу и фиксируем в договоре, без сюрпризов и лишних переплат</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card--split">
              <div className="body">
                <p className="title">Фокус на результатах</p>
                <p className="text">Делаем базовую SEO-настройку, интегрируем формы заявок и аналитику с первого дня</p>
              </div>
              <div className="avatars">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="" className="avatar" />
                ))}
              </div>
            </div>
            <div className="card card--split">
              <div className="body">
                <p className="title">Готовы начать проект?</p>
                <p className="text">Расскажите о задаче, а мы предложим вам план и максимально подходящее решение</p>
              </div>
              <a href="#cta" className="btn btn--dark">Связаться с нами</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
