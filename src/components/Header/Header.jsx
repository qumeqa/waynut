import { useEffect, useState } from "react";
import { Container } from "../Container/Container";
import "./Header.scss";

const links = ["Услуги", "Кейсы", "Отзывы", "Калькулятор", "Блог", "Контакты"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Container className="site-header__inner">
        <a href="#" className="site-header__logo">
          Waynut<span className="site-header__dot">.</span>
        </a>
        <nav className="site-header__nav">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="site-header__link">{l}</a>
          ))}
        </nav>
        <a href="#cta" className="site-header__cta">Обсудить проект</a>
      </Container>
    </header>
  );
}