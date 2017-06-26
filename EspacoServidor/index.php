<?php

include './app/Servidor.php';
include './app/JSonUtil.php';
include './app/ServidorController.php';
include './app/IndexController.php';

$controller;
$acao;
if (isset($_POST['CONTROLLER'])) {
    $controller = $_POST['CONTROLLER'];
} else {
    $controller = "IndexController";
}
if (isset($_POST['ACTION'])) {
    $acao = $_POST['ACTION'];
} else {
    $acao = "index";
}


$con = new ServidorController();
?>

<?= $con->$acao(); ?>
