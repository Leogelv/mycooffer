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
        text: "Представьте, что у вас есть собственный Джарвис — но не из Marvel, а из вашего философского мира. Интеллектуальный соратник, внимательный редактор, логик, исследователь и визуализатор, встроенный в экосистему вашей книги."
      },
      {
        type: "paragraph",
        text: "Вы сможете просто говорить голосом — и система превратит ваши мысли в главы, свяжет их между собой, сделает исследование, веб поиск, проверит на противоречия и визуализирует как живое сознание."
      }
    ],
    image: null,
    icon: null
  };

  return <HeroBlock title={heroSection.title} content={heroSection.content} />;
}
