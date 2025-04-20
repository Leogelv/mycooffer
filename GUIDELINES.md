# Руководство по дизайн-системе MykoMystic

## Общая философия дизайна

Дизайн MykoMystic основан на концепции эфирного, возвышенного и интуитивного пользовательского опыта. Мы создаем атмосферу высокотехнологичного философского инструмента с эстетикой минимализма и воздушности.

Ключевые принципы:
- **Воздушность и свет**: Используем светлую палитру с акцентами лиловых и голубых оттенков
- **Глубина и многослойность**: Градиенты, тени и эффекты для создания глубины
- **Осмысленная анимация**: Плавные, ненавязчивые движения для привлечения внимания
- **Чистая типографика**: Контраст между заголовками и текстом для улучшения читаемости
- **Модульность**: Компоненты созданы для переиспользования и комбинирования

## Типографика

### Шрифты
- **Заголовки**: `Unbounded` (переменная CSS: `--font-unbounded`)
  - Жирность: 600-700
  - Размер: от 1.75rem до 3.25rem (зависит от уровня заголовка)
  - Межстрочный интервал: 1.1-1.3
  - Особенности: градиентная заливка, декоративные элементы
  
- **Основной текст**: `Inter` (переменная CSS: `--font-inter`)
  - Жирность: 400-500
  - Размер: от 1rem до 1.4rem
  - Межстрочный интервал: 1.6-1.7
  - Особенности: варьирование размера по важности параграфа

### Типографические эффекты

#### Градиентные заголовки
```css
.title {
  background: linear-gradient(135deg, rgb(60, 60, 100) 0%, rgb(100, 70, 180) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.75rem;
  width: 4rem;
  height: 0.35rem;
  background: linear-gradient(90deg, rgb(100, 70, 180) 0%, rgba(150, 120, 220, 0.4) 100%);
  border-radius: 1rem;
}
```

#### Подсветка ключевых слов
```css
.keywordHighlight {
  position: relative;
  color: rgb(90, 60, 160);
  font-weight: 500;
  z-index: 1;
}

.keywordHighlight::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: rgba(150, 120, 220, 0.2);
  z-index: -1;
  border-radius: 4px;
}
```

#### Применение в компоненте
```jsx
// Функция для обработки текста с подсветкой ключевых слов
const processText = (text) => {
  const keywords = ['ИИ агент', 'голосом', 'исследование', 'веб поиск', 'живое сознание'];
  
  let processedText = text;
  keywords.forEach(keyword => {
    processedText = processedText.replace(
      new RegExp(`(${keyword})`, 'gi'),
      `<span class="${styles.keywordHighlight}">$1</span>`
    );
  });
  
  return <p dangerouslySetInnerHTML={{ __html: processedText }} />;
};
```

#### Иконки в тексте
```jsx
<h1 className={styles.title}>
  <span className={styles.iconWrapper}>
    <Sparkles size={36} />
  </span>
  {title}
</h1>

<p className={styles.paragraph}>
  <span className={styles.iconWrapper}>
    <BrainCircuit size={22} />
  </span>
  {text}
</p>
```

## Цветовая схема

### Основная палитра
- **Фон**: #ffffff
- **Текст заголовков**: rgb(44, 46, 80)
- **Основной текст**: rgb(90, 90, 130)
- **Выделенный текст**: rgb(70, 70, 110)
- **Акцент заголовков**: градиент от rgb(60, 60, 100) до rgb(100, 70, 180)
- **Акцент подсветки**: rgba(150, 120, 220, 0.2)

### Градиенты
```css
/* Основной градиент фона */
.gradientContainer {
  background: radial-gradient(circle at 80% 20%, 
    rgb(227, 232, 255) 0%, 
    rgb(238, 232, 255) 15%, 
    rgb(255, 238, 249) 40%, 
    rgb(244, 245, 255) 75%, 
    rgb(235, 244, 255) 100%);
  background-size: 200% 200%;
}

/* Дополнительные слои градиентов */
.gradientContainer::before {
  background: radial-gradient(
    ellipse at 10% 90%,
    rgba(200, 220, 255, 0.5) 0%,
    rgba(200, 220, 255, 0) 50%
  );
}

.gradientContainer::after {
  background: radial-gradient(
    circle at 90% 30%,
    rgba(255, 225, 245, 0.5) 0%,
    rgba(255, 225, 245, 0) 60%
  );
}
```

