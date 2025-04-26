import { Book, Chapter, Assistant } from './types';

// Моковые книги
export const mockBooks: Book[] = [
  { 
    id: 'book1', 
    title: 'Хроники Тихой Охоты: Путь к Себе', 
    color: '#8e44ad', 
    description: 'Исследование глубин сознания через призму микологии и древних практик.' 
  },
  { 
    id: 'book2', 
    title: 'Мицелиальный Разум: Коды Сознания', 
    color: '#2980b9', 
    description: 'Практическое руководство по интеграции мицелиального мышления в повседневную жизнь.' 
  },
  { 
    id: 'book3', 
    title: 'Эхо Леса: Забытые Тропы', 
    color: '#27ae60', 
    description: 'Сборник медитаций и размышлений, рожденных в тишине древнего леса.' 
  },
];

// Моковые главы
export const mockChapters: Record<string, Chapter[]> = {
  'book1': [
    { id: 'b1-c1', number: 1, title: 'Дыхание Мха' },
    { id: 'b1-c2', number: 2, title: 'Танец Спор' },
    { id: 'b1-c3', number: 3, title: 'Сплетение Корней' },
    { id: 'b1-c4', number: 4, title: 'Гриб Мудрости' },
    { id: 'b1-c5', number: 5, title: 'Интеграция Света' },
  ],
  'book2': [
    { id: 'b2-c1', number: 1, title: 'Не-Деяние в Лесу' },
    { id: 'b2-c2', number: 2, title: 'Кристаллизация Намерения' },
    { id: 'b2-c3', number: 3, title: 'Этика Проводника' },
    { id: 'b2-c4', number: 4, title: 'Голограмма Реальности' },
  ],
  'book3': [
    { id: 'b3-c1', number: 1, title: 'Утренняя Роса' },
    { id: 'b3-c2', number: 2, title: 'Шепот Ветра' },
  ]
};

// Моковые ассистенты для просмотра и управления
export const mockAssistants: Assistant[] = [
  {
    id: 'ast1',
    name: 'Исследователь',
    description: 'Специализируется на поиске и анализе информации из различных источников',
    model: 'GPT-4',
    avatar: '/avatars/researcher.png',
    capabilities: ['Поиск информации', 'Анализ данных', 'Составление отчетов']
  },
  {
    id: 'ast2',
    name: 'Писатель',
    description: 'Помогает создавать и редактировать тексты различных жанров и форматов',
    model: 'Claude 3 Opus',
    avatar: '/avatars/writer.png',
    capabilities: ['Написание текстов', 'Редактирование', 'Генерация идей']
  },
  {
    id: 'ast3',
    name: 'Аналитик',
    description: 'Анализирует данные и помогает принимать решения на их основе',
    model: 'GPT-4',
    avatar: '/avatars/analyst.png',
    capabilities: ['Статистический анализ', 'Визуализация данных', 'Прогнозирование']
  },
  {
    id: 'ast4',
    name: 'Программист',
    description: 'Помогает писать, отлаживать и объяснять код на различных языках программирования',
    model: 'Claude 3 Sonnet',
    avatar: '/avatars/programmer.png',
    capabilities: ['Написание кода', 'Отладка', 'Объяснение алгоритмов']
  },
  {
    id: 'ast5',
    name: 'Учитель',
    description: 'Помогает в обучении и объяснении сложных концепций простым языком',
    model: 'GPT-4',
    avatar: '/avatars/teacher.png',
    capabilities: ['Объяснение концепций', 'Создание учебных материалов', 'Проверка знаний']
  },
  {
    id: "assistant-1",
    name: "Книжный Гид",
    description: "Поможет выбрать книгу по вашим интересам",
    model: "gpt-4",
    avatar: "/images/assistant1.png",
    capabilities: ["Рекомендации книг", "Подбор по жанру", "Обзор новинок"]
  },
  {
    id: "assistant-2",
    name: "Литературный анализ",
    description: "Анализ текста, персонажей и сюжетных линий",
    model: "claude-3",
    avatar: "/images/assistant2.png",
    capabilities: ["Анализ текста", "Разбор персонажей", "Трактовка сюжета"]
  }
];

// Моковые ассистенты для рабочего пространства
export const workspaceAssistants: Assistant[] = [
  {
    id: 'ghostwriter',
    name: 'Писатель-фантом',
    description: 'Помогает создавать и редактировать тексты',
    model: 'Claude 3 Opus',
    avatar: '/avatars/ghostwriter.png',
    capabilities: ['Создание текста', 'Редактирование', 'Стилистические рекомендации']
  },
  {
    id: 'interpreter',
    name: 'Интерпретатор',
    description: 'Анализирует и интерпретирует текст, выявляя скрытые смыслы',
    model: 'GPT-4',
    avatar: '/avatars/interpreter.png',
    capabilities: ['Анализ текста', 'Выявление смыслов', 'Кластеризация']
  },
  {
    id: 'researcher',
    name: 'Исследователь',
    description: 'Ищет связи и контекст для углубления текста',
    model: 'Claude 3 Sonnet',
    avatar: '/avatars/researcher.png',
    capabilities: ['Поиск информации', 'Установление связей', 'Контекстуализация']
  },
  {
    id: 'visualizer',
    name: 'Художник Образов',
    description: 'Генерирует визуальные концепции',
    model: 'DALL-E 3 / SD XL',
    avatar: '/avatars/visualizer.png',
    capabilities: ['Генерация изображений', 'Визуализация', 'Стилизация']
  },
  {
    id: 'validator',
    name: 'Логический Валидатор',
    description: 'Проверяет на противоречия',
    model: 'Claude 3 Opus',
    avatar: '/avatars/validator.png',
    capabilities: ['Проверка логики', 'Анализ противоречий', 'Валидация контента']
  },
  {
    id: 'veto',
    name: 'ВЕТО-Агент',
    description: 'Проводит голосование по критериям',
    model: 'Ensemble',
    avatar: '/avatars/veto.png',
    capabilities: ['Голосование', 'Оценка качества', 'Проверка соответствия']
  }
];

// Пример текста главы (Markdown)
export const sampleChapterText = `# Дыхание Мха

Вдохни запах прелой листвы. Это не просто воздух – это **информация**. Лес дышит, и ты – часть этого дыхания.

Остановись. Почувствуй, как корни деревьев уходят в землю, как мицелий плетет свою невидимую паутину под ногами. Ты – тоже узел в этой сети. Твои мысли – лишь рябь на поверхности глубокого озера сознания.

## Практика

1.  Найди тихое место в лесу или парке.
2.  Сядь удобно, закрой глаза.
3.  Сосредоточься на дыхании.
4.  *Ощути* связь с землей.

> "Тишина – это не отсутствие звука, а присутствие всего." - Неизвестный мистик

---

Помни: путь начинается с одного вдоха.`; 