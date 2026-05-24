import { useState, useEffect } from "react";
import "./FloatingHeader.scss";

const links = ["Услуги", "Кейсы", "Отзывы", "Блог", "Контакты"];

export function FloatingHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`floating-header${visible ? " is-visible" : ""}`}>
      <div className="pill">
        <nav className="nav">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="link">{l}</a>
          ))}
        </nav>
        <a href="#cta" className="btn btn--primary btn--sm">Обсудить проект</a>
      </div>
    </div>
  );
}
