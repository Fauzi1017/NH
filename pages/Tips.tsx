import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Article } from '../types';
import ArticleCard from '../components/ArticleCard';
import { useLanguage } from '../contexts/LanguageContext';

const Tips: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const loadData = async () => {
        const data = await api.getArticles('Tips');
        setArticles(data);
    };
    loadData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-jp">{t.pages.tips.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{t.pages.tips.subtitle}</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
       </div>
    </div>
  );
};

export default Tips;