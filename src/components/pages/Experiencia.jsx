import React, { Component } from 'react';
import styles from './Experiencia.module.css';

class Experiencia extends Component {
  render() {
    return (
      <div className={styles.container_01}>
        <div className={styles.container_02}>
        <h1>Experiência</h1>
          <div className={styles.container_03}>
          <div className={styles.container_04}>
            <h4>Prefeitura Municipal de Balneário Barra do Sul - SC</h4>
            <h5>engenheiro agrônomo</h5>
            <h5>março de 2019 - Present (3 anos 10 meses)</h5>
            <h5>Balneário Barra do Sul - SC</h5>
            <p>engenheiro agrônomo efetivo na Seplan (Secretaria de Planejamento), setor
              de Meio Ambiente, na Prefeitura Municipal de Balneário Barra do Sul - SC.</p>
          </div>
          <div className={styles.container_04}>
            <h4>Consultor técnico de vendas comissionado (fertilizantes Ferticel)</h4>
            <h5>Autônomo</h5>
            <h5>agosto de 2017 - março de 2019 (1 ano 8 meses)</h5>
            <h5>Litoral norte catarinense e grande Florianópolis</h5>
            <p>Realização de visitas aos produtores rurais, efetuando a venda de fertilizantes
              orgânicos e organominerais direto de fábrica.</p>
          </div>
          <div className={styles.container_04}>
            <h4>Agricultura</h4>
            <h5>agricultor/engenheiro agrônomo</h5>
            <h5>janeiro de 2017 - agosto de 2017 (8 meses)</h5>
            <h5>Luis Alves, SC, Brasil</h5>
            <p>Cultivo de hortaliças.</p>
          </div>
          <div className={styles.container_04}>
            <h4>Proagro agropecuária ltda me</h4>
            <h5>engenheiro agrônomo</h5>
            <h5>janeiro de 2014 - janeiro de 2017 (3 anos 1 mês)</h5>
            <h5>Luis Alves, SC, Brasil</h5>
            <p>Comercialização de insumos agrícolas.</p>
          </div>
          <div className={styles.container_04}>
            <h4>Credialves</h4>
            <h5>engenheiro agrônomo</h5>
            <h5>setembro de 2009 - abril de 2013 (3 anos 8 meses)</h5>
            <h5>Luis Alves, SC, Brasil</h5>
            <p>Elaboração de projetos de custeio e investimento agrícola.</p>
          </div>
          </div>          
        </div>

      </div >
    )
  }
}

export default Experiencia;
