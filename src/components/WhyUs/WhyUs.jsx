import { Container } from "../Container/Container";
import "./WhyUs.scss";
import coins from '../../assets/images/why-us/coins.webp';
import gr from '../../assets/images/gr.png';
import icon1 from '../../assets/images/why-us/1.png';
import icon2 from '../../assets/images/why-us/2.png';
import icon3 from '../../assets/images/why-us/3.png';

const icons = [icon3, icon2, icon1];
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
              <img src={coins} alt="" className="middle-image" />
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
                {icons.map((src, i) => (
                  <img key={i} src={src} alt="" className="icon" />
                ))}
              </div>
            </div>
            <div className="card card--split">
              <div className="body">
                <p className="title">Готовы начать проект?</p>
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
