import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header>
      <Link to='/'>
        Sobre
      </Link>
      <Link to='/desmatamento'>
        Desmatamento
      </Link>
      <Link to='/arvores-nativas'>
        Árvores nativas
      </Link>
      <Link to='/fauna-e-flora'>
        {'Fauna & Flora'}
      </Link>
      <Link to='/doar'>
        Doe uma árvore
      </Link>
    </header>
  );
}

export default Header;