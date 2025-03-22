import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>DeceptiMail</h1>
      <p style={{ fontSize: '1.3rem', color: '#8b949e', textAlign: 'center', maxWidth: '800px', margin: '0 auto 30px' }}>
        Entrena tus habilidades de ciberseguridad identificando correos de phishing en simulaciones realistas y desafiantes.
      </p>
      <div style={{ textAlign: 'center' }}>
        <Link to="/challenge">
          <button>Iniciar desafío</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;