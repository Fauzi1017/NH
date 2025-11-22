import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { Calendar, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/artikel/${article.slug}`} className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      <div className="relative overflow-hidden h-48">
        <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider backdrop-blur-sm">
            {article.category}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 font-jp">
            {article.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
            {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4">
            <div className="flex items-center gap-1">
                <User size={14} />
                <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{article.created_at}</span>
            </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;