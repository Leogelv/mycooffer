'use client';

import React, { useState, useEffect, useRef } from 'react';
import { mockBooks, mockChapters, workspaceAssistants, sampleChapterText } from '../mockData';
import { MarkdownEditor } from '../ui/markdown-editor';
import { MarkdownPreview } from '../ui/markdown-preview';
import { History, Paperclip, Mic, Send, AtSign } from 'lucide-react';
import '../markdown-editor.css';

// Определение пропсов для компонента
interface WorkspaceProps {
  initialBookId?: string;
  initialChapterId?: string;
}

export default function Workspace({ initialBookId, initialChapterId }: WorkspaceProps) {
  // Состояния компонента
  const [currentBookId, setCurrentBookId] = useState(initialBookId || mockBooks[0].id);
  const [currentChapterId, setCurrentChapterId] = useState(
    initialChapterId || mockChapters[initialBookId || mockBooks[0].id]?.[0]?.id
  );
  const [chapterText, setChapterText] = useState(sampleChapterText);
  const [selectedAgentId, setSelectedAgentId] = useState('ghostwriter');
  const [chatInput, setChatInput] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  
  // Рефы
  const chatInputRef = useRef<HTMLTextAreaElement>(null);

  // Получение текущих объектов
  const currentBook = mockBooks.find(b => b.id === currentBookId);
  const chapters = mockChapters[currentBookId] || [];
  const currentChapter = chapters.find(c => c.id === currentChapterId);
  const selectedAgent = workspaceAssistants.find(agent => agent.id === selectedAgentId);

  // Эффект для загрузки текста главы при смене главы
  useEffect(() => {
    console.log(`Загрузка текста для главы ${currentChapterId}`);
    // Имитация загрузки (в реальном приложении - API запрос)
    setChapterText(sampleChapterText + `\n\n*(Текст для главы: ${currentChapter?.title || 'N/A'})*`);
  }, [currentChapterId, currentChapter?.title]);

  // Обработчик выбора главы
  const handleChapterSelect = (chapterId: string) => {
    setCurrentChapterId(chapterId);
  };

  // Обработчик изменения в поле чата
  const handleChatInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatInput(e.target.value);
    if (chatInputRef.current) {
      chatInputRef.current.style.height = 'auto';
      chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
    }
  };

  // Обработчик отправки сообщения
  const handleSend = () => {
    if (!chatInput.trim()) return;
    alert(`Отправка сообщения агенту "${selectedAgent?.name}":\n\n${chatInput}\n\n(Прототип)`);
    setChatInput('');
    if (chatInputRef.current) {
      chatInputRef.current.style.height = 'auto';
    }
  };

  // Обработчик изменения текста главы
  const handleChapterTextChange = (newText: string) => {
    setChapterText(newText);
  };

  // Переключатель режима просмотра
  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  // Имитация отображения истории изменений главы
  const showChapterHistory = (chapterId: string) => {
    alert(`Показ истории изменений для главы "${chapters.find(c => c.id === chapterId)?.title}"\n\n(Функционал истории изменений будет реализован в следующих версиях)`);
  };

  // Рендеринг различного контента в зависимости от выбранного агента
  const renderAiPanelContent = () => {
    if (!selectedAgent) return <p>Ошибка: Агент не найден.</p>;

    switch (selectedAgent.id) {
      case 'ghostwriter': 
        return (
          <div className="chat-history">
            <p>
              <strong>{selectedAgent.name}:</strong> Готов писать, редактировать или обсуждать главу "{currentChapter?.title || 'текущую'}". Что будем делать?
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              <i>(Здесь будет история чата...)</i>
            </p>
          </div>
        );
      case 'interpreter': 
        return (
          <div className="ai-analysis-result">
            <p><strong>{selectedAgent.name}:</strong> Анализ главы "{currentChapter?.title || 'текущей'}":</p>
            <p><strong>Кластер:</strong> <i>{currentChapter?.id === 'b1-c1' ? 'Начальное Погружение' : 'Требуется анализ'}</i></p>
            <p><strong>Теги:</strong> <i>{currentChapter?.id === 'b1-c1' ? 'присутствие, дыхание...' : '...'}</i></p>
            <p><strong>Резонанс:</strong> <i>{currentChapter?.id === 'b1-c1' ? '0.78' : '-'}</i></p>
            <button 
              className="control-button" 
              style={{ marginTop: '15px', fontSize: '0.9em' }} 
              onClick={() => alert('Запуск анализа Интерпретатором (прототип)')}
            >
              Анализировать
            </button>
          </div>
        );
      case 'researcher': 
        return (
          <div className="ai-research-result">
            <p><strong>{selectedAgent.name}:</strong> Поиск по контексту главы "{currentChapter?.title || 'текущей'}":</p>
            <p><i>Пересечения с Кодексом:</i> Глава 'Не-Деяние в Лесу'...</p>
            <p><i>Внешние источники:</i> <a href="#" onClick={(e) => e.preventDefault()}>Статья о мицелии (Wikipedia)</a></p>
            <button 
              className="control-button" 
              style={{ marginTop: '15px', fontSize: '0.9em' }} 
              onClick={() => alert('Запуск RAG поиска (прототип)')}
            >
              Искать Связи
            </button>
          </div>
        );
      case 'visualizer': 
        return (
          <div className="ai-visuals-prompt">
            <p><strong>{selectedAgent.name}:</strong> Опишите образ для главы "{currentChapter?.title || 'текущей'}":</p>
            <input 
              type="text" 
              placeholder="Промпт: Светящийся мицелий в темном лесу..." 
              style={{
                width: '100%',
                padding: '8px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                color: 'var(--text-primary)',
                marginBottom: '10px'
              }}
            />
            <button 
              className="control-button" 
              style={{ fontSize: '0.9em' }} 
              onClick={() => alert('Генерация изображения (прототип)')}
            >
              Сгенерировать Образ
            </button>
            <div className="ai-visuals-gallery">(Галерея сгенерированных изображений)</div>
          </div>
        );
      case 'validator': 
        return (
          <div className="ai-analysis-result">
            <p><strong>{selectedAgent.name}:</strong> Проверка логики главы "{currentChapter?.title || 'текущей'}":</p>
            <p><i>Статус:</i> <span style={{ color: '#2ecc71' }}>Противоречий не найдено.</span></p>
            <button 
              className="control-button" 
              style={{ marginTop: '15px', fontSize: '0.9em' }} 
              onClick={() => alert('Запуск логической проверки (прототип)')}
            >
              Проверить Логику
            </button>
          </div>
        );
      case 'veto': 
        return (
          <div className="ai-veto-result">
            <p><strong>{selectedAgent.name}:</strong> Запуск ВЕТО для главы "{currentChapter?.title || 'текущей'}":</p>
            <p><i>Критерий:</i> Соответствие канону</p>
            <p><i>Результат:</i> <span style={{ color: '#f39c12' }}>3/4</span> (Требуется внимание)</p>
            <button 
              className="control-button" 
              style={{ marginTop: '15px', fontSize: '0.9em' }} 
              onClick={() => alert('Запуск ВЕТО (прототип)')}
            >
              Голосовать
            </button>
          </div>
        );
      default: 
        return <p>Интерфейс для агента "{selectedAgent.name}" не реализован.</p>;
    }
  };

  return (
    <div className="view-container active" style={{ padding: 0 }}>
      <h1 className="page-title">
        Рабочее Пространство: {currentBook?.title}
      </h1>
      <div className="workspace-layout">
        {/* Левая Колонка: Навигация */}
        <div className="workspace-column left">
          <div className="column-header">Главы Книги</div>
          <div className="column-content chapter-tree">
            <ul>
              {chapters.map(chap => (
                <li
                  key={chap.id}
                  className={chap.id === currentChapterId ? 'active' : ''}
                >
                  <div className="chapter-item">
                    <span 
                      onClick={() => handleChapterSelect(chap.id)}
                      className="chapter-title"
                    >
                      {chap.number}. {chap.title}
                    </span>
                    <button 
                      className="history-button"
                      title="История изменений"
                      onClick={() => showChapterHistory(chap.id)}
                    >
                      <History size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button 
              className="control-button" 
              style={{ margin: '15px', fontSize: '0.9em' }} 
              onClick={() => alert('Добавление главы (прототип)')}
            >
              + Новая Глава
            </button>
          </div>
        </div>

        {/* Центральная Колонка: Редактор */}
        <div className="workspace-column center">
          <div className="column-header">
            <div className="editor-header">
              <span>Редактор: {currentChapter?.title || 'Выберите главу'}</span>
              <div className="editor-controls">
                <button 
                  className={`control-button ${!showPreview ? 'active' : ''}`}
                  onClick={() => setShowPreview(false)}
                >
                  Редактор
                </button>
                <button 
                  className={`control-button ${showPreview ? 'active' : ''}`}
                  onClick={() => setShowPreview(true)}
                >
                  Предпросмотр
                </button>
              </div>
            </div>
          </div>
          <div className="column-content no-padding editor-area">
            {showPreview ? (
              <MarkdownPreview content={chapterText} />
            ) : (
              <MarkdownEditor 
                initialValue={chapterText} 
                onChange={handleChapterTextChange}
                placeholder="Начните писать текст главы здесь..."
              />
            )}
          </div>
        </div>

        {/* Правая Колонка: AI Панель */}
        <div className="workspace-column right ai-panel">
          <div className="ai-panel-header">
            <select
              value={selectedAgentId}
              onChange={(e) => setSelectedAgentId(e.target.value)}
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '4px',
                padding: '5px 10px',
                fontSize: '0.9em',
                outline: 'none',
                flexGrow: 1
              }}
            >
              {workspaceAssistants.map(agent => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Динамический контент в зависимости от агента */}
          <div className="ai-panel-content">
            {/* Примеры сообщений чата - в верхней части */}
            <div className="chat-history" style={{ marginBottom: '15px' }}>
              <p style={{ marginBottom: '12px' }}>
                <strong>Вы:</strong> Помоги мне придумать более выразительные эпитеты для описания леса в главе "{currentChapter?.title || 'текущей'}"
              </p>
              <p style={{ marginBottom: '12px' }}>
                <strong>{selectedAgent?.name}:</strong> Конечно! Вот несколько вариантов:
                <br />- Древний, мудрый лес с шепчущими кронами
                <br />- Изумрудное царство таинственных теней
                <br />- Живой собор из мха и хвои
              </p>
            </div>
            {/* Динамический контент агента */}
            {renderAiPanelContent()}
          </div>
          
          {/* Область ввода чата */}
          <div className="chat-input-area" style={{ 
            borderTop: '1px solid var(--border-color)', 
            padding: '10px 15px',
            backgroundColor: 'var(--bg-secondary)'
          }}>
            <div className="chat-input-main" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              padding: '5px 10px'
            }}>
              <button
                title="Прикрепить файл"
                onClick={() => alert('Прикрепление файла (прототип)')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '5px',
                  borderRadius: '4px',
                  transition: 'color 0.2s, background-color 0.2s'
                }}
              >
                <Paperclip size={20} />
              </button>
              <textarea
                ref={chatInputRef}
                value={chatInput}
                onChange={handleChatInputChange}
                placeholder={`Спросить у ${selectedAgent?.name || 'ассистента'}...`}
                style={{
                  flexGrow: 1,
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-family)',
                  fontSize: '1em',
                  height: '24px',
                  maxHeight: '100px',
                  lineHeight: '1.5',
                  overflowY: 'auto'
                }}
              />
              <button
                title="Голосовой ввод"
                onClick={() => alert('Голосовой ввод (прототип)')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '5px',
                  borderRadius: '4px',
                  fontSize: '1.4em',
                  transition: 'color 0.2s, background-color 0.2s'
                }}
              >
                <Mic size={24} />
              </button>
              <button
                onClick={handleSend}
                title="Отправить"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-primary)',
                  cursor: 'pointer',
                  padding: '5px',
                  borderRadius: '4px',
                  transition: 'color 0.2s, background-color 0.2s'
                }}
              >
                <Send size={20} />
              </button>
            </div>
            <div className="chat-input-extras" style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '8px'
            }}>
              <button 
                className="context-chip"
                onClick={() => alert('Добавление контекста (прототип)')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '15px',
                  padding: '3px 10px',
                  fontSize: '0.85em',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer'
                }}
              >
                <AtSign size={14} />
                Add context
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 