import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <nav className={ styles.navbar }>
        <ul className={ styles.list }>
          <li className={ styles.item }>
            <Link to="/">Profile</Link>
          </li>
          <li className={ styles.item }>
            <Link to="/experiencia">Experiencia</Link>
          </li>
          <li className={ styles.item }>
            <Link to="/formacao">Formação Acadêmica</Link>
          </li>
          <li className={ styles.item }>
            <Link to="/habilidades">Habilidades</Link>
          </li>
          <li className={ styles.item }>
            <Link to="/endereco">Endereço</Link>
          </li>
          <li className={ styles.item }>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
