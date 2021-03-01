<?php
class Database
{

    private $db_host = '';
    private $db_user = '';
    private $db_pass = '';
    private $db_name = '';

    private $error = '';
    private $dsn = '';


    public function get_dbh()
    {
        return new PDO($this->dsn, $this->db_user, $this->db_pass);
    }

    function __construct()
    {
        if (gethostname() == 'student-server-2') {
            // set it  up for circuslabs
            $this->db_host = 'localhost';
            $this->db_user = 'cody.powell';
            $this->db_pass = 'Circus123!';
            $this->db_name = 'cody_powell-mind_brain';
        } else {
            // set it up for local development on cody's computer
            $this->db_host = 'localhost';
            $this->db_user = 'root';
            $this->db_pass = 'root';
            $this->db_name = 'mind_map';
        }

        $this->dsn = "mysql:host={$this->db_host};port=8889;dbname={$this->db_name};";
    }
}