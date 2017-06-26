<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Servidor
 *
 * @author gilmario
 */
class Servidor {

    public function __construct($nome = "", $aplido = "") {
        $this->nome = $nome;
        $this->apelido = $aplido;
    }

    private $nome;
    private $apelido;

    function getNome() {
        return $this->nome;
    }

    function getApelido() {
        return $this->apelido;
    }

    function setNome($nome) {
        $this->nome = $nome;
    }

    function setApelido($apelido) {
        $this->apelido = $apelido;
    }

}