## Компоненты и структура

### Модульная CSS структура
Проект использует CSS модули для изоляции стилей компонентов:
- `HeroBlock.module.css`
- `MeshGradientBackground.module.css`

### Структура основных компонентов

#### MeshGradientBackground
```jsx
// Переиспользуемый компонент для градиентного фона
const MeshGradientBackground = ({ children, className = '' }) => {
  return (
    <div className={`${styles.gradientContainer} ${className}`}>
      {children}
    </div>
  );
};
```

#### HeroBlock
```jsx
<MeshGradientBackground>
  <section className={styles.heroContainer}>
    <div className={styles.contentWrapper}>
      <h1 className={styles.title}>
        <span className={styles.iconWrapper}><Icon /></span>
        {title}
      </h1>
      <div className={styles.content}>
        {content.map((item, index) => (...))}
      </div>
    </div>
    <div className={styles.imageWrapper}>
      <div className={styles.imageContainer}>
        <img src="..." alt="..." className={styles.heroImage} />
      </div>
    </div>
  </section>
</MeshGradientBackground>
```

## Эффекты и анимации

### Изображения
```css
.heroImage {
  border-radius: 10%;
  filter: drop-shadow(0 15px 35px rgba(150, 150, 255, 0.2));
  animation: floatAnimation 6s ease-in-out infinite;
  transition: transform 0.3s ease-in-out;
}

.heroImage:hover {
  transform: scale(1.02) translateY(-5px);
}

.imageContainer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(...);
  border-radius: 2rem;
  backdrop-filter: blur(5px);
  box-shadow: 0 20px 40px rgba(120, 120, 200, 0.1);
}

@keyframes floatAnimation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
```

### Фоновые анимации
```css
.gradientContainer {
  animation: backgroundShimmer 15s ease-in-out infinite alternate;
}

.gradientContainer::before {
  animation: pulseGlow 8s ease-in-out infinite;
}

@keyframes backgroundShimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}
```

## Адаптивность

### Брейкпоинты
- **Desktop**: > 1024px (по умолчанию)
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

### Ключевые адаптивные стили
```css
/* Desktop */
.contentWrapper {
  max-width: 50%;
  margin-left: 3rem;
}

/* Tablet */
@media screen and (max-width: 1024px) {
  .contentWrapper {
    max-width: 60%;
    margin-left: 2rem;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .heroContainer {
    flex-direction: column;
  }
  
  .contentWrapper {
    max-width: 100%;
    order: 1;
    margin-left: 0;
  }
  
  .imageWrapper {
    order: 2;
    position: relative;
  }
  
  .title, .paragraph {
    text-align: center;
  }
  
  .title::after {
    left: 50%;
    transform: translateX(-50%);
  }
}
```

## Примеры использования

### Создание нового блока
```jsx
import MeshGradientBackground from '../components/MeshGradientBackground';
import { SomeIcon } from 'lucide-react';
import styles from './YourBlock.module.css';

const YourBlock = ({ title, content }) => {
  return (
    <MeshGradientBackground>
      <section className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.iconWrapper}>
            <SomeIcon size={28} />
          </span>
          {title}
        </h2>
        
        {/* Контент с подсветкой ключевых слов */}
        <div className={styles.content}>
          {/* ... */}
        </div>
      </section>
    </MeshGradientBackground>
  );
};
```

## Советы по реализации

1. **Иконки**: Используйте единый стиль иконок из библиотеки Lucide React
2. **Выделение текста**: Применяйте подсветку только к ключевым словам, не переусердствуйте
3. **Градиенты**: Сохраняйте единую цветовую схему для всех градиентов
4. **Анимации**: Делайте их тонкими и ненавязчивыми, 6-15 секунд для полного цикла
5. **Шрифты**: Следите за контрастом между Unbounded для заголовков и Inter для текста

## Аксессибилити

1. **Контрастность**: Обеспечьте достаточный контраст между текстом и фоном
2. **Фокус**: Сохраняйте стили фокуса для интерактивных элементов
3. **Семантические теги**: Используйте правильную иерархию заголовков

---

Последнее обновление: 2024-06-28 