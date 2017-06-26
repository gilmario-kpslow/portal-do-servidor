<?php

class IndexController {

    function index() {
        $ser = new Servidor("gilmario", "batista");
        return JSonUtil::criaJSONObject($ser);
    }

}

?>
