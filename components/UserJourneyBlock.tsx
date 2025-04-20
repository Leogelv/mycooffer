"use client";

import React from 'react';
import styles from './UserJourneyBlock.module.css';
import MeshGradientBackground from './MeshGradientBackground';
import { Route, Map, Sparkles, Brain, Palette, FileSearch, CheckSquare, FileOutput, SquareCode } from 'lucide-react';
import '../app/shared/styles.css';
import Image from 'next/image';

interface ContentItem {
  type: string;
  text: string;
}

interface Step {
  id: string;
  title: string;
  content: ContentItem[];
  icon?: string;
}

interface UserJourneyBlockProps {
  title: string;
  intro: ContentItem[];
  steps: Step[];
}

// Функция для получения иконки по номеру шага или id
const getIconForStep = (step: Step, stepNumber: number, size: number = 24) => {
  switch (stepNumber) {
    case 1:
      return <Sparkles size={size} />;
    case 2:
      return <FileSearch size={size} />;
    case 3:
      return <Brain size={size} />;
    case 4:
      return <Map size={size} />;
    case 5:
      return <Palette size={size} />;
    case 6:
      if (step.id.includes('integration')) {
        return <FileSearch size={size} />;
      } else {
        return <SquareCode size={size} />;
      }
    case 7:
      return <SquareCode size={size} />;
    case 8:
      return <CheckSquare size={size} />;
    case 9:
      return <FileOutput size={size} />;
    default:
      return <Route size={size} />;
  }
};

// Функция для обработки текста с ключевыми словами
const processText = (text: string) => {
  const keywords = [
    'голос', 'цифров', 'помощник', 'идея', 'мицели',
    'исследовател', 'интерпретатор', 'черновик', 'генериру',
    'визуал', 'экспортир', 'иллюстрац', 'интеграц', 'знание'
  ];
  
  let processedText = text;
  keywords.forEach(keyword => {
    processedText = processedText.replace(
      new RegExp(`(\\S*${keyword}\\S*)`, 'gi'),
      `<span class="${styles.keywordHighlight}">$1</span>`
    );
  });
  
  return processedText;
};

const UserJourneyBlock: React.FC<UserJourneyBlockProps> = ({ title, intro, steps }) => {
  // Intro paragraph
  const introText = intro.length > 0 ? intro[0].text : '';
  
  // Функция для получения изображения для шага
  const getImageForStep = (stepNumber: number): string | null => {
    switch (stepNumber) {
      case 1:
        return '/offermyco/imagination.png';
      case 2:
        return '/offermyco/autoreseatch.png';
      case 3:
        return '/offermyco/interpret.png';
      case 4:
        return '/offermyco/mycelium_illustr.png';
      case 5:
        return '/offermyco/visuals.png';
      default:
        return null;
    }
  };
  
  return (
    <div className={styles.journeyBlockWrapper}>
      <MeshGradientBackground className="gradientBackground">
        <section className={styles.journeyContainer}>
          <div className={styles.headerSection}>
            <h2 className="blockTitle">
              <span className="iconWrapper">
                <Route size={36} />
              </span>
              {title}
            </h2>
            <p className="blockTextLead">{introText}</p>
          </div>
          
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => {
              // Получаем номер шага из заголовка, если он есть
              const stepNumberMatch = step.title.match(/Шаг (\d+)/);
              const stepNumber = stepNumberMatch ? parseInt(stepNumberMatch[1]) : index + 1;
              
              // Собираем контент шага
              const paragraphs = step.content.filter(item => item.type === 'paragraph');
              
              return (
                <div key={step.id} className={styles.step}>
                  <div className={styles.stepNumber}>
                    {stepNumber}
                  </div>
                  
                  <div className={styles.stepContent}>
                    <div className={styles.stepIcon}>
                      <span className="iconWrapper">
                        {getIconForStep(step, stepNumber, 28)}
                      </span>
                    </div>
                    
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    
                    {getImageForStep(stepNumber) && (
                      <div className={styles.stepImageContainer}>
                        <Image 
                          src={getImageForStep(stepNumber) || ''}
                          alt={`Шаг ${stepNumber}: ${step.title}`}
                          className={styles.stepImage}
                          width={300}
                          height={300}
                        />
                      </div>
                    )}
                    
                    <div className="blockText">
                      {paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex} dangerouslySetInnerHTML={{ __html: processText(paragraph.text) }} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </MeshGradientBackground>
    </div>
  );
};

export default UserJourneyBlock; 