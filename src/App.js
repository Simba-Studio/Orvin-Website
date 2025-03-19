import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Modal from './components/Modal';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isModal =
    location.pathname === '/privacy' || location.pathname === '/terms';

  const handleCloseModal = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <Routes location={location}>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <AnimatePresence>
        {isModal && (
          <Modal onClose={handleCloseModal}>
            <Routes location={location}>
              <Route path='/privacy' element={<PrivacyPage />} />
              <Route path='/terms' element={<TermsPage />} />
            </Routes>
          </Modal>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
