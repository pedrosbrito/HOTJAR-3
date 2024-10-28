import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Usaremos para ler a categoria da URL
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
import Footer from '../components/Footer';
import { imagensGaleria } from '../data/imagensGaleria';

function Home() {
  const [paginaAtual, setPaginaAtual] = useState(1); // Estado para a página atual
  const location = useLocation(); // Usado para pegar a query string da URL
  const searchParams = new URLSearchParams(location.search); // Pega a string de busca (query string)
  const categoria = searchParams.get('categoria') || ''; // Pega a categoria da query string, ou '' para Home

  // Filtrando as imagens com base na categoria da URL
  const imagensFiltradas = categoria
    ? imagensGaleria.filter((img) => img.categoria === categoria)
    : imagensGaleria;

  // Define quantas imagens serão exibidas por página e calcula o intervalo de exibição
  const imagensPorPagina = 9;
  const inicio = (paginaAtual - 1) * imagensPorPagina;
  const fim = inicio + imagensPorPagina;
  const imagensExibidas = imagensFiltradas.slice(inicio, fim); // Filtra as imagens para a página atual

  useEffect(() => {
    setPaginaAtual(1); // Sempre que a categoria mudar, voltamos para a página 1
  }, [categoria]);

  return (
    <div style={styles.container}>
      <Header />
      <h1 style={styles.title}>Galeria de Fotos</h1>
      <ImageGrid imagens={imagensExibidas} />
      <Footer
        totalImagens={imagensFiltradas.length}
        imagensPorPagina={imagensPorPagina}
        paginaAtual={paginaAtual}
        onPaginaClick={setPaginaAtual} // Atualiza a página ao clicar na paginação
      />
    </div>
  );
}

// Estilos inline para a página Home
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    margin: '20px 0',
  },
};

export default Home;
