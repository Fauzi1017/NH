import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const links = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.learn, path: '/belajar' },
    { name: t.nav.culture, path: '/budaya' },
    { name: t.nav.tips, path: '/tips' },
    { name: t.nav.articles, path: '/artikel' },
    { name: t.nav.about, path: '/tentang' },
    { name: t.nav.contact, path: '/kontak' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform">N</div>
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white font-jp">
              Nande<span className="text-primary">Nihon</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <DarkModeToggle />
            <Link 
                to="/belajar"
                className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap"
            >
                {t.nav.start}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-red-50 dark:bg-red-900/20 text-primary'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
                <Link to="/belajar" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary text-white px-4 py-2 rounded-lg font-medium">
                    {t.nav.start}
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;