import React, { useState } from 'react';
import { api } from '../services/api';
import { Send, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Kontak: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await api.sendContact(formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info */}
        <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-jp">{t.pages.kontak.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                {t.pages.kontak.desc}
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{t.pages.kontak.form.email}</h3>
                        <p className="text-gray-600 dark:text-gray-400">hello@nandenihon.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{t.pages.kontak.office}</h3>
                        <p className="text-gray-600 dark:text-gray-400">Jakarta Selatan, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            {status === 'success' ? (
                <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.pages.kontak.form.sent_title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{t.pages.kontak.form.sent_desc}</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 text-primary font-medium hover:underline">{t.pages.kontak.form.send_again}</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.pages.kontak.form.name}</label>
                        <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder={t.pages.kontak.form.name}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.pages.kontak.form.email}</label>
                        <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            placeholder="email@contoh.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.pages.kontak.form.message}</label>
                        <textarea 
                            required
                            rows={4}
                            value={formData.message}
                            onChange={e => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            placeholder={t.pages.kontak.form.message + '...'}
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-70"
                    >
                        {status === 'loading' ? t.pages.kontak.form.sending : t.pages.kontak.form.send}
                    </button>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default Kontak;