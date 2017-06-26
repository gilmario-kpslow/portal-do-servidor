
import React, { Component } from 'react';
        import {Link, browserHistory} from 'react-router';
        import logo from '../imagens/icone.png';
        import PageHeader from 'react-bootstrap/lib/PageHeader';
        import Navbar from 'react-bootstrap/lib/Navbar';
        import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
        import NavItem from 'react-bootstrap/lib/NavItem';
        import Nav from 'react-bootstrap/lib/Nav';
        import NavDropdown from 'react-bootstrap/lib/NavDropdown';
        import MenuItem from 'react-bootstrap/lib/MenuItem';


        export default class Header extends Component {

        login(e){
            e.preventDefault();
            browserHistory.push("/login");
                    }
        dashboard(e){
            e.preventDefault();
            browserHistory.push("/dashboard");
                    }
        render() {

        return (
<div>
    <header className="bg-green text-white">
        <div className="container">
            <PageHeader>

                <div className="media-left">
                    <a href="http://maranguape.ce.gov.br">
                        <img alt="Imagem" className="media-object" src={logo} width="100"/>
                    </a>
                </div>
                <div className="media-body">
                    <h3 className="media-heading">Prefeitura de</h3>
                    <h2 className="media-heading">de Maranguape</h2>
                    <h4>Espaço do Servidor</h4>
                </div>
            </PageHeader>
        </div>
         <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} onClick={this.dashboard.bind(this)}>DashBoard</NavItem>
      <NavDropdown eventKey={3} title="Serviços" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Solicitar Contracheque</MenuItem>
        <MenuItem eventKey={3.2}>Eventos</MenuItem>
        <MenuItem eventKey={3.3} onClick={this.login.bind(this)}>Login</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} onClick={this.login.bind(this)} position="rigth">Login</NavItem>
                    </Nav>
  </Navbar>
    </header>
</div>
                )
    }

}
