import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
// 1. Asegúrate de importar tu GIF aquí (ajusta la ruta si es necesario)
import shinGif from '../../assets/images/pato.gif';

export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        <Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>

        {/* 2. Añadimos el GIF aquí, fuera del Scrollspy para que no interfiera */}
        <li style={{
          textAlign: 'center',
          marginTop: '30px',
          paddingBottom: '20px',
          listStyle: 'none'
        }}>
          <img
            src={shinGif}
            alt="Shin Chan"
            style={{
              width: '150px',   // Ajusta el tamaño a tu gusto
              height: 'auto',
              display: 'inline-block'
            }}
          />
        </li>
      </ul>
    </nav>
  );
}