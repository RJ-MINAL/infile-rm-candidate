import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Perfil({ user }) {
    return (
        <div style={{paddingTop: "3.5rem"}} class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, "user.nombre"!</h1>
          <Link to='/logout'>
                <Button renderas='button'>
                  <span>Logout</span>
                </Button>
              </Link>
        </div>
      </div>
    )
}

export default Perfil
