<?php
class Database {
    private static $db;
    private $conn;
    private $servername = "qfgcdwuadmin.mysql.db";
    private $username = "qfgcdwuadmin";
    private $password = "Admin123";
    private $dbname = "qfgcdwuadmin";

    private function __construct(){
        $this -> conn = new PDO("mysql:host=$this->servername; dbname=$this->dbname", $this->username, $this->password);
        $this -> conn->exec("set names utf8");
        $this -> conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        $this -> conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    function __destruct(){
        $this->conn=null;
    }
    public static function getConnection(): PDO
    {
        if(self::$db==null){
            self::$db = new Database();
        }
        return self::$db->conn;
    }
}