import React from 'react';
import styles from './HeroBlock.module.css';
import MeshGradientBackground from './MeshGradientBackground';

interface ContentItem {
  type: string;
  text: string;
}

interface HeroBlockProps {
  title: string;
  content: ContentItem[];
}

const HeroBlock: React.FC<HeroBlockProps> = ({ title, content }) => {
  return (
    <MeshGradientBackground>
      <section className={styles.heroContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.content}>
            {content.map((item, index) => (
              <p key={index} className={styles.paragraph}>
                {item.text}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <img 
              src="/offermyco/art1-min.png" 
              alt="AI Ethereal Assistant" 
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>
    </MeshGradientBackground>
  );
};

export default HeroBlock; 