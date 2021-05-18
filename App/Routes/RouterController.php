<?php

namespace App\Routes;

class RouterController{
    
    private string $uri;
    private string $method;
    private array $routes;
    private string $uriUsablePart;
    private string $filePath;
    private string $controller;
    private string $action;

    public function __construct(){
        
        try
        {
            $this->uri = $this->getUri();
            $this->method = $this->getMethod();
            $this->uriUsablePart = $this->getUsableUriPart();
            REQUIRE_ONCE("Routes.php");
            $this->filePath = $this->validateUri();
            $this->executeClassAndMethod();
        }
        catch(\Exception $e)
        {
            echo $e->getMessage();
        }
    }

    private function getUri() : String
    {
        return parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    }

    private function getMethod() : String
    {   
        return  $_SERVER['REQUEST_METHOD'] ?? "GET";
    }

    private function getUsableUriPart() : String
    {
        $uriInit = strpos(substr($this->uri, 1, strlen($this->uri)), "/");
        $uriUsable = substr($this->uri, 1, $uriInit+1);
        return str_replace($uriUsable, "", substr($this->uri, 1, strlen($this->uri)));
    }

    private function validateUri() : String
    {
        if(substr($this->uriUsablePart, -1) !== "/"){
            $this->uriUsablePart = $this->uriUsablePart . "/";
        }
        
        if(count(explode("/", $this->uriUsablePart)) < 3){
            $this->uriUsablePart = $this->uriUsablePart . $this->uriUsablePart;
        }

        if($this->uriUsablePart === "//"){
            $this->uriUsablePart = "home/home/";
        }
        foreach($this->routes as $route){
            
            if(substr($this->uriUsablePart, 0, strlen($route["route"])) === $route["route"] 
            &&
            $this->method === $route["method"])
            {
                $uriExploded = explode("/", $route["route"]);
                $this->controller = $uriExploded[0];
                $this->action = $uriExploded[1];
                
                if(file_exists(dirname(__DIR__) . "\\Controller\\" . ucfirst($this->controller) . "\\". ucfirst($this->controller) . ".php")){
                    return "\\App\\Controller\\" . ucfirst($this->controller) . "\\" . ucfirst($this->controller);
                }
            }
        } 
        throw new \Exception("404");
    }

    private function executeClassAndMethod() : void
    {
        (new $this->filePath($this->controller, $this->action, $this->uriUsablePart))->{$this->action}();
    }
}