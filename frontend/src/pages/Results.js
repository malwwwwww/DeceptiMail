import React from 'react';
import { Link } from 'react-router-dom';

function Results({ location }) {
  const responses = location.state?.responses || [];
  const score = responses.filter(r => r.isCorrect).length * 10;
  const total = responses.length * 10;

  return (
    <div className="container">
      <h1>Resultados del desafío</h1>
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <p style={{ fontSize: '2rem', color: '#c9d1d9' }}>
          Puntuación: <strong style={{ color: '#58a6ff' }}>{score}/{total}</strong>
        </p>
        <p style={{ fontSize: '1.2rem', color: '#8b949e', maxWidth: '600px', margin: '20px auto' }}>
          Revisa tus respuestas y aprende a detectar señales sutiles en los correos electrónicos para mejorar tu seguridad.
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">
          <button>Volver al inicio</button>
        </Link>
      </div>
    </div>
  );
}

export default Results;