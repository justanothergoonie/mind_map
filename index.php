<?php

session_start();

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
</head>

<body>

    <form method="post">
        <input type="hidden" name="_action" value="signup">



        <label>Whats The Word</label>
        <input type="text" name="username">
        <br />

        <label>Font Color</label>
        <select name="Color">
            <option value="red">Red</option>
        </select>
        <br />

        <label>Font Style</label>
        <select name="font">
            <option value="roboto">roboto</option>
        </select>

        <br />

        <input type="submit" value="Create">
    </form>


</body>

</html>