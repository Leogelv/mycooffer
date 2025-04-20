import React from 'react';
import HeroBlock from '../components/HeroBlock';

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

  return <HeroBlock title={heroSection.title} content={heroSection.content} />;
}
