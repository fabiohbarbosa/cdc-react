import React, { Component } from 'react';
import './App.css';

// pure
import './css/pure-min.css';
import './css/side-menu.css';

// components
import LeftBar from './components/LeftBar';
import CustomForm from './components/CustomForm';
import CustomInput from './components/CustomInput';
import CustomButtonSubmit from './components/CustomButtonSubmit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      senha: '',
      autores : []
    };
    this.url = 'http://localhost:8080/api/autores';
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  componentDidMount() {
    fetch(this.url, {
      method: 'get'
    }).then((response) => {
      response.json().then((result) => {
        this.setState({autores: result});
      });
    }).catch(function(err) {
      console.error(err);
    });
  }

  enviaForm(event) {
    event.preventDefault();

    let autor = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha
    }

    fetch(this.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(autor)
    }).then((response) => {
      response.json().then((result) => {
        this.setState({autores: result});
      });
    }).catch(function(err) {
      console.error(err);
    });
  }

  setNome(event) {
    this.setState({ nome: event.target.value });
  }

  setEmail(event) {
    this.setState({ email: event.target.value });
  }

  setSenha(event) {
    this.setState({ senha: event.target.value });
  }

  render() {
    return (
      <div id="layout">
        <LeftBar />

        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>

          <div className="content" id="content">
            <CustomForm onSubmit={this.enviaForm}>
              <CustomInput id="nome" label="Nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} />
              <CustomInput id="email" label="E-mail" type="email" name="email" value={this.state.email} onChange={this.setEmail} />
              <CustomInput id="senha" label="Senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} />

              <CustomButtonSubmit name="Salvar" />
            </CustomForm>

            <table className="pure-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.autores.map((autor) => {
                  return(
                    <tr key={autor.id}>
                      <td>{autor.nome}</td>
                      <td>{autor.email}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
