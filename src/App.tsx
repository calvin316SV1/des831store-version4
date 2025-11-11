
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import routes from './router/config';
import Header from './components/feature/Header';
import Footer from './components/feature/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={__BASE_PATH__}>
        <div className="App">
          <LanguageSwitcher />
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
