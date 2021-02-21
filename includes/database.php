<?php
class Database
{
    private $db_host = 'localhost';
    private $db_user = 'root';
    private $db_pass = 'root';
    private $db_name = 'mind_map';
    private $error = '';
    private $dsn = '';
    public function get_dbh()
    {
        return new PDO($this->dsn, $this->db_user, $this->db_pass);
    }

    function __construct()
    {
        $this->dsn = "mysql:host={$this->db_host};port=8889;dbname={$this->db_name};";
    }
}