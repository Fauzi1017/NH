import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Belajar from './pages/Belajar';
import Budaya from './pages/Budaya';
import Tips from './pages/Tips';
import Artikel from './pages/Artikel';
import DetailArtikel from './pages/DetailArtikel';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="belajar" element={<Belajar />} />
            <Route path="budaya" element={<Budaya />} />
            <Route path="tips" element={<Tips />} />
            <Route path="artikel" element={<Artikel />} />
            <Route path="artikel/:slug" element={<DetailArtikel />} />
            <Route path="tentang" element={<Tentang />} />
            <Route path="kontak" element={<Kontak />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;