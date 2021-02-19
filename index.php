<?php

session_start();

include "../includes/mindWords.php";

// $wordManager = new mindWord();
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_REQUEST['_action'])) {
	$wordManager->handleAction($_REQUEST['_action'], $_REQUEST);
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <title>Mind Brain</title>
    <meta name="description" content="add a description" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="dist/css/main.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet">
</head>

<body>

    <form method="post">
        <input type="hidden" name="_action" value="add_word">
        <label>Whats The Word</label>
        <input type="text" name="the_word" value="bird">
        <br />

        <label>Whats Your Name</label>
        <input type="text" name="the_name" value="Cody">
        <br />

        <label>Font Color</label>
        <select name="the_color">
            <option value="red">Red</option>
        </select>
        <br />

        <label>Font Style</label>
        <select name="the_font">
            <option value="roboto">roboto</option>
        </select>

        <br />

        <input type="submit" value="Create">
    </form>


</body>

</html>