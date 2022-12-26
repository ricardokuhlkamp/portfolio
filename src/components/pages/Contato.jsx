import React, { Component } from 'react';
import { FaPhone, FaWhatsapp, FaMailBulk, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Contato.module.css';

class Contato extends Component {
  render() {
    return (
      <div>
        <div className={styles.container_01}>
          <div className={styles.container_02}>
            <h1>Contato</h1>
            <div className={styles.container_03}>
              <div className={styles.container_04}>
                <div className={styles.container_05}>
                  <h2><FaPhone /> Telefone</h2>
                  <p>{`(47) 99915-6365`}</p>
                </div>
                <div className={styles.container_05}>
                  <h2><FaWhatsapp /> Whatsapp</h2>
                  <p>{`(47) 99915-6365`}</p>
                </div>
                <div className={styles.container_05}>
                  <h2><FaMailBulk /> E-mail</h2>
                  <p>{`ric.kds@hotmail.com`}</p>
                </div>
                <div className={styles.container_05}>
                  <h2><FaInstagram /> Instagram</h2>
                  <p>{`@ricardokds`}</p>
                </div>
                <div className={styles.container_05}>
                  <h2><FaFacebook /> Facebook</h2>
                  <p>{`facebook.com/ricardo.kulkampdasilva`}</p>
                </div>
                <div className={styles.container_05}>
                  <h2><FaLinkedin /> Linkedin</h2>
                  <p>{`linkedin.com/in/ricardo-kühlkamp-da-silva/`}</p>
                </div>
                <div className={styles.container_05}>
                  <h2><FaGithub /> GitHub</h2>
                  <p>{`https://github.com/ricardokuhlkamp`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </div>

    )
  }
}

export default Contato