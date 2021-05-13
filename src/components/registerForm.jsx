import React, { PureComponent } from 'react'
import Form from "./common/form";
import http from "../services/httpService";
import auth from "../services/authService";

class RegisterForm extends Form{
  state = {
    data: {
        nombre: "",
        email: "",
        password: "",
        password_confirmation: "",
    }
  };

  register = async (user) => {
    return http.post(http.API.USUARIOS, {
      nombre: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    });
  }

  doSubmit = async () => {
    try {
      const response = await this.register(this.state.data);
      auth.loginWithJwt(response.headers["token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("ERRORS", ex.response.data);
        //   this.setState({ errors });
      }
    }
  };

  render() {

    return (
      <div className='container'>
        <h1>Formulario de Registro</h1>
        <form onSubmit={this.handleSubmit}>
        {this.renderInput("nombre", "Nombre")}
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password")}
        {this.renderInput("password_confirmation", "Password Confirmation")}

        {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
