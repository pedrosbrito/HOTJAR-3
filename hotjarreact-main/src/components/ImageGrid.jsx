import React from 'react';
import { useNavigate } from 'react-router-dom';

function ImageGrid({ imagens }) {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/image/${id}`);
  };

  return (
    <div style={styles.grid}>
      {imagens.map((img) => (
        <div
          key={img.id}
          style={styles.imageWrapper}
          onClick={() => handleImageClick(img.id)}
        >
          <img src={img.url} alt={img.title} style={styles.image} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',  // Responsivo
    gap: '20px',
    justifyItems: 'center',
    width: '100%',
    padding: '20px',
    maxWidth: '1200px',  // Limita a largura máxima para telas maiores
  },
  imageWrapper: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: '10px',  // Bordas arredondadas para as imagens
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',  // Faz com que a imagem preencha corretamente o espaço
  },
};

export default ImageGrid;
