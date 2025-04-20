"use client";

import React from 'react';
import styles from './RoadmapBlock.module.css';
import MeshGradientBackground from './MeshGradientBackground';
import { CalendarDays, BarChart, Clock, Sparkles, GraduationCap, Layers, Monitor, Activity, Rocket, DollarSign } from 'lucide-react';
import '../app/shared/styles.css';

interface Stage {
  title: string;
  description: string;
  deliverable: string;
  duration: string;
}

interface RoadmapBlockProps {
  title: string;
  description?: string;
  stages: Stage[];
  pricingInfo: {
    price: string;
    description: string;
    duration: string;
    modules: number;
    platform: string;
  };
}

const RoadmapBlock: React.FC<RoadmapBlockProps> = ({ title, description, stages, pricingInfo }) => {
  return (
    <div className={styles.roadmapBlockWrapper}>
      <MeshGradientBackground className="gradientBackground">
        <section className={styles.roadmapContainer}>
          <div className={styles.headerSection}>
            <h2 className="blockTitle">
              <span className="iconWrapper">
                <BarChart size={36} />
              </span>
              {title}
            </h2>
            {description && <p className="blockTextLead">{description}</p>}
          </div>
          
          <div className={styles.roadmapContent}>
            <div className={styles.roadmapStages}>
              {stages.map((stage, index) => (
                <div key={index} className={styles.stageCard}>
                  <div className={styles.stageNumber}>{index + 1}</div>
                  <div className={styles.stageContent}>
                    <h3 className={styles.stageTitle}>{stage.title}</h3>
                    <div className="blockText">
                      <p className={styles.stageDescription}>{stage.description}</p>
                      <p><strong>Что получаете:</strong> {stage.deliverable}</p>
                    </div>
                    <div className={styles.stageDuration}>
                      <Clock size={18} /> 
                      <span>{stage.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.pricingContainer}>
              <h3 className={styles.pricingTitle}>Стоимость проекта</h3>
              <div className={styles.pricingAmount}>{pricingInfo.price}</div>
              <p className={styles.pricingDescription}>{pricingInfo.description}</p>
              
              <div className={styles.summaryContainer}>
                <div className={styles.summaryItem}>
                  <div className={styles.summaryValue}>
                    <span className="iconWrapper">
                      <Clock size={20} />
                    </span>
                    {pricingInfo.duration}
                  </div>
                  <div className={styles.summaryLabel}>Срок разработки</div>
                </div>
                
                <div className={styles.summaryItem}>
                  <div className={styles.summaryValue}>
                    <span className="iconWrapper">
                      <Layers size={20} />
                    </span>
                    {pricingInfo.modules}
                  </div>
                  <div className={styles.summaryLabel}>Модулей и компонентов</div>
                </div>
                
                <div className={styles.summaryItem}>
                  <div className={styles.summaryValue}>
                    <span className="iconWrapper">
                      <Monitor size={20} />
                    </span>
                    {pricingInfo.platform}
                  </div>
                  <div className={styles.summaryLabel}>Платформа</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MeshGradientBackground>
    </div>
  );
};

export default RoadmapBlock; 