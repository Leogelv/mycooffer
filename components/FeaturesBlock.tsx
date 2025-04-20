"use client";

import React, { useEffect, useRef } from 'react';
import styles from './FeaturesBlock.module.css';
import MeshGradientBackground from './MeshGradientBackground';
import { Lightbulb, Book, Wand2, Brain, Zap, FileSearch } from 'lucide-react';
import '../app/shared/styles.css'; // Import shared styles

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

interface FeaturesBlockProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

// Функция для определения иконки по имени
const getIconByName = (iconName: string, size: number = 24) => {
  switch (iconName) {
    case 'lightbulb':
      return <Lightbulb size={size} />;
    case 'book':
      return <Book size={size} />;
    case 'wand':
      return <Wand2 size={size} />;
    case 'brain':
      return <Brain size={size} />;
    case 'zap':
      return <Zap size={size} />;
    case 'search':
      return <FileSearch size={size} />;
    default:
      return <Lightbulb size={size} />;
  }
};

// Функция для обработки текста с добавлением выделения ключевых слов
const processText = (text: string, styles: any) => {
  // Список ключевых слов для выделения
  const keywords = [
    'голосовой', 'исследование', 'автоматически', 'философия',
    'веб поиск', 'модель', 'мгновенно', 'контекст', 'визуализация'
  ];
  
  // Для каждого ключевого слова добавляем span с нужным классом
  let processedText = text;
  keywords.forEach(keyword => {
    processedText = processedText.replace(
      new RegExp(`(${keyword})`, 'gi'),
      `<span class="${styles.keywordHighlight}">$1</span>`
    );
  });
  
  return <p dangerouslySetInnerHTML={{ __html: processedText }} />;
};

const FeaturesBlock: React.FC<FeaturesBlockProps> = ({ title, subtitle, features }) => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Эффект для анимации при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Анимация изображения из первого блока
      if (imageRef.current) {
        const translateY = Math.min(scrollPosition * 0.3, 300);
        const scale = Math.max(1 - scrollPosition * 0.001, 0.6);
        const opacity = Math.max(1 - scrollPosition * 0.003, 0);
        
        imageRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
        imageRef.current.style.opacity = `${opacity}`;
      }
    };

    // Добавляем слушатель события прокрутки
    window.addEventListener('scroll', handleScroll);
    
    // Очищаем слушатель при размонтировании
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.featuresBlockWrapper}>
      {/* Скрытый элемент для анимации изображения из первого блока */}
      <img 
        ref={imageRef}
        src="/offermyco/art1-min.png" 
        alt="Floating hero image" 
        className={styles.floatingHeroImage}
      />

      <MeshGradientBackground className="gradientBackground">
        <section className={styles.featuresContainer} ref={featuresRef}>
          <div className={styles.headerSection}>
            <h2 className="blockTitle">
              <span className="iconWrapper">
                <Brain size={36} />
              </span>
              {title}
            </h2>
            <p className="blockTextLead">{subtitle}</p>
          </div>
          
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureCardContent}>
                  <div className={styles.featureIcon}>
                    <span className="iconWrapper">
                      {getIconByName(feature.icon, 28)}
                    </span>
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <div className="blockText">
                    {processText(feature.description, styles)}
                  </div>
                </div>
                
                {feature.image && (
                  <div className={styles.featureImageContainer}>
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className={styles.featureImage}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </MeshGradientBackground>
    </div>
  );
};

export default FeaturesBlock; 