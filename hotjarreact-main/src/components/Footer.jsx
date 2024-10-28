import React from 'react';

function Footer({ totalImagens, imagensPorPagina, paginaAtual, onPaginaClick }) {
  const totalPaginas = Math.ceil(totalImagens / imagensPorPagina);

  return (
    <footer style={styles.footer}>
      <button
        onClick={() => onPaginaClick(paginaAtual - 1)}
        disabled={paginaAtual === 1}
        style={styles.button}
      >
        Anterior
      </button>

      {[...Array(totalPaginas)].map((_, index) => {
        const numeroPagina = index + 1;
        return (
          <button
            key={numeroPagina}
            onClick={() => onPaginaClick(numeroPagina)}
            disabled={numeroPagina === paginaAtual}
            style={numeroPagina === paginaAtual ? styles.buttonActive : styles.button}
          >
            {numeroPagina}
          </button>
        );
      })}

      <button
        onClick={() => onPaginaClick(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
        style={styles.button}
      >
        Próximo
      </button>
    </footer>
  );
}

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',
  },
  button: {
    margin: '0 5px',
    padding: '10px 20px',
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonActive: {
    margin: '0 5px',
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#333',
    border: '2px solid #555',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Footer;
