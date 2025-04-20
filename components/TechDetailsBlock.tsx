import React from 'react';

export function TechDetailsBlock() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 my-16">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text mb-6">
        Технические детали
      </h2>
      <p className="text-slate-600 mb-6">
        Система построена на модульной архитектуре с кастомной логикой под каждую задачу. 
        Используются лучшие LLM-модели и open-source инструменты. Вот как работают ключевые функции:
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] table-auto">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-2 px-4 text-left text-slate-600">№</th>
              <th className="py-2 px-4 text-left text-slate-600">Функция</th>
              <th className="py-2 px-4 text-left text-slate-600">Как это устроено внутри</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4">1</td>
              <td className="py-3 px-4 font-medium">Ghostwriter (голосовой ввод)</td>
              <td className="py-3 px-4">Голос → Whisper → текст → Markdown + автосохранение + память стиля автора</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4">2</td>
              <td className="py-3 px-4 font-medium">Подагенты</td>
              <td className="py-3 px-4">Исследование, редактирование, логика, картинки — у каждого агента своя задача и модель</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4">3</td>
              <td className="py-3 px-4 font-medium">Поиск по базе</td>
              <td className="py-3 px-4">Все загруженные книги и файлы индексируются, можно быстро находить нужное и цитировать</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4">4</td>
              <td className="py-3 px-4 font-medium">Импорт медиа</td>
              <td className="py-3 px-4">YouTube и аудиофайлы автоматически расшифровываются и сохраняются как главы или файлы</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4">5</td>
              <td className="py-3 px-4 font-medium">Выбор модели</td>
              <td className="py-3 px-4">По задаче система сама выбирает оптимальную модель — Claude, GPT, Gemini и другие</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4">6</td>
              <td className="py-3 px-4 font-medium">Интерфейс</td>
              <td className="py-3 px-4">Интуитивно понятный трёхколоночный редактор с деревом глав, чатом и аналитикой</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4">7</td>
              <td className="py-3 px-4 font-medium">Работа с файлами</td>
              <td className="py-3 px-4">Поддержка всех типов (PDF, JSON, PNG, CSV) и загрузка в защищённое хранилище</td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4">8</td>
              <td className="py-3 px-4 font-medium">Отчёты и экспорт</td>
              <td className="py-3 px-4">Возможность создать отчёт по главе, логи, аналитика + экспорт в PDF и EPUB (позже)</td>
            </tr>
            <tr>
              <td className="py-3 px-4">9</td>
              <td className="py-3 px-4 font-medium">Безопасность</td>
              <td className="py-3 px-4">Все данные только у вас: Supabase, защищённые ключи, локальная модель (по желанию)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
        <h3 className="text-xl font-medium text-slate-800 mb-4">Заключение</h3>
        <p className="text-slate-700">
          Вы получаете не просто ИИ-систему, а настоящего философского соавтора — помощника в создании 
          глубокой, логически выверенной и эстетически цельной интеллектуальной книги. Мы строим не 
          шаблонный генератор, а живую экосистему знания, которая растёт вместе с вами.
        </p>
      </div>
    </div>
  );
} 