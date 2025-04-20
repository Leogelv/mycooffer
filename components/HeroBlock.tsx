import React from 'react';
import styles from './HeroBlock.module.css';
import '../app/shared/styles.css';
import MeshGradientBackground from './MeshGradientBackground';
import { Sparkles, Mic, BrainCircuit, Search, Link2, Check } from 'lucide-react';

interface ContentItem {
  type: string;
  text: string;
}

interface HeroBlockProps {
  title: string;
  content: ContentItem[];
}

const HeroBlock: React.FC<HeroBlockProps> = ({ title, content }) => {
  // Функция для обработки текста с добавлением выделения ключевых слов
  const processText = (text: string) => {
    // Список ключевых слов для выделения
    const keywords = [
      'ИИ агент', 'голосом', 'исследование', 'веб поиск', 
      'главой', 'живое сознание', 'философский', 'мысли'
    ];
    
    // Для каждого ключевого слова добавляем span с нужным классом
    let processedText = text;
    keywords.forEach(keyword => {
      processedText = processedText.replace(
        new RegExp(`(${keyword})`, 'gi'),
        `<span class="keywordHighlight">$1</span>`
      );
    });
    
    return <p dangerouslySetInnerHTML={{ __html: processedText }} />;
  };
  
  return (
    <MeshGradientBackground className="gradientBackground">
      <section className="blockContainer">
        <div className="blockContentWrapper">
          <h1 className="blockTitle">
            <span className="iconWrapper">
              <Sparkles size={36} />
            </span>
            {title}
          </h1>
          <div className="blockContent">
            {content.map((item, index) => (
              <p key={index} className={index === 0 ? "blockTextLead" : "blockText"}>
                {index === 0 ? (
                  // Для первого параграфа добавляем иконку и оставляем текст как есть
                  <>
                    <span className="iconWrapper">
                      <BrainCircuit size={22} />
                    </span>
                    {item.text}
                  </>
                ) : index === 1 ? (
                  // Для второго параграфа выделяем ключевые слова и добавляем иконки
                  <>
                    <span className="iconWrapper">
                      <Mic size={20} />
                    </span>
                    {processText(item.text)}
                  </>
                ) : (
                  // Для остальных параграфов просто показываем текст
                  <>
                    {item.text}
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="blockImageWrapper">
          <div className="blockImageContainer">
            <img 
              src="/offermyco/art1-min.png" 
              alt="AI Ethereal Assistant" 
              className="blockImage"
            />
          </div>
        </div>
      </section>
    </MeshGradientBackground>
  );
};

export default HeroBlock; 