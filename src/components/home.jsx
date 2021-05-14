import React, { PureComponent } from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Home extends PureComponent {
    render() {
      const { user } = this.props;
      console.log("home props", this.props);
        return (
            <React.Fragment>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <p>
                Candidate:  <code className="code" >Rolando Minera</code> react website.
              </p>

              {!user && (
              <div style={{display: "flex"}}>
                <Link to='/registro'>
                  <Button size="lg">
                    <span>Registro</span>
                  </Button>
                </Link>
                <Link to='/login'>
                  <Button size="lg">
                    <span>Login</span>
                  </Button>
                </Link>
              </div>
              )}

              {user && (
              <div style={{display: "flex"}}>
                <Link to='/perfil'>
                  <Button renderas='button'size="lg">
                    <span>Profile</span>
                  </Button>
                </Link>
                <Link to='/logout'>
                  <Button renderas='button' size="lg">
                    <span>Logout</span>
                  </Button>
                </Link>
              </div>
              )}
            </header>
          </React.Fragment>
        )
    }
}

export default Home