import React, { Component } from 'react';
        export default class Login extends Component {

        render() {

        return (
<section className="login">
    <form method="POST" className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-lg-offset-4 col-md-offset-3 col-sm-6 col-sm-offset-3">
                <div className="panel panel-green">
                    <div className="panel-heading">
                        <h3 className="panel-title text-bold"><i className="fa fa-user left small"></i> Login</h3>
                    </div>
                    <div className="panel-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <label htmlFor="login" className="label label-green">Login</label>
                                    <input name="usuario_" id="login" required="required" className="form-control" type="text"/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <label className="label label-green" htmlFor="senha">Senha</label>
                                    <input name="senha_" id="senha" required="required" className="form-control" type="password"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-md-12">
                                <button type="button" className="btn btn-green form-control"><i className="fa fa-check left small"></i>Login</button>
                            </div>
                        </div>
                        <div className="row">
                            <br/>
                            <div className="col-md-12">
                                <a href="#">Não estou conseguindo acessar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</section>
                )
        }

        }
