import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { FloatingHeader } from "../../components/FloatingHeader/FloatingHeader";
import "../Home/Home.scss";

const links = [
  { label: "О продукте", href: "#product"  },
  { label: "Преимущества", href: "#benefits" },
  { label: "Цены",       href: "#pricing"  },
  { label: "Контакты",   href: "#contacts" },
];

const badges = ["Быстро", "Качественно", "Под ключ"];

const title = <>Заголовок вашего<br />лендинга здесь</>;

const lede = "Опишите здесь главную ценность предложения — кратко и по делу";

const actions = [
  { label: "Оставить заявку",  href: "#cta",     variant: "primary" },
  { label: "Узнать подробнее", href: "#product",  variant: "light"   },
];

export function Landing() {
  return (
    <>
      <FloatingHeader />
      <Header links={links} ctaLabel="Оставить заявку" ctaHref="#cta" />
      <main className="home">
        <Hero
          badges={badges}
          title={title}
          lede={lede}
          actions={actions}
        />
      </main>
    </>
  );
}
