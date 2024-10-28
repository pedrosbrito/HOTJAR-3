import React from 'react';
import { useNavigate } from 'react-router-dom';

// O Header vai redirecionar para a Home com a categoria na URL.
function Header() {
  const navigate = useNavigate();

  // Ao clicar em uma categoria, vamos navegar para a Home passando a categoria pela URL
  const handleCategoriaClick = (categoria) => {
    navigate(`/?categoria=${categoria}`); // Navega para a Home com a categoria como query string
  };

  return (
    <header style={styles.header}>
      {/* Ícone alinhado à esquerda */}
      <div style={styles.icon} onClick={() => handleCategoriaClick('')}>🔥</div>
      {/* Navegação com botões alinhados à direita */}
      <nav style={styles.nav}>
        <button onClick={() => handleCategoriaClick('')}>Home</button>
        <button onClick={() => handleCategoriaClick('esportes')}>Esportes</button>
        <button onClick={() => handleCategoriaClick('jogos')}>Jogos</button>
        <button onClick={() => handleCategoriaClick('desenhos')}>Desenhos</button>
      </nav>
    </header>
  );
}

// Estilos inline para o Header
const styles = {
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between', // Distribui o ícone e os botões nas extremidades
    alignItems: 'center', // Centraliza verticalmente
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer', // Mostra que o ícone é clicável
  },
  nav: {
    display: 'flex',
    gap: '15px', // Espaçamento entre os botões
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '10px 15px',
  },
  buttonHover: {
    backgroundColor: '#555',
    borderRadius: '5px',
  }
};

export default Header;
