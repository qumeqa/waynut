# Картинки секции «Почему именно мы»

Из Figma нужны 4 файла (открой Figma Desktop → ПКМ по картинке → Export PNG/JPG):

| Файл из Figma                | Куда положить                | Где используется               |
| ---------------------------- | ---------------------------- | ------------------------------ |
| image 2 (монета, 600×503)    | `coin.png`                   | средняя карточка «Доступные цены» |
| image 27 (синий значок 64×64)| `avatar-1.png`               | «Фокус на результатах»         |
| image 23 (аватар 64×64)      | `avatar-2.png`               | «Фокус на результатах»         |
| image 21 (аватар 64×64)      | `avatar-3.png`               | «Фокус на результатах»         |

После того как положишь файлы — замени URL-константы вверху `WhyUs.tsx`
на ES6-импорты, например:

```ts
import coin from "@/assets/images/why-us/coin.png";
import avatar1 from "@/assets/images/why-us/avatar-1.png";
// и т.д.

const middleImage = coin;
const avatars = [avatar1, avatar2, avatar3];
```

Vite сам пережмёт и захэширует имя файла при сборке.
