import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/cubo.gif";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";
import Cookies from 'js-cookie'

class SignIn extends Component {
  state = {
    usuario: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { usuario, password } = this.state;
    if (!usuario || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try { 
        //const response = await api.post("/sessions", { email, password });
        const response = await api.post("/oauth2/v1/token?grant_type=password&password="+password+"&username="+usuario, { usuario, password });
        console.log("Requisição:")
        console.log(response.data.access_token);
        try { 
          localStorage.setItem('portal2', response.data.access_token);
          Cookies.set = ('portal2','response.data.access_token')
          console.log("cookie OK")
          }
        catch (err){
          console.log(err)
        }
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="Airbnb logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="usuario"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ usuario: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
          <Link to="/signup">Criar conta grátis</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
