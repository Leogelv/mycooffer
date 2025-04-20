import React from 'react';
import HeroBlock from '../components/HeroBlock';
import FeaturesBlock from '../components/FeaturesBlock';

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

  return (
    <main>
      <HeroBlock title={heroSection.title} content={heroSection.content} />
      <FeaturesBlock 
        title={featuresData.title} 
        subtitle={featuresData.subtitle} 
        features={featuresData.features}
      />
    </main>
  );
}
