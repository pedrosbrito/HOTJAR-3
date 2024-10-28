import React from 'react';
import { useParams } from 'react-router-dom';
import { imagensGaleria } from '../data/imagensGaleria';
import Header from '../components/Header';

function SelectedImage() {
  const { id } = useParams(); // Hook do React Router para pegar o ID da URL
  const image = imagensGaleria.find((img) => img.id === parseInt(id)); // Encontra a imagem com base no ID

  if (!image) {
    return <div>Imagem não encontrada</div>; // Caso o ID não corresponda a nenhuma imagem
  }

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        {/* Título centralizado */}
        <h1 style={styles.title}>{image.title}</h1>

        {/* Container da imagem e descrição */}
        <div style={styles.imageWrapper}>
          <img src={image.url} alt={image.title} style={styles.image} />
        </div>

        {/* Descrição centralizada */}
        <div style={styles.descriptionWrapper}>
          <p style={styles.description}>{image.description}</p>
        </div>
      </div>
    </div>
  );
}

// Estilos inline para centralizar a página da imagem
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    minHeight: '100vh', // Ocupa toda a altura da tela
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  content: {
    textAlign: 'center', // Centraliza o texto e a imagem no eixo horizontal
    maxWidth: '800px', // Limita a largura máxima do conteúdo
    width: '100%', // Garante que o conteúdo ocupe 100% da tela até o limite de maxWidth
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  imageWrapper: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center', // Centraliza a imagem
    width: '100%',
  },
  image: {
    maxWidth: '100%', // Limita a imagem para que ela não ultrapasse a largura disponível
    height: 'auto', // Mantém a proporção da imagem
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adiciona uma leve sombra à imagem
  },
  descriptionWrapper: {
    marginTop: '20px',
    textAlign: 'center', // Centraliza o texto
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#555',
  },
};

export default SelectedImage;
