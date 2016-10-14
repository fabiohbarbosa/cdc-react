import React, { Component } from 'react';

// pure
import './css/pure-min.css';
import './css/side-menu.css';

// components
import CustomInput from './components/CustomInput';
import CustomButtonSubmit from './components/CustomButtonSubmit';

const URL = 'http://localhost:8080/api/autores';

/*############### FORM ###############*/
class AuthorForm extends Component {

  constructor() {
    super();
    this.state = {
      author: {},
      authors : []
    };
    this.submit = this.submit.bind(this);
    this.setName = this.setName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.submit} method="post">
          <CustomInput id="nome" label="Nome" type="text" name="nome" value={this.state.author.nome} onChange={this.setName} />
          <CustomInput id="email" label="E-mail" type="email" name="email" value={this.state.author.email} onChange={this.setEmail} />
          <CustomInput id="senha" label="Senha" type="password" name="senha" value={this.state.author.senha} onChange={this.setPassword} />

          <CustomButtonSubmit name="Salvar" />
        </form>
      </div>
    )
  }

  submit(event) {
    event.preventDefault();

    let author = {
      nome: this.state.author.nome,
      email: this.state.author.email,
      senha: this.state.author.senha
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(author)
    }).then((response) => {
      response.json().then((result) => {
        // TODO enviar para a listagem
        // this.setState({autores: result});
      });
    }).catch(function(err) {
      console.error(err);
    });
  }

  setName(event) {
    this.setState({ author: { name: event.target.value } });
  }

  setEmail(event) {
    this.setState({ author: { email: event.target.value } });
  }

  setPassword(event) {
    this.setState({ author: { password: event.target.value } });
  }

}

/*############### TABLE ###############
class AuthorTable extends Component {
  render() {
    return (
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
    );
  }
}
*/

/*############### BOX ###############*/
export default class Author extends Component {

  render() {
    return (
      <div id="layout">

        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>

          <div className="content" id="content">
            <AuthorForm/>
          </div>
        </div>
      </div>
    );
  }
}
