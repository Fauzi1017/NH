import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Article } from '../types';
import ArticleCard from '../components/ArticleCard';
import { useLanguage } from '../contexts/LanguageContext';

const Budaya: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const loadData = async () => {
        const data = await api.getArticles('Budaya');
        setArticles(data);
    };
    loadData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="relative rounded-2xl overflow-hidden mb-12 h-64 md:h-80">
            <img src="https://picsum.photos/1200/400?random=20" alt="Culture" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-jp">{t.pages.budaya.title}</h1>
                    <p className="text-lg opacity-90">{t.pages.budaya.subtitle}</p>
                </div>
            </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
       </div>
    </div>
  );
};

export default Budaya;