import React from 'react';

import './index.css';

const Footer = () =>
  <footer className="Footer">
    <ul className="Footer-menu">
      <li className="Footer-item">
        <span className="Footer-link">Busquedas populares</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Directorio</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Quienes somos</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Blog</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Trabajo</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Desarrolladores</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Ayuda</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Legal</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Privacidad</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">Cookies</span>
      </li>
      <li className="Footer-item">
        <span className="Footer-link">SoundCloud Ltd.</span>
      </li>
    </ul>
    <div className="Language">
      <span className="Language-text">Idioma:</span>
      <select className="Language-select">
        <option value="español" className="Language-option">
          Español
        </option>
        <option value="ingles" className="Language-option">
          Ingles
        </option>
      </select>
    </div>
  </footer>;

export default Footer;
