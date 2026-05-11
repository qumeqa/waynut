import { Container } from "./Container";
import styles from "./WhyUs.module.scss";

const avatars = [
  "https://api.builder.io/api/v1/image/assets/TEMP/08f2f964053013ec7e402bdb0b227501da6500e1?width=200",
  "https://api.builder.io/api/v1/image/assets/TEMP/97ebe2dac7e08633610e211e1f9011ce176e7145?width=200",
  "https://api.builder.io/api/v1/image/assets/TEMP/df3145082a37aa8b80513bd9abaa4b1dcd9df943?width=200",
];

export function WhyUs() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.h2}>Почему именно мы</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.cardTall}`}>
            <p className={styles.bigNum}>100%</p>
            <div className={styles.body}>
              <p className={styles.title}>Проектов сданы в срок</p>
              <p className={styles.text}>Прописываем дедлайны в договоре и придерживаемся их в процессе разработки</p>
            </div>
          </div>
          <div className={styles.empty} />
          <div className={`${styles.card} ${styles.cardMid}`}>
            <p className={styles.title}>Личное общение</p>
            <p className={styles.text}>Общаетесь напрямую с командой разработки и всегда знаете на каком этапе ваш проект</p>
          </div>
          <div className={`${styles.card} ${styles.cardTopRight}`}>
            <div className={styles.body}>
              <p className={styles.title}>Фокус на результатах</p>
              <p className={styles.text}>Делаем базовую SEO-настройку, интегрируем формы заявок и аналитику с первого дня</p>
            </div>
            <div className={styles.avatars}>
              {avatars.map((src, i) => <img key={i} src={src} alt="" className={styles.avatar} />)}
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardBotRight}`}>
            <div className={styles.body}>
              <p className={styles.title}>Готовы начать проект?</p>
              <p className={styles.text}>Расскажите о задаче, а мы предложим вам план и максимально подходящее решение</p>
            </div>
            <a href="#cta" className={styles.btn}>Обсудить проект</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
