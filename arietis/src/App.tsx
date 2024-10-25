import React from 'react';
import Home from './pages/Home';  // Importamos la página Home
import MainLayout from './layouts/MainLayout';  // Importamos el layout principal

const App: React.FC = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
};

export default App;