import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Article } from '../types';
import ArticleCard from '../components/ArticleCard';
import { useLanguage } from '../contexts/LanguageContext';

const Belajar: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const loadData = async () => {
        setLoading(true);
        // In a real app, we would pass the language code to the API
        const data = await api.getArticles('Belajar');
        setArticles(data);
        setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-jp">{t.pages.belajar.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.pages.belajar.desc}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
            { label: t.pages.belajar.levels.n5, code: 'N5' },
            { label: t.pages.belajar.levels.n4, code: 'N4' },
            { label: t.pages.belajar.levels.n3, code: 'N3' },
            { label: t.pages.belajar.levels.n2, code: 'N2/N1' }
        ].map((level, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors cursor-pointer">
                <div className="text-2xl font-bold text-primary mb-1">{level.label}</div>
                <div className="text-sm text-gray-500">{level.code}</div>
            </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t.pages.belajar.latest}</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map(i => <div key={i} className="h-80 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Belajar;