import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Article } from '../types';
import ArticleCard from '../components/ArticleCard';
import { Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Artikel: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  useEffect(() => {
    const loadData = async () => {
        const data = await api.getArticles();
        setArticles(data);
    };
    loadData();
  }, []);

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-jp">{t.pages.artikel.title}</h1>
            <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder={t.pages.artikel.search_placeholder}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))
            ) : (
                <div className="col-span-3 text-center py-20 text-gray-500">{t.pages.artikel.not_found}</div>
            )}
       </div>
    </div>
  );
};

export default Artikel;