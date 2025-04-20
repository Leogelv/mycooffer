import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              MykoMystic
            </h3>
            <p className="text-slate-300">
              Интеллектуальный партнер для вашей книги, который поможет создать глубокий, осмысленный контент
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-slate-100">Контакты</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Email: info@mykomystic.ai</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Москва, Россия</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-slate-100">Следите за нами</h3>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-slate-400 text-sm">
          <p>© 2024 MykoMystic. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}