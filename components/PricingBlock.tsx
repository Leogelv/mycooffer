import React from 'react';
import { Button } from './Button';

export function PricingBlock() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 my-16">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text mb-6">
        Стоимость проекта
      </h2>
      
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
          <h3 className="text-xl font-medium text-slate-800 mb-2">Полное решение</h3>
          <p className="text-slate-600 mb-4">
            Вся система в полном объёме, включая визуализацию, агентов, приложение
          </p>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-indigo-700">53 700</span>
            <span className="text-2xl font-medium text-indigo-700">$</span>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-xl font-medium text-slate-800 mb-4">Этапы реализации проекта</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] table-auto">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 px-4 text-left text-slate-600">Этап</th>
                  <th className="py-2 px-4 text-left text-slate-600">Что делаем</th>
                  <th className="py-2 px-4 text-left text-slate-600">Что получаете</th>
                  <th className="py-2 px-4 text-left text-slate-600">Срок</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4">Архитектура и техническое задание</td>
                  <td className="py-3 px-4">Документ с детальным планом, как будет работать вся система</td>
                  <td className="py-3 px-4">1 неделя</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">Разработка модулей</td>
                  <td className="py-3 px-4">Рабочие блоки: анализ глав, визуализация, логическая проверка</td>
                  <td className="py-3 px-4">1 неделя</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4">3</td>
                  <td className="py-3 px-4">Интерфейс и взаимодействие</td>
                  <td className="py-3 px-4">Голосовое взаимодействие и админ панель для изменения настроек</td>
                  <td className="py-3 px-4">1 неделя</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4">4</td>
                  <td className="py-3 px-4">Обучение моделей</td>
                  <td className="py-3 px-4">Генерация субагентов под потребности проекта</td>
                  <td className="py-3 px-4">1 неделя</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4">5</td>
                  <td className="py-3 px-4">Мобильные приложения</td>
                  <td className="py-3 px-4">Удобный доступ со смартфона, диктовка на ходу</td>
                  <td className="py-3 px-4">2 недели</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">6</td>
                  <td className="py-3 px-4">Финальное тестирование и запуск</td>
                  <td className="py-3 px-4">Полностью готовая система</td>
                  <td className="py-3 px-4">1 неделя</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-slate-600">Общий срок разработки: 6-8 недель</p>
        </div>
        
        <div className="flex justify-center pt-6">
          <Button size="lg">Заказать проект</Button>
        </div>
      </div>
    </div>
  );
} 