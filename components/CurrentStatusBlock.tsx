"use client";

import React from 'react';
import styles from './CurrentStatusBlock.module.css';
import MeshGradientBackground from './MeshGradientBackground';
import { Mic, Database, Users, BookOpen, GanttChart, FileStack, Cpu } from 'lucide-react';
import '../app/shared/styles.css';
import Image from 'next/image';

interface ContentItem {
  type: string;
  text: string;
}

interface CurrentStatusBlockProps {
  title: string;
  content: ContentItem[];
}

// Функция для определения иконки по тексту
const getIconForText = (text: string, size: number = 24) => {
  if (text.toLowerCase().includes('голос')) {
    return <Mic size={size} />;
  } else if (text.toLowerCase().includes('интеграция')) {
    return <BookOpen size={size} />;
  } else if (text.toLowerCase().includes('аккаунт') || text.toLowerCase().includes('пользовател')) {
    return <Users size={size} />;
  } else if (text.toLowerCase().includes('файл')) {
    return <FileStack size={size} />;
  } else if (text.toLowerCase().includes('ии-ассистент') || text.toLowerCase().includes('модел')) {
    return <Cpu size={size} />;
  } else {
    return <GanttChart size={size} />;
  }
};

const CurrentStatusBlock: React.FC<CurrentStatusBlockProps> = ({ title, content }) => {
  // Фильтруем заголовки и обычные параграфы
  const headings = content.filter(item => item.type === 'heading');
  const paragraphs = content.filter(item => item.type === 'paragraph');
  
  // Первый параграф используем как основное описание
  const mainDescription = paragraphs[0]?.text || '';
  
  // Остальные параграфы группируем по заголовкам
  const features = headings.map((heading, index) => {
    // Находим все параграфы, которые идут после текущего заголовка и до следующего
    const nextHeadingIndex = index < headings.length - 1 ? 
      content.findIndex(item => item.type === 'heading' && item.text === headings[index + 1].text) : 
      content.length;
    
    const currentHeadingIndex = content.findIndex(item => item.type === 'heading' && item.text === heading.text);
    
    // Берем все параграфы между текущим и следующим заголовком
    const relatedParagraphs = content
      .slice(currentHeadingIndex + 1, nextHeadingIndex)
      .filter(item => item.type === 'paragraph');
    
    return {
      title: heading.text,
      description: relatedParagraphs.map(p => p.text).join(' '),
      image: getImageForFeature(heading.text)
    };
  });

  // Определить подходящее изображение для функции
  function getImageForFeature(featureTitle: string): string | undefined {
    const title = featureTitle.toLowerCase();
    
    if (title.includes('голос')) {
      return '/offermyco/voice_inp.png';
    } else if (title.includes('ии-ассистент')) {
      return '/offermyco/ai_assist.png';
    } else if (title.includes('выбор моделей') || title.includes('модел')) {
      return '/offermyco/model_select.png';
    } else if (title.includes('интеграция')) {
      return '/offermyco/docs_func.png';
    } else if (title.includes('файл')) {
      return '/offermyco/book_png.png';
    } else if (title.includes('аккаунт')) {
      return '/offermyco/cubes.png';
    }
    
    return undefined;
  }

  return (
    <div className={styles.statusBlockWrapper}>
      <MeshGradientBackground className="gradientBackground">
        <section className={styles.statusContainer}>
          <div className={styles.headerSection}>
            <h2 className="blockTitle">
              <span className="iconWrapper">
                <Database size={36} />
              </span>
              {title}
            </h2>
            <p className="blockTextLead">{mainDescription}</p>
          </div>
          
          <div className={styles.statusGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.statusCard}>
                <div className={styles.statusCardContent}>
                  <div className={styles.statusIcon}>
                    <span className="iconWrapper">
                      {getIconForText(feature.title, 28)}
                    </span>
                  </div>
                  <h3 className={styles.statusTitle}>{feature.title}</h3>
                  <div className="blockText">
                    <span>{feature.description}</span>
                  </div>
                </div>
                
                {feature.image && (
                  <div className={styles.statusImageContainer}>
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      className={styles.statusImage}
                      width={160}
                      height={120}
                      style={{ objectFit: 'contain' }}
                      priority
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

export default CurrentStatusBlock; 