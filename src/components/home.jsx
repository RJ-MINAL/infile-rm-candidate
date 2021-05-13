import React, { PureComponent } from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <Link to='/registro'>
                <Button renderAs='button'>
                  <span>Registro</span>
                </Button>
              </Link>
            </header>
          </div>
        )
    }
}

export default Home