import { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout.jsx';
import Loader from './components/Loader.jsx';

// Lazy load pages
const Home = lazy(() => import('./pages/Home.jsx'));
const Branches = lazy(() => import('./pages/Branches.jsx'));
const BranchDetail = lazy(() => import('./pages/BranchDetail.jsx'));
const Rooms = lazy(() => import('./pages/Rooms.jsx'));
const Amenities = lazy(() => import('./pages/Amenities.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Sitemap = lazy(() => import('./pages/Sitemap.jsx'));
const Reviews = lazy(() => import('./pages/Reviews.jsx'));
const LeaveReview = lazy(() => import('./pages/LeaveReview.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/Home" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/Branches" element={<PageTransition><Branches /></PageTransition>} />
            <Route path="/BranchDetail" element={<PageTransition><BranchDetail /></PageTransition>} />
            <Route path="/Rooms" element={<PageTransition><Rooms /></PageTransition>} />
            <Route path="/Amenities" element={<PageTransition><Amenities /></PageTransition>} />
            <Route path="/Contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/Sitemap" element={<PageTransition><Sitemap /></PageTransition>} />
            <Route path="/Reviews" element={<PageTransition><Reviews /></PageTransition>} />
            <Route path="/leave-review" element={<PageTransition><LeaveReview /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}

export default App;
