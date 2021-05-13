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
            <React.Fragment>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <p>
                Infile Candidate: <code>Rolando Minera</code> react website.
              </p>
              <Link to='/registro'>
                <Button renderas='button'>
                  <span>Registro</span>
                </Button>
              </Link>
            </header>
          </React.Fragment>
        )
    }
}

export default Home