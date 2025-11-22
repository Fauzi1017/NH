import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Coffee, MapPin } from 'lucide-react';
import { api } from '../services/api';
import { Article } from '../types';
import ArticleCard from '../components/ArticleCard';
import NewsletterForm from '../components/NewsletterForm';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getArticles();
      setRecentArticles(data.slice(0, 3));
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-off-white dark:bg-gray-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-50 dark:bg-red-900/10 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gray-100 dark:bg-gray-800 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 mb-6 shadow-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">{t.hero.tagline}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6 font-jp">
              {t.hero.title_pre} <span className="text-primary relative inline-block">
                {t.hero.title_highlight}
                <svg className="absolute bottom-2 left-0 w-full h-3 -z-10 text-red-200 dark:text-red-900 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="10" fill="none" />
                </svg>
              </span> {t.hero.title_post && <span>{t.hero.title_post}</span>}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/belajar" className="px-8 py-4 bg-primary hover:bg-red-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2">
                {t.hero.cta_start} <ArrowRight size={18} />
              </Link>
              <Link to="/budaya" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center">
                {t.hero.cta_explore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nande Nihon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { icon: BookOpen, title: t.sections.learn_lang, desc: t.sections.learn_sub },
                { icon: MapPin, title: t.sections.culture_art, desc: t.sections.culture_sub },
                { icon: Coffee, title: t.sections.life_japan, desc: t.sections.life_sub }
            ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-primary mb-4">
                        <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white font-jp">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-jp">{t.sections.explore_topics}</h2>
                <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Link to="/belajar" className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                    <img src="https://picsum.photos/600/400?random=10" className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Belajar" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <div>
                            <h3 className="text-white text-2xl font-bold font-jp">{t.sections.learn_lang}</h3>
                            <p className="text-gray-200 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{t.sections.learn_sub}</p>
                        </div>
                    </div>
                </Link>
                <Link to="/budaya" className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                    <img src="https://picsum.photos/600/400?random=11" className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Budaya" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                         <div>
                            <h3 className="text-white text-2xl font-bold font-jp">{t.sections.culture_art}</h3>
                            <p className="text-gray-200 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{t.sections.culture_sub}</p>
                        </div>
                    </div>
                </Link>
                <Link to="/tips" className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer">
                    <img src="https://picsum.photos/600/400?random=12" className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Tips" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                         <div>
                            <h3 className="text-white text-2xl font-bold font-jp">{t.sections.life_japan}</h3>
                            <p className="text-gray-200 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{t.sections.life_sub}</p>
                        </div>
                    </div>
                </Link>
            </div>
          </div>
      </section>

      {/* Recent Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-jp">{t.sections.latest_articles}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{t.sections.latest_sub}</p>
            </div>
            <Link to="/artikel" className="text-primary font-medium hover:text-red-700 flex items-center gap-1">{t.sections.view_all} <ArrowRight size={16}/></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterForm />
      </section>
    </div>
  );
};

export default Home;