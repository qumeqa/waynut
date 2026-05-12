import { Container } from "./Container";
import styles from "./WhyUs.module.scss";

// Картинки. Замени URL на свои файлы из src/assets/images/why-us/
// (см. README в этой папке — как скачать из Figma).
const avatars = [
  "https://api.builder.io/api/v1/image/assets/TEMP/08f2f964053013ec7e402bdb0b227501da6500e1?width=200",
  "https://api.builder.io/api/v1/image/assets/TEMP/97ebe2dac7e08633610e211e1f9011ce176e7145?width=200",
  "https://api.builder.io/api/v1/image/assets/TEMP/df3145082a37aa8b80513bd9abaa4b1dcd9df943?width=200",
];
const middleImage = "https://api.builder.io/api/v1/image/assets/TEMP/d505d4de46f7c3637f448bace7338ae15383cbe2?width=1200";

export function WhyUs() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.h2}>Почему именно мы</h2>

        <div className={styles.grid}>
          {/* Колонка 1: 100% + Личное общение */}
          <div className={styles.col}>
            <div className={`${styles.card} ${styles.cardBig}`}>
              <p className={styles.bigNum}>100%</p>
              <div className={styles.body}>
                <p className={styles.title}>Проектов сданы в срок</p>
                <p className={styles.text}>
                  Прописываем дедлайны в договоре и придерживаемся их в процессе разработки
                </p>
              </div>
            </div>
            <div className={`${styles.card} ${styles.cardSmall}`}>
              <p className={styles.title}>Личное общение</p>
              <p className={styles.text}>
                Общаетесь напрямую с командой разработки и всегда знаете на каком этапе ваш проект
              </p>
            </div>
          </div>

          {/* Колонка 2: высокая карточка с картинкой сверху и «Доступные цены» снизу */}
          <div className={styles.col}>
            <div className={`${styles.card} ${styles.cardMiddle}`}>
              <div className={styles.middleImageWrap}>
                <img src={middleImage} alt="" className={styles.middleImage} />
                <div className={styles.middleImageFade} />
              </div>
              <div className={styles.middleText}>
                <p className={styles.title}>Доступные цены</p>
                <p className={styles.text}>
                  Называем стоимость сразу и фиксируем в договоре, без сюрпризов и лишних переплат
                </p>
              </div>
            </div>
          </div>

          {/* Колонка 3: Фокус на результатах + Готовы начать проект? */}
          <div className={styles.col}>
            <div className={`${styles.card} ${styles.cardSplit}`}>
              <div className={styles.body}>
                <p className={styles.title}>Фокус на результатах</p>
                <p className={styles.text}>
                  Делаем базовую SEO-настройку, интегрируем формы заявок и аналитику с первого дня
                </p>
              </div>
              <div className={styles.avatars}>
                {avatars.map((src, i) => (
                  <img key={i} src={src} alt="" className={styles.avatar} />
                ))}
              </div>
            </div>
            <div className={`${styles.card} ${styles.cardSplit}`}>
              <div className={styles.body}>
                <p className={styles.title}>Готовы начать проект?</p>
                <p className={styles.text}>
                  Расскажите о задаче, а мы предложим вам план и максимально подходящее решение
                </p>
              </div>
              <a href="#cta" className={styles.btn}>Связаться с нами</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
