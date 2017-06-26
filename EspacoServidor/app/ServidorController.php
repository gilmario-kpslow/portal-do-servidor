<?php

include './Servidor.php';
include './JSonUtil.php';

class ServidorController {

    function mostraDados() {
        $ser = new Servidor("gilmario", "batista");
        return JSonUtil::criaJSONObject($ser);
    }

}

?>
