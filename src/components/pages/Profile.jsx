import React, { Component } from 'react';
import styles from './Profile.module.css';
import perfil from '../images/perfil.jpeg';

class Profile extends Component {
  render() {
    return (
      <div className={styles.container_01}>
        <div className={styles.container_img}>
          <img className={styles.perfil} src={perfil} alt="foto de Ricardo" />
        </div>
        <div >
          <h1>Profile</h1>
          <div className={styles.container_02}>
            <h2>Ricardo Kühlkamp da Silva</h2>
            <p>Estudante de Desenvolvimento Web na Trybe; Estudante de Análise e Desenvolvimento de Sistemas na Uniasselvi.</p>
            <h2>Resumo</h2>
            <p>Sou uma pessoa determinada, comprometida, responsável, e
              disposta a aprender novos conhecimentos.</p>
            <p>Possuo formação em engenharia agronômica pela UDESC-Lages/
              SC e atualmente sou funcionário da prefeitura de Balneário Barra do
              Sul-SC.</p>
            <p>Na prefeitura, trabalhando na área ambiental, tive contato com a
              programação através da Linguagem-R para análise de dados de
              inventários florestais o que despertou novamente meu interesse pela
              programação e a vontande e coragem para efetuar uma transição de
              carreira.</p>
            <p>Atualmente estou cursando Análise e Desenvolvimento de Sistemas
              na UNIASSELVI. E concomitantemente sou estudante do curso de
              Desenvonvimento Web da Trybe!</p>
            <p>Atualmente na Trybe conclui os estudos do Módulo de Fundamentos onde estudamos Unix & Bash, Git & GitHub, HTML, CSS, Javascript e agora estou estudando React no Módulo de Front-end</p>
            <p>Tenho interesse em trabalhar com tecnologia, especialmente na
              área de programação como desenvovedor Full-Stack ou Ciência de
              Dados. Meus estudos são parte do movimento que faço para atingir
              meu objetivo de trabalhar no ramo da tecnologia!</p>
          </div>
        </div>

      </div>
    )
  }
}

export default Profile