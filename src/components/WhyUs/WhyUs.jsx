import { Container } from "../Container/Container";
import "./WhyUs.scss";
import coins from '../../assets/images/why-us/coins.webp';
import gr from '../../assets/images/gr.png';
import icons from '../../assets/images/why-us/icons.webp';

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
                <h3>Проектов сданы в срок</h3>
                <p className="text">Прописываем дедлайны в договоре и придерживаемся их в процессе разработки</p>
              </div>
            </div>
            <div className="card card--small">
              <h3>Личное общение</h3>
              <p className="text">Общаетесь напрямую с командой разработки и всегда знаете на каком этапе ваш проект</p>
            </div>
          </div>

          <div className="col">
            <div className="card card--middle">
              <img src={coins} alt="Монеты" className="middle-image" />
              <div className="middle-text">
                <h3>Доступные цены</h3>
                <p className="text">Называем стоимость сразу и фиксируем в договоре, без сюрпризов и лишних переплат</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card--split">
              <div className="body">
                <h3>Фокус на результатах</h3>
                <p className="text">Делаем базовую SEO-настройку, интегрируем формы заявок и аналитику с первого дня</p>
              </div>
              <img src={icons} alt="Иконки" className="icons" />
            </div>
            <div className="card card--split">
              <div className="body">
                <h3>Готовы начать проект?</h3>
                <p className="text">Расскажите о задаче, а мы предложим вам план и максимально подходящее решение</p>
              </div>
              <a href="#cta" className="btn btn--sm btn--dark">Связаться с нами</a>
            </div>
          </div>
        </div>
        <img src={gr} className="gr" alt="Градиент" />
      </Container>
    </section>
  );
}
