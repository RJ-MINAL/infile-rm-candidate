import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import http from '../services/httpService'

class Perfil extends PureComponent {
  constructor(props) {
    super(props)

    // this.state = { userUrl: props.userUrl }
    this.state = {}
  }

  getUserData = () => {
    return http.get(http.API.USUARIOS);
  }

  async componentDidMount() {
    //moveria a protectedRoute de ser necesario
    const { data } = await http.get(http.API.USUARIOS);
    console.log("PERFIL DID MOUNT", data);
    this.setState({ user: {...data} })
  }

  doSubmit = async () => {
    try {
      const response = await this.register(this.state.data);
      console.log("response", response);
      // auth.loginWithJwt(response.headers["token"]);
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log("ERRORS", ex.response.data);
        //   this.setState({ errors });
      }
    }
  };

  render() {
    const { user } = this.state;
    
    return (
      <div style={{paddingTop: "3.5rem"}} className="jumbotron">
      <div className="container">
      {!user && <h1 className="display-3">Hello!</h1> }
        {user && (
            <React.Fragment>
              <h1 className="display-3">Hello, {user.nombre}!</h1>
              <p>Email: {user.email} </p>
              <p>URL: {user.url} </p>
            </React.Fragment>
          )}
        <Link to='/logout'>
              <Button renderas='button'>
                <span>Logout</span>
              </Button>
            </Link>
      </div>
    </div>
    )
  }
}

export default Perfil;