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
      <Container className="why__inner">
        <h2>Почему именно мы</h2>

        <div className="why__grid">
          <div className="why__col">
            <div className="why__card why__card--big">
              <p className="why__big-num">100%</p>
              <div className="why__body">
                <p className="why__title">Проектов сданы в срок</p>
                <p className="why__text">Прописываем дедлайны в договоре и придерживаемся их в процессе разработки</p>
              </div>
            </div>
            <div className="why__card why__card--small">
              <p className="why__title">Личное общение</p>
              <p className="why__text">Общаетесь напрямую с командой разработки и всегда знаете на каком этапе ваш проект</p>
            </div>
          </div>

          <div className="why__col">
            <div className="why__card why__card--middle">
              <div className="why__middle-image-wrap">
                <img src={middleImage} alt="" className="why__middle-image" />
                <div className="why__middle-image-fade" />
              </div>
              <div className="why__middle-text">
                <p className="why__title">Доступные цены</p>
                <p className="why__text">Называем стоимость сразу и фиксируем в договоре, без сюрпризов и лишних переплат</p>
              </div>
            </div>
          </div>

          <div className="why__col">
            <div className="why__card why__card--split">
              <div className="why__body">
                <p className="why__title">Фокус на результатах</p>
                <p className="why__text">Делаем базовую SEO-настройку, интегрируем формы заявок и аналитику с первого дня</p>
              </div>
              <div className="why__avatars">
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="" className="why__avatar" />
                ))}
              </div>
            </div>
            <div className="why__card why__card--split">
              <div className="why__body">
                <p className="why__title">Готовы начать проект?</p>
                <p className="why__text">Расскажите о задаче, а мы предложим вам план и максимально подходящее решение</p>
              </div>
              <a href="#cta" className="why__btn">Связаться с нами</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}