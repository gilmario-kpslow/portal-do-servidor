/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import logo from '../imagens/icone.png';
export default class Footer extends Component {

    render() {

        return (
                <footer className="page-footer">
                    <div className="container">
                        <div className="media">
                            <div className="media-left">
                                <a href="http://maranguape.ce.gov.br">
                                    <img alt="Imagem" className="responsive-img" src={logo} width="50"/>
                                </a>
                            </div>
                            <div className="media-body text-white">
                                <span className="text-bold">Prefeitura de Maranguape</span><br/>
                                <span>Uma cidade de todos</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            <div className="row  text-center">
                                <div className="col-md-4 col-sm-6">
                                    <span>Célula de Tecnologia da Informação</span>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <span>informatica@maranguape.ce.gov.br</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                )
    }

}
