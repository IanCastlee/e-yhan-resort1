import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import EyhanLayout from './components/EyhanLayout';
import eyhanResortData from './data/eyhanResort';

import EyhanHome from './pages/EyhanHome';
import EyhanVillasPage from './pages/EyhanVillasPage';
import EyhanExperiencesPage from './pages/EyhanExperiencesPage';
import EyhanWellnessPage from './pages/EyhanWellnessPage';
import EyhanGalleryPage from './pages/EyhanGalleryPage';
import EyhanReservePage from './pages/EyhanReservePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function App() {
  const { brand, navigation, contact } = eyhanResortData;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <EyhanLayout brand={brand} navigation={navigation} contact={contact}>
          <Routes>
            <Route path="/" element={<EyhanHome />} />
            <Route path="/villas" element={<EyhanVillasPage />} />
            <Route path="/experiences" element={<EyhanExperiencesPage />} />
            <Route path="/wellness" element={<EyhanWellnessPage />} />
            <Route path="/gallery" element={<EyhanGalleryPage />} />
            <Route path="/reserve" element={<EyhanReservePage />} />
          </Routes>
        </EyhanLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
