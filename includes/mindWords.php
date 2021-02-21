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
    function do_create_mind_word($vars)
    {
        try {
            $try_mind_word_creator = $vars['the_name'];
            $try_mind_word = $vars['the_word'];
            $try_mind_word_color = $vars['the_color'];
            $try_mind_word_font = $vars['the_font'];

            if (!empty($try_mind_word) && !empty($try_mind_word_creator)) {
                $sql_add_words = 'INSERT INTO mind_map (name, word, color, font) VALUES(:mindWordCreator, :mindWord, :mindWordColor, :mindWordFont)';
                $add_word_stmt = $this->dbh->prepare($sql_add_words);
                $add_word_stmt->bindParam(':mindWordCreator', $try_mind_word_creator);
                $add_word_stmt->bindParam(':mindWord', $try_mind_word);
                $add_word_stmt->bindParam(':mindWordColor', $try_mind_word_color);
                $add_word_stmt->bindParam(':mindWordFont', $try_mind_word_font);
                $add_word_stmt->execute();
            } else {
                $this->error = 'please fill out all fields';
            }
        } catch (PDOException $e) {
            print_r('uh-oh!' . $e->getMessage() . '<br />');
        }
    }
}