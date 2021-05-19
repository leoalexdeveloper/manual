<?php

namespace App\View;

class View{

    public static function renderPage(String $type, Array $data) : Void
    {
        if($type === "JSON"){
            self::returnJSON(json_encode($data));
        }else{
            $data = extract($data); 
            REQUIRE_ONCE(dirname(__DIR__) . "/View/Templates/" . $template . ".php");
        }
    }

    private static function returnJSON($data) : Void
    {
        echo $data;
    }
}