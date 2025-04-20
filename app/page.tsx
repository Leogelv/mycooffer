import React from 'react';
import HeroBlock from '../components/HeroBlock';
import FeaturesBlock from '../components/FeaturesBlock';
import CurrentStatusBlock from '../components/CurrentStatusBlock';
import UserJourneyBlock from '../components/UserJourneyBlock';
import RoadmapBlock from '../components/RoadmapBlock';
import TechDetailsBlock from '../components/TechDetailsBlock';

interface ContentItem {
  type: string;
  text: string;
}

interface Section {
  id: string;
  title: string;
  content: ContentItem[];
  image: string | null;
  icon: string | null;
}

interface Step {
  id: string;
  title: string;
  content: ContentItem[];
  icon?: string;
}

export default function Home() {
  // Данные первого блока
  const heroSection: Section = {
    id: "hero",
    title: "Ваш личный ИИ агент",
    content: [
      {
        type: "paragraph",
        text: "Представьте, что у вас есть собственный философский помощник, интеллектуальный соратник и внимательный редактор, встроенный в экосистему вашей книги."
      },
      {
        type: "paragraph",
        text: "Просто говорите голосом — ваши мысли станут главой, агент свяжет их между собой, сделает исследование, веб поиск, проверит на противоречия и визуализирует как живое сознание."
      }
    ],
    image: null,
    icon: null
  };

  // Данные для блока возможностей
  const featuresData = {
    title: "Возможности MykoMystic",
    subtitle: "Интеллектуальный агент для философских исследований и написания книг, который расширяет ваши возможности",
    features: [
      {
        title: "Голосовой ввод",
        description: "Преобразование речи в текст происходит мгновенно. Говорите свои мысли, а агент автоматически структурирует их в связный текст.",
        icon: "mic",
        image: undefined
      },
      {
        title: "Интеллектуальные исследования",
        description: "Агент самостоятельно проведет веб поиск по связанным темам, найдет релевантные источники и интегрирует новые знания в ваш текст.",
        icon: "search",
        image: undefined
      },
      {
        title: "Философский анализ",
        description: "MykoMystic распознает философские концепции в вашем тексте и предлагает связи с известными философскими традициями и мыслителями.",
        icon: "brain",
        image: undefined
      },
      {
        title: "Визуализация идей",
        description: "Превращайте абстрактные концепции в визуальные метафоры. Система генерирует иллюстрации, отражающие суть ваших философских размышлений.",
        icon: "wand",
        image: undefined
      },
      {
        title: "Проверка согласованности",
        description: "Агент автоматически выявляет логические противоречия и предлагает варианты их разрешения, сохраняя целостность вашей философской системы.",
        icon: "lightbulb",
        image: undefined
      },
      {
        title: "Контекстуальные связи",
        description: "MykoMystic создает интеллект-карту ваших идей, показывая, как они взаимосвязаны, и помогая развивать единую философскую систему.",
        icon: "zap",
        image: undefined
      }
    ]
  };

  // Данные для блока текущего статуса
  const currentStatusSection: Section = {
    id: "current_status",
    title: "Что у вас уже есть",
    content: [
      {
        type: "paragraph",
        text: "Мы уже построили фундамент для живого ИИ-соратника:"
      },
      {
        type: "heading",
        text: "Общение голосом"
      },
      {
        type: "paragraph",
        text: "вы диктуете — он пишет."
      },
      {
        type: "heading",
        text: "Умные ИИ-ассистенты"
      },
      {
        type: "paragraph",
        text: "с разными задачами (редактор, исследователь, художник, логик и др.)."
      },
      {
        type: "heading",
        text: "Выбор моделей"
      },
      {
        type: "paragraph",
        text: "Возможность использовать разные модели под разные задачи (Claude, GPT-4o, Grok и др.)."
      },
      {
        type: "heading",
        text: "Интеграция с источниками"
      },
      {
        type: "paragraph",
        text: "Интеграция с внешними источниками знаний: книги, видео, сайты."
      },
      {
        type: "heading",
        text: "Аккаунты пользователей"
      },
      {
        type: "paragraph",
        text: "Возможность создавать личные пространства для работы."
      },
      {
        type: "heading",
        text: "Файловая система"
      },
      {
        type: "paragraph",
        text: "Удобное хранение и организация всех ваших материалов."
      }
    ],
    image: null,
    icon: null
  };

  // Данные для блока пути пользователя
  const userJourneyData = {
    title: "Как будет устроен весь путь пользователя",
    intro: [
      {
        type: "paragraph",
        text: "Как будто вы работаете с живым цифровым помощником."
      }
    ],
    steps: [
      {
        id: "step_1_idea",
        title: "Шаг 1. Рождение идеи",
        content: [
          {
            type: "paragraph",
            text: "Вы произносите вдохновение — как бы в диалоге с высшим помощником: «Запиши идею про связь мицелия с архетипами древних культур…»"
          },
          {
            type: "paragraph",
            text: "Система сразу превращает это в текст, сохраняет в нужную главу и показывает в контексте."
          }
        ],
        icon: "1"
      },
      {
        id: "step_2_research",
        title: "Шаг 2. Автоисследование",
        content: [
          {
            type: "paragraph",
            text: "Ваш цифровой соавтор активирует агентов-исследователей: Сканирует сайты, книги, видео, плейлисты. Достаёт нужные ссылки, цитаты, контексты."
          },
          {
            type: "paragraph",
            text: "Всё это превращается в черновик, который можно улучшать."
          }
        ],
        icon: "2"
      },
      {
        id: "step_3_interpretation",
        title: "Шаг 3. Глубинная интерпретация",
        content: [
          {
            type: "paragraph",
            text: "Ассистент-интерпретатор делает срез главы по слоям: Мистика, философия, архетипы, логика, стиль. Показывает, насколько глава гармонирует с остальными частями."
          },
          {
            type: "paragraph",
            text: "Даёт рекомендации: «Тональность сместилась. Возможно, добавить метафору?»"
          }
        ],
        icon: "3"
      },
      {
        id: "step_4_knowledge_graph",
        title: "Шаг 4. Живой граф-знание (Мицелий)",
        content: [
          {
            type: "paragraph",
            text: "Вы видите интерактивную карту вашей книги: Все главы — это узлы. Связи между идеями — как грибница."
          },
          {
            type: "paragraph",
            text: "Можно щёлкнуть, переместить, открыть детали — и наблюдать, как растёт ваша вселенная знаний."
          }
        ],
        icon: "4"
      },
      {
        id: "step_5_visualization",
        title: "Шаг 5. Визуальное оформление",
        content: [
          {
            type: "paragraph",
            text: "Каждая глава, идея или образ может быть дополнена автоматически сгенерированными иллюстрациями в нужной вам стилистике (мистика, этника, философия, гравюры и т.д.)."
          },
          {
            type: "paragraph",
            text: "Вы описываете образ — система генерирует визуал. Картинки встраиваются в главы, появляются в нужном месте в компоненте рендеринга главы."
          }
        ],
        icon: "5"
      },
      {
        id: "step_6_summary",
        title: "Структура данных и управление",
        content: [
          {
            type: "paragraph",
            text: "Ваши главные объекты в системе: книга, глава, заметка/черновик/документ. Всё структурировано для удобного управления большими объемами идей и текста."
          },
          {
            type: "paragraph",
            text: "Каждая итерация агента — это не просто правка текста, но и детальный отчет по вашей структуре с рекомендациями по улучшению и связыванию идей."
          },
          {
            type: "paragraph",
            text: "История изменений сохраняется автоматически, позволяя отследить эволюцию мысли, вернуться к предыдущим версиям или избирательно откатить конкретные правки без потери последующей работы."
          }
        ],
        icon: "6"
      }
    ]
  };

  // Данные для блока с этапами реализации
  const roadmapData = {
    title: "Этапы реализации проекта",
    description: "Полная разработка системы с вовлечением пользователя на каждом этапе",
    stages: [
      {
        title: "Архитектура и техническое задание",
        description: "Детальное планирование и проектирование всей системы.",
        deliverable: "Документ с детальным планом, как будет работать вся система",
        duration: "1 неделя"
      },
      {
        title: "Разработка модулей",
        description: "Создание основных компонентов системы для анализа и обработки данных.",
        deliverable: "Рабочие блоки: анализ глав, визуализация, логическая проверка",
        duration: "1 неделя"
      },
      {
        title: "Интерфейс и взаимодействие",
        description: "Разработка пользовательского интерфейса и настройка взаимодействия с системой.",
        deliverable: "Голосовое взаимодействие и админ панель для изменения настроек",
        duration: "1 неделя"
      },
      {
        title: "Обучение моделей",
        description: "Настройка ИИ-моделей под специфические нужды проекта.",
        deliverable: "Генерация субагентов под потребности проекта",
        duration: "1 неделя"
      },
      {
        title: "Прогрессивное веб-приложение",
        description: "Оптимизация интерфейса для доступа с различных устройств и обеспечение мобильной адаптивности.",
        deliverable: "Адаптивный интерфейс с поддержкой всех устройств и экранов",
        duration: "2 недели"
      },
      {
        title: "Финальное тестирование и запуск",
        description: "Всесторонняя проверка функциональности и запуск в эксплуатацию.",
        deliverable: "Полностью готовая система",
        duration: "1 неделя"
      }
    ],
    pricingInfo: {
      price: "53 700 $",
      description: "Полный объём системы, включая визуализацию, агентов и веб-приложение с современным дизайном и интуитивным интерфейсом.",
      duration: "6-8 недель",
      modules: 9,
      platform: "Web"
    }
  };

  // Данные для блока технических деталей и заключения
  const techDetailsData = {
    title: "Технические детали",
    introduction: "Система построена на модульной архитектуре с кастомной логикой под каждую задачу. Используются лучшие LLM-модели и open-source инструменты.",
    features: [
      {
        title: "Ghostwriter (голосовой ввод)",
        description: "Голос → Whisper → текст → Markdown + автосохранение + память стиля автора.",
        icon: "mic"
      },
      {
        title: "Подагенты",
        description: "Исследование, редактирование, логика, картинки — у каждого агента своя задача и модель.",
        icon: "bot"
      },
      {
        title: "Поиск по базе",
        description: "Все загруженные книги и файлы индексируются, можно быстро находить нужное и цитировать.",
        icon: "search"
      },
      {
        title: "Импорт медиа",
        description: "YouTube и аудиофайлы автоматически расшифровываются и появляются в чате с главой как контекст.",
        icon: "youtube"
      },
      {
        title: "Выбор модели",
        description: "Дообученная на ваших текстах модель для максимально точной работы с вашими философскими концепциями.",
        icon: "cpu"
      },
      {
        title: "Интерфейс",
        description: "Интуитивно понятный трёхколоночный редактор с деревом глав, чатом и аналитикой.",
        icon: "dashboard"
      },
      {
        title: "Автоматическая визуализация",
        description: "Система предлагает визуальные схемы ваших концепций, структуры, иерархии и связи между всеми мыслями во всей книге.",
        icon: "file"
      },
      {
        title: "Отчёты и экспорт",
        description: "Возможность создать отчёт по главе, логи, аналитика + экспорт в PDF и EPUB (позже).",
        icon: "report"
      },
      {
        title: "Безопасность",
        description: "Все данные только у вас: Supabase, защищённые ключи, локальная модель (по желанию).",
        icon: "lock"
      }
    ],
    conclusion: {
      title: "Заключение",
      content: [
        "Вы получаете не просто ИИ-систему, а настоящего философского соавтора — помощника в создании глубокой, логически выверенной и эстетически цельной интеллектуальной книги.",
        "Мы строим не шаблонный генератор, а живую экосистему знания, которая растёт вместе с вами."
      ],
      buttonText: "Начать реализацию",
      buttonLink: "#contact"
    }
  };

  return (
    <main>
      <HeroBlock title={heroSection.title} content={heroSection.content} />
      <FeaturesBlock 
        title={featuresData.title} 
        subtitle={featuresData.subtitle} 
        features={featuresData.features}
      />
      <CurrentStatusBlock
        title={currentStatusSection.title}
        content={currentStatusSection.content}
      />
      <UserJourneyBlock
        title={userJourneyData.title}
        intro={userJourneyData.intro}
        steps={userJourneyData.steps}
      />
      <RoadmapBlock
        title={roadmapData.title}
        description={roadmapData.description}
        stages={roadmapData.stages}
        pricingInfo={roadmapData.pricingInfo}
      />
      <TechDetailsBlock
        title={techDetailsData.title}
        introduction={techDetailsData.introduction}
        features={techDetailsData.features}
        conclusion={techDetailsData.conclusion}
      />
    </main>
  );
}
