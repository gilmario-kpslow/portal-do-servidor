import React, { Component } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Login from './componentes/Login';

class App extends Component {
    render() {
        return (
                <div >
                    <Header/>
                    <main className="main container">
                        {this.props.children}
                    </main>
                    <Footer/>
                </div>
                );
    }
}
;
export default App;
