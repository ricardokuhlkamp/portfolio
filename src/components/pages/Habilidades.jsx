import React, { Component } from 'react';
import styles from './Habilidades.module.css';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

class Habilidades extends Component {
  render() {
    return (
      <div className={styles.container_01}>
        <div className={styles.container_02}>
          <h1>Habilidades</h1>
          <div className={styles.container_03}>
            <div className={styles.container_04}>
              <div className={styles.container_05}>
                <h2>HardSkills</h2>
                <p>HTML <FaHtml5 /></p>
                <p>CSS <FaCss3 /></p>
                <p>Javascript <FaJs /></p>
                <p>React <FaReact /></p>
              </div>
              <div className={styles.container_05}>
                <h4>SoftSkills</h4>
                <p>Honestidade</p>
                <p>Disposição para aprender</p>
                <p>Comprometimento e Responsabildade</p>
                <p>Disposição para cooperar e colaborar</p>
              </div>
            </div>
          </div>
        </div >
      </div>
    )
  }
}

export default Habilidades;