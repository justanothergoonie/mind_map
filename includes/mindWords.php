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
        try {
            $sql_get_words = 'SELECT * from mind_map';
            $get_words_statement = $this->dbh->prepare($sql_get_words);
            $get_words_statement->execute();
            $word = $get_words_statement->fetchAll();
            return $word;
        } catch (PDOException $e) {
            print_r('uh-oh!' . $e->getMessage() . '<br />');
        }

        $mindWords = [];
        foreach ($this->dbh->query('SELECT * from mind_map') as $row) {
            $mindWords[] = $row;
        }
        // print_r($mindWords);
        return $mindWords;
    }
}