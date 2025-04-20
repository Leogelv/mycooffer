"use client";

import React from 'react';
import styles from './TechDetailsBlock.module.css';
import MeshGradientBackground from './MeshGradientBackground';
import { Cpu, Code, Bot, Search, Youtube, GanttChart, FileText, FilePlus, Lock, ArrowRight, Mic, LayoutDashboard } from 'lucide-react';
import '../app/shared/styles.css';
import Image from 'next/image';

interface TechFeature {
  title: string;
  description: string;
  icon: string;
  price?: string;
  priceDescription?: string;
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
  additionalInfo?: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
      price?: string;
    }>;
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

const TechDetailsBlock: React.FC<TechDetailsBlockProps> = ({ title, introduction, features, conclusion, additionalInfo }) => {
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
              {updatedFeatures.map((feature, index) => (
                <div key={index} className={styles.techFeature}>
                  <div className={styles.techFeatureIcon}>
                    <span className="iconWrapper">
                      {getIconByName(feature.icon || getIconForFeature(feature.title), 32)}
                    </span>
                  </div>
                  <div className={styles.techFeatureContent}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    {feature.price && (
                      <div className={styles.priceTag}>
                        <span className={styles.price}>{feature.price}</span>
                        {feature.priceDescription && (
                          <span className={styles.priceDescription}>{feature.priceDescription}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.conclusionSection}>
              <h2 className={styles.conclusionTitle}>{conclusion.title}</h2>
              {conclusion.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {conclusion.buttonText && conclusion.buttonLink && (
                <a href={conclusion.buttonLink} className={styles.actionButton}>
                  {conclusion.buttonText}
                </a>
              )}
            </div>

            {additionalInfo && (
              <div className={styles.additionalInfoContainer}>
                <h2>{additionalInfo.title}</h2>
                <div className={styles.infoChipsContainer}>
                  {additionalInfo.items.map((item, index) => (
                    <div key={index} className={styles.infoChip}>
                      <div className={styles.infoChipIcon}>
                        <span className="iconWrapper">
                          {getIconByName(item.icon || getIconForFeature(item.title), 24)}
                        </span>
                      </div>
                      <div className={styles.infoChipContent}>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        {item.price && <span className={styles.chipPrice}>{item.price}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </MeshGradientBackground>
    </div>
  );
};

export default TechDetailsBlock; 