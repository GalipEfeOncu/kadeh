import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const KategoriSayfasi = lazy(() => import('./pages/KategoriSayfasi'));
const DrinkPage = lazy(() => import('./pages/DrinkPage'));
const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="flex-1 flex flex-col items-center justify-center bg-darkBg gap-4">
    <div className="w-10 h-10 border-2 border-[#2a2015] border-t-amberAccent rounded-full animate-spin" />
    <span className="text-textMuted font-mono text-xs tracking-widest uppercase">Yükleniyor...</span>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tur/:ana_tur" element={<KategoriSayfasi />} />
              <Route path="/drink/:id" element={<DrinkPage />} />
              <Route path="/hakkinda" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
      <Analytics />
    </Router>
  );
}

export default App;
