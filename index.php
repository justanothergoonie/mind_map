<?php

session_start();

include "includes/mindWords.php";

$wordManager = new mindWord();
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_REQUEST['_action'])) {
    $wordManager->handleAction($_REQUEST['_action'], $_REQUEST);
}
$words = $wordManager->get_mind_words();
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


    <div class="mind-map-container">
        <div class="mind-map debug">
            <button class="make-a-word">Make a Word</button>
            <?php foreach ($words as $i => $word) : ?>
            <div class="word" style="
                left:<?php echo $word['x']; ?>px; 
                top:<?php echo $word['y']; ?>px; 
                color:<?php echo $word['color']; ?>; 
                font-family:<?php echo $word['font']; ?>; 
                font-size:<?php echo $word['size'] ?>rem; 
                transform:rotate(<?php echo $word['rotation'] ?>deg); 
                ">
                <p>
                    <?php echo $word['word']; ?>
                    <sup style="font-size: 1rem;">
                        <?php echo $word['name'] ?>
                    </sup>
                </p>
            </div>
            <?php endforeach; ?>

            <?php for ($x = 1; $x < 20; $x++) : ?>
            <?php for ($y = 1; $y < 20; $y++) : ?>
            <div class="debug" style="left: <?php echo $x * 500; ?>px; top: <?php echo $y * 500; ?>px;">
                <?php echo $x * 500; ?>,<?php echo $y * 500; ?>
            </div>
            <?php endfor; ?>
            <?php endfor; ?>
        </div>
    </div>



    <form class="controls" method="post">
        <input type="hidden" name="_action" value="create_mind_word">


        <label>Whats Your Name</label>
        <input type="text" name="the_name">
        <br />

        <label>Whats The Word</label>
        <input type="text" name="the_word">
        <br />

        <span class="pseudo-input" contenteditable="true">Add your word here, scroll to place</span>

        <div class="location-location-location">
            <h2>Where You Want It?</h2>
            <div class="x-location">
                <label>X-Coordinate 1-10,000</label>
                <input type="text" name="the_x_cord" class="the-x-cord">
            </div>
            <div class="y-location">
                <label>Y-Coordinate 1-10,000</label>
                <input type="text" name="the_y_cord" class="the-y-cord">
            </div>
        </div>
        <br />
        <label>How Big You Want It?</label>
        <select name="the_size" id="">
            <option value="2">12pt</option>
            <option value="1.2">Bit Bigger</option>
            <option value="1.4">Larger</option>
            <option value="1.6">LARGER</option>

            <option value="5">FUCK EVERYONE ELSE</option>
        </select>
        <br />
        <div class="spin-me-right-round">
            <h2>Put Some Spin On It</h2>
            <label>0<sup>&#176</sup>-359<sup>&#176</sup> </label>
            <input type="text" name="the_spin" value="0">
        </div>
        <br />
        <label>Color</label>
        <select name="the_color">
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
        </select>
        <br />

        <label>Style</label>
        <select name="the_font">
            <option value="Billy">Billy</option>
            <option value="netsrak">Netsrak</option>
        </select>
        <br />
        <input class="save-word" type="submit" value="Create Word">
    </form>
    <script src="dist/js/main.js"></script>
    <script src="dist/js/toggle.js"></script>
</body>

</html>