import React from 'react';

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
  // Данные первого блока, вставленные напрямую
  const heroSection: Section = {
    id: "hero",
    title: "Ваш личный философский Джарвис",
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

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{heroSection.title}</h1>
        {heroSection.content.map((item: ContentItem, index: number) => (
          <p key={index} className="text-gray-600 mb-4">
            {item.text}
          </p>
        ))}
      </div>
    </main>
  );
}
