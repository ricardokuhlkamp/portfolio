import React, { Component } from 'react';
import styles from './Projetos.module.css';
import trybeTunes from '../assets/tt.mp4';
import trybeWarts from '../assets/trybewarts-ricardo.gif';
import tryunfo from '../assets/tryunfo2.gif';
import solarSystem from '../assets/SolarSystem.gif';
import pixelArt from '../assets/pixel-art.ricardo.gif';

class Endereco extends Component {
  render() {
    return (
      <div className={styles.container_01}>
        <div className={styles.container_02}>
          <h1>Projetos</h1>
          <h2>Projetos do Curso Trybe</h2>
          <div className={styles.container_03}>
            <div className={styles.container_04}>
              <div className={styles.container_05}>
                <h4>TrybeTunes</h4>
                <video src={trybeTunes} autoPlay loop muted className={styles.trybe_projects} />
              </div>
              <div className={styles.container_05} >
                <h4>TrybeWarts</h4>
                <img src={trybeWarts} alt="trybewarts" className={styles.trybe_projects} />
              </div>
              <div className={styles.container_05} >
                <h4>TryUnfo</h4>
                <img src={tryunfo} alt="tryunfo" className={styles.trybe_projects} />
              </div>
              <div className={styles.container_05}>
                <h4>Solar System</h4>
                <img src={solarSystem} alt="solarSystem" className={styles.trybe_projects} />
              </div>
              <div className={styles.container_05}>
                <h4>Pixel Art</h4>
                <img src={pixelArt} alt="pixelArt" className={styles.trybe_projects} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Endereco;
