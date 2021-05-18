<?php

namespace App\Controller\Home;

use App\View\View;

class Home{
    private string $controller;
    private string $action;
    private string $route;
    private array $pageContent;

    public function __construct($controller, $action, $route){
        $this->controller = $controller;
        $this->action = $action;
        $this->route = $route;
    }
    
    public function home() : Void
    {
        $this->view("", ["controller"=>$this->controller, "action"=>$this->action, "template"=>"Default"]);
    }

    private function view(String $type, Array $pageContent) : Void
    {
        (new View())->renderPage($type, $pageContent);
    }
}