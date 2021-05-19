<?php
date_default_timezone_set("America/Sao_Paulo");

if(strpos(dirname(__DIR__), "C:\\") > -1){
    define("SITE", "TestePhpFs/");    /* desenvolvimento */
}else{
    define("SITE", "/");    /* produção */
}
define("DOCUMENT_ROOT", $_SERVER['DOCUMENT_ROOT']);

