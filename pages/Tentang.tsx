import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Tentang: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center font-jp">{t.pages.tentang.title}</h1>
      
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <p><strong>{t.pages.tentang.p1}</strong></p>
        <p>{t.pages.tentang.p2}</p>
        <p>{t.pages.tentang.p3}</p>
        
        <h3>{t.pages.tentang.mission}</h3>
        <ul>
            <li>{t.pages.tentang.m1}</li>
            <li>{t.pages.tentang.m2}</li>
            <li>{t.pages.tentang.m3}</li>
        </ul>

        <div className="not-prose bg-red-50 dark:bg-red-900/20 p-6 rounded-xl my-8 border-l-4 border-primary">
            <p className="text-primary font-bold italic">{t.pages.tentang.quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;