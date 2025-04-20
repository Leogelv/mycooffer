"use client";

import React from 'react';
import styles from './TechDetailsBlock.module.css';
import MeshGradientBackground from './MeshGradientBackground';
import { Cpu, Code, Bot, Search, Youtube, GanttChart, FileText, FilePlus, Lock, ArrowRight, Mic, LayoutDashboard } from 'lucide-react';
import '../app/shared/styles.css';

interface TechFeature {
  title: string;
  description: string;
  icon: string;
}

interface TechDetailsBlockProps {
  title: string;
  introduction: string;
  features: TechFeature[];
  conclusion: {
    title: string;
    content: string[];
    buttonText?: string;
    buttonLink?: string;
  };
}

// Функция для получения иконки по имени
const getIconByName = (iconName: string, size: number = 24) => {
  switch (iconName) {
    case 'mic':
      return <Mic size={size} />;
    case 'bot':
      return <Bot size={size} />;
    case 'search':
      return <Search size={size} />;
    case 'youtube':
      return <Youtube size={size} />;
    case 'cpu':
      return <Cpu size={size} />;
    case 'dashboard':
      return <LayoutDashboard size={size} />;
    case 'file':
      return <FileText size={size} />;
    case 'report':
      return <FilePlus size={size} />;
    case 'lock':
      return <Lock size={size} />;
    default:
      return <Code size={size} />;
  }
};

// Функция для преобразования названия в иконку
const getIconForFeature = (title: string): string => {
  if (title.toLowerCase().includes('голос') || title.toLowerCase().includes('ввод')) {
    return 'mic';
  } else if (title.toLowerCase().includes('агент')) {
    return 'bot';
  } else if (title.toLowerCase().includes('поиск')) {
    return 'search';
  } else if (title.toLowerCase().includes('медиа') || title.toLowerCase().includes('youtube')) {
    return 'youtube';
  } else if (title.toLowerCase().includes('модел')) {
    return 'cpu';
  } else if (title.toLowerCase().includes('интерфейс')) {
    return 'dashboard';
  } else if (title.toLowerCase().includes('файл')) {
    return 'file';
  } else if (title.toLowerCase().includes('отчет') || title.toLowerCase().includes('экспорт')) {
    return 'report';
  } else if (title.toLowerCase().includes('безопас')) {
    return 'lock';
  } else {
    return 'code';
  }
};

const TechDetailsBlock: React.FC<TechDetailsBlockProps> = ({ title, introduction, features, conclusion }) => {
  // Обновляем описание Ghostwriter, если он есть
  const updatedFeatures = features.map(feature => {
    if (feature.title === 'Ghostwriter (голосовой ввод)') {
      return {
        ...feature,
        description: 'Главный агент-собеседник системы ("СЕО"). Взаимодействие через голос → Whisper → текст → Markdown + автосохранение + память стиля автора.'
      };
    }
    return feature;
  });

  return (
    <div className={styles.techBlockWrapper}>
      <MeshGradientBackground className="gradientBackground">
        <section className={styles.techContainer}>
          <div className={styles.headerSection}>
            <h2 className="blockTitle">
              <span className="iconWrapper">
                <Cpu size={36} />
              </span>
              {title}
            </h2>
            <p className="blockTextLead">{introduction}</p>
          </div>
          
          <div className={styles.techContent}>
            <div className={styles.techFeaturesGrid}>
              {updatedFeatures.map((feature, index) => {
                const iconName = feature.icon || getIconForFeature(feature.title);
                
                return (
                  <div key={index} className={styles.techFeature}>
                    <div className={styles.techFeatureNumber}>{index + 1}</div>
                    <div className={styles.techFeatureIcon}>
                      <span className="iconWrapper">
                        {getIconByName(iconName, 28)}
                      </span>
                    </div>
                    <h3 className={styles.techFeatureTitle}>{feature.title}</h3>
                    <div className="blockText">
                      <p>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className={styles.conclusionSection}>
              <h3 className={styles.conclusionTitle}>{conclusion.title}</h3>
              <div className="blockText">
                {conclusion.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {conclusion.buttonText && (
                <a 
                  href={conclusion.buttonLink || "#"} 
                  className={styles.actionButton}
                >
                  <span className={styles.actionButtonIcon}>
                    <ArrowRight size={20} />
                  </span>
                  {conclusion.buttonText}
                </a>
              )}
            </div>
          </div>
        </section>
      </MeshGradientBackground>
    </div>
  );
};

export default TechDetailsBlock; 