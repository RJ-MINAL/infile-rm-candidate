import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/navbar';
import Home from './components/home';
import NotFound from './components/notFound';
import ProtectedRoute from './components/common/protectedRoute';
import auth from './services/authService';
import Registro from './components/registerForm';
import Login from './components/loginForm';
import Logout from './components/logout';
import Perfil from './components/perfil';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className='App'>
          <Switch>
            <Route path='/registro' component={Registro} />
            <Route path='/login' component={Login} />
            <ProtectedRoute path='/perfil' component={Perfil} user={user} />
            <Route path='/logout' component={Logout} />
            {/* <Route path="/cargacv" component={cargacv} />
                <Route path="/mostrarcv" component={mostrarcv} /> */}
            <Route
              path='/home'
              render={(props) => <Home {...props} user={user} />}
            />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/home' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
