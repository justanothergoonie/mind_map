<?php
include_once "database.php";

class mindWord
{
    function __construct()
    {
        $db = new Database();
        $this->dbh = $db->get_dbh();
    }
    function handleAction($action, $vars)
    {
        $action_function = "do_{$action}";
        if (method_exists($this, $action_function)) {
            $this->$action_function($vars);
        }
    }
    public function errorMessage()
    {
        return $this->error;
    }
    public function get_mind_words()
    {
        $mindWords = [];
        foreach ($this->dbh->query('SELECT * from mind_map') as $row) {
            $mindWords[] = $row;
        }
        print_r($mindWords);
        return $mindWords;
    }
}