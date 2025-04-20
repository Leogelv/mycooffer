import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OfferBlockProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

export function OfferBlock({
  title,
  description,
  imageSrc,
  className,
}: OfferBlockProps) {
  // Форматируем текст, выделяя заголовки и списки
  const formatText = (text: string) => {
    // Разбиваем текст на секции по двойным переносам строк
    const sections = text.split('\n\n');
    
    return sections.map((section, index) => {
      // Проверяем, содержит ли секция маркеры списка
      if (section.includes('• ')) {
        const listItems = section.split('\n').map(item => item.trim());
        return (
          <div key={`section-${index}`} className="mt-6">
            {listItems.map((item, itemIndex) => {
              if (item.startsWith('• ')) {
                return (
                  <div key={`item-${itemIndex}`} className="flex items-start gap-3 mb-3">
                    <div className="min-w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs mt-1">
                      ✓
                    </div>
                    <div>{item.substring(2)}</div>
                  </div>
                );
              } else {
                return <p key={`item-${itemIndex}`} className="font-semibold text-xl mb-3">{item}</p>;
              }
            })}
          </div>
        );
      } else {
        return <p key={`section-${index}`} className="mb-4">{section}</p>;
      }
    });
  };

  return (
    <div className={cn("w-full flex flex-col md:flex-row items-center gap-12 py-12", className)}>
      {/* Изображение с размытыми краями */}
      <div className="w-full md:w-2/5 relative overflow-hidden rounded-3xl">
        <div className="aspect-square relative">
          <div className="absolute inset-0 blur-[30px] opacity-30 scale-110 z-0">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-[5%] z-10 rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Текстовый контент */}
      <div className="w-full md:w-3/5 space-y-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-800 text-transparent bg-clip-text">{title}</h2>
        <div className="text-slate-700 space-y-2 text-lg">
          {formatText(description)}
        </div>
      </div>
    </div>
  );
} 