import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SelectedImage from './pages/SelectedImage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />
        {/* Página de imagem selecionada */}
        <Route path="/image/:id" element={<SelectedImage />} />
        {/* Futuramente, você pode adicionar rotas de categoria, como: */}
        {/* <Route path="/category/:categoria" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
