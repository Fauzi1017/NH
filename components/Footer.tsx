import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">N</div>
                <span className="font-bold text-xl text-gray-900 dark:text-white font-jp">
                Nande<span className="text-primary">Nihon</span>
                </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 font-jp">{t.footer.menu}</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/belajar" className="hover:text-primary transition-colors">{t.nav.learn}</Link></li>
              <li><Link to="/budaya" className="hover:text-primary transition-colors">{t.nav.culture}</Link></li>
              <li><Link to="/tips" className="hover:text-primary transition-colors">{t.nav.tips}</Link></li>
              <li><Link to="/artikel" className="hover:text-primary transition-colors">{t.nav.articles}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 font-jp">{t.footer.connect}</h3>
            <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube size={20} /></a>
            </div>
            <p className="text-sm text-gray-500">Email: konnichiwa@nandenihon.com</p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Nande Nihon. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;