import React from 'react';
import { OfferBlock } from './OfferBlock';

export function OfferPage() {
  // Данные из textoffer.md
  const offerData = {
    title: "Коммерческое предложение",
    description: `Цель проекта

Представьте, что у вас есть собственный Джарвис — но не из Marvel, а из вашего философского мира. Интеллектуальный соратник, внимательный редактор, логик, исследователь и визуализатор, встроенный в экосистему вашей книги.

Вы сможете просто говорить голосом — и система превратит ваши мысли в главы, свяжет их между собой, сделает исследование, веб поиск, проверит на противоречия и визуализирует как живое сознание.

Что получаете в итоге

• Личный философский Джарвис: помощник, соавтор, редактор, визионер
• Готовый, глубокий, осмысленный Кодекс, собранный из голосовых диктовок и глубокого анализа
• Визуальную карту сознания — ваш мицелий знания
• Генерацию визуалов: картинки, которые усиливают смысл и эстетику идей
• Работу с видео, аудио, документами — превращение их в структурированные главы
• Многоуровневый доступ: редакторы, читатели, команда, публика
• Контроль качества и логики: всё проверяется автоматически и аккуратно
• Гибкость и автономия: можно править любой кусок, дополнять и вносить коррективы без хаоса
• Конфиденциальность и сила: можно запустить на своей машине, без внешних API
• Структура книги с главами, контекстом и связями, с качественной архитектурой базы знаний / данных`,
    imageSrc: "/offermyco/art1-min.png"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Фиксированная навигация */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text">
            MykoMystic
          </div>
          <div className="flex gap-6">
            <button className="text-slate-600 hover:text-indigo-700 transition-colors">Детали</button>
            <button className="text-slate-600 hover:text-indigo-700 transition-colors">Настройки</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-800 text-transparent bg-clip-text mb-4">
            Journey
          </h1>
          <p className="text-xl text-slate-600 mt-2 max-w-3xl mx-auto">
            Интеллектуальный партнер для вашей книги, который поможет создать глубокий, осмысленный контент
          </p>
        </div>

        {/* Первый блок */}
        <OfferBlock 
          title={offerData.title}
          description={offerData.description}
          imageSrc={offerData.imageSrc}
        />
      </div>
    </div>
  );
} 