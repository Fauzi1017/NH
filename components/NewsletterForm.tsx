import React, { useState } from 'react';
import { api } from '../services/api';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await api.subscribeNewsletter({ email });
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-primary/10 dark:bg-primary/20 p-8 rounded-2xl text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        <h3 className="text-2xl font-bold mb-2 dark:text-white font-jp">{t.newsletter.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{t.newsletter.desc}</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
            <input 
                type="email" 
                placeholder={t.newsletter.placeholder} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
                type="submit" 
                disabled={status === 'loading'}
                className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-70"
            >
                {status === 'loading' ? '...' : <><Send size={18} /> {t.newsletter.button}</>}
            </button>
        </form>
        {status === 'success' && <p className="text-green-600 mt-3 text-sm">{t.newsletter.success}</p>}
    </div>
  );
};

export default NewsletterForm;