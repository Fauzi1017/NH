import { mockArticles, mockCategories } from './mockData';
import { ContactForm, NewsletterForm } from '../types';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  getArticles: async (category?: string) => {
    await delay(500);
    if (category) {
      return mockArticles.filter(a => a.category.toLowerCase() === category.toLowerCase());
    }
    return mockArticles;
  },

  getArticleBySlug: async (slug: string) => {
    await delay(500);
    return mockArticles.find(a => a.slug === slug);
  },

  getCategories: async () => {
    await delay(300);
    return mockCategories;
  },

  sendContact: async (data: ContactForm) => {
    await delay(1000);
    console.log('Contact sent:', data);
    return { success: true, message: 'Pesan berhasil dikirim!' };
  },

  subscribeNewsletter: async (data: NewsletterForm) => {
    await delay(800);
    console.log('Newsletter subscribed:', data);
    return { success: true, message: 'Berhasil berlangganan newsletter!' };
  }
};