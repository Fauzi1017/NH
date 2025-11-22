import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';
import { Article } from '../types';
import { Calendar, User, Tag, Share2 } from 'lucide-react';

const DetailArtikel: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
        if (slug) {
            setLoading(true);
            const data = await api.getArticleBySlug(slug);
            setArticle(data || null);
            setLoading(false);
        }
    };
    loadData();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
  if (!article) return <div className="min-h-screen flex items-center justify-center text-gray-500">Artikel tidak ditemukan.</div>;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
            <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3 uppercase tracking-wide">
                <Tag size={14} />
                <span>{article.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-jp">{article.title}</h1>
            
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6">
                <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <User size={16} />
                        </div>
                        <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{article.created_at}</span>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-primary transition-colors">
                    <Share2 size={20} />
                </button>
            </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
            <img src={article.image} alt={article.title} className="w-full max-h-[500px] object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-red">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Tags / Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Baca Juga</h3>
            {/* Placeholder for related articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 text-sm">
                    Related Article Placeholder 1
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 text-sm">
                    Related Article Placeholder 2
                </div>
            </div>
        </div>
    </article>
  );
};

export default DetailArtikel;