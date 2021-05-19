<?php
error_reporting(E_ALL);
require_once("../App/Settings/Settings.php");
require_once("../App/Routes/RouterController.php");

function autoload($class){
    
    require_once(str_replace("\\", "/", dirname(__DIR__) ."\\" .  $class . ".php"));
}
spl_autoload_register("autoload");


(new App\Routes\RouterController());