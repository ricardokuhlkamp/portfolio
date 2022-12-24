import React, { Component } from 'react';
import styles from './Endereco.module.css';

class Endereco extends Component {
  render() {
    return (
      <div className={styles.container_01}>
        <div className={styles.container_02}>
          <h1>Endereço</h1>
          <div className={styles.container_03}>
            <div className={styles.container_04}>
              <div className={styles.container_05}>
                <p>Rua Paulo Kraisch, nº27</p>
                <p>Apartamento 03</p>
                <p>Bairro: Vila do Salto</p>
                <p>Luiz Alves / SC</p>
                <p>CEP: 89128-000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Endereco;
