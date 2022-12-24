import React, { Component } from 'react';
import styles from './FormacaoAcademica.module.css';

class FormacaoAcademica extends Component {
  render() {
    return (
      <div className={styles.container_01}>
        <div className={styles.container_02}>
          <h1>Formação Acadêmica</h1>
          <div className={styles.container_03}>
            <div className={styles.container_04}>
              <h4>Trybe</h4>
              <h5>Desenvilvimento Web</h5>
              <h5>setembro de 2022 - setembro de 2023</h5>
            </div>
            <div className={styles.container_04}>
              <h4>UNIASSELVI</h4>
              <h5>Tecnólogo, Análise e Desenvolvimento de Sistemas</h5>
              <h5>outubro de 2020 - março de 2023</h5>
            </div>
            <div className={styles.container_04}>
              <h4>Universidade do Estado de Santa Catarina</h4>
              <h5>Bacharelado, Agronomia</h5>
              <h5>2004 - 2009</h5>
            </div>
            <div className={styles.container_04}>
              <h4>Alura</h4>
              <h5>Certificado , Python para Data Science: Primeiros Passos</h5>
              <h5>janeiro de 2022 - janeiro de 2022</h5>
            </div>
            <div className={styles.container_04}>
              <h4>Alura</h4>
              <h5>Certificado , Python para Data Science: Introdução à linguagem e Numpy</h5>
              <h5>janeiro de 2022 - janeiro de 2022</h5>
            </div>
          </div>


        </div>

      </div>

    )
  }
}

export default FormacaoAcademica