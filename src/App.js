import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import NotFound from './components/notFound';

class App extends Component {
  state = {};

  // componentDidMount() {
  //   const user = auth.getCurrentUser();
  //   this.setState({ user });
  // }

  render() {
    // const { user } = this.state;
    const { user } = '';

    return (
      <React.Fragment>
        {/* <NavBar user={user} /> */}
        <main className='container'>
          <Switch>
            {/* <Route path='/registro' component={Registro} /> */}
            {/* <Route path='/login' component={Login} /> */}
            {/* <Route path='/perfil' component={Perfil} /> */}
            {/* <Route path="/cargacv" component={cargacv} />
      <Route path="/mostrarcv" component={mostrarcv} />
      <Route path="/logout" component={Logout} /> */}
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
