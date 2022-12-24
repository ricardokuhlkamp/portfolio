import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Profile from './components/pages/Profile';
import Experiencia from './components/pages/Experiencia';
import FormacaoAcademica from './components/pages/FormacaoAcademica';
import Habilidades from './components/pages/Habilidades';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Endereco from './components/pages/Endereco';
import Contato from './components/pages/Contato';


class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Container customClass="min-height">
              <Route path="/portfolio" component={Profile} />
              <Route exact path="/" component={Profile} />
              <Route path="/experiencia" component={Experiencia} />
              <Route path="/formacao" component={FormacaoAcademica} />
              <Route path="/habilidades" component={Habilidades} />
              <Route path="/endereco" component={Endereco} />
              <Route path="/contato" component={Contato} />
            </Container>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }  
}

export default App;
