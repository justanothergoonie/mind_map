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
    <link rel="stylesheet" href="dist/css/color-picker.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
</head>

<body>
    <div class="mind-map-container">
        <div class="mind-map debug">
            <button class="make-a-word">
                <div class="long-cross">
                </div>
                <div class="lat-cross">
                </div>
            </button>
            <?php foreach ($words as $i => $word) : ?>
            <div class="word <?php echo $word['style']; ?>" style="
               left:<?php echo $word['x']; ?>px; 
               top:<?php echo $word['y']; ?>px; 
               font-family: Billy; 
               transform:rotate(<?php echo $word['rotation']; ?>deg); 
                   transform: translate(-50%, -50%);
               ">
                <p style="font-size:<?php echo $word['size']; ?>px;">
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
        <div class="hidden">
            <input class="your-word" type="text" name="the_word" value="">
            <input class="your-name" type="text" name="the_name" value="">
            <input type="text" name="the_x_cord" class="the-x-cord">
            <input type="text" name="the_y_cord" class="the-y-cord">
            <input type="hidden" name="the_style" value="" class="the-true-style">
        </div>
        <div class="input">
            <div class="word-container">
                <div class="word-icon">
                    <img src="dist/img/newWordIcon.png" alt="">
                </div>
                <span class="word-input" contenteditable="true">
                    WORD
                </span>
            </div>
            <div class="name-container">
                <div class="name-icon">
                    <img src="dist/img/nameIcon.svg" alt="">
                </div>
                <span class="name-input" contenteditable="true">
                    Name
                </span>
            </div>
        </div>
        <div class="big-spin">
            <div class="size">
                <div class="size-icon plus-minus-field" data-step=16 data-min=16 data-default=16 data-max=56>
                    <!-- <div> -->
                    <input type="number" name="the_size" class="the-size" value="" readonly>
                    <div class="button-holder">
                        <button class="plus">
                            <img src="dist/img/upArrowFill.svg" alt="">
                        </button>
                        <button class="minus">
                            <img src="dist/img/downArrowFill.svg" alt="">
                        </button>
                    </div>
                    <!-- </div> -->

                    <div class="size-title">
                        <img src="dist/img/fontSizeIcon.png" alt="">
                    </div>
                </div>
            </div>
            <div class="spin-range">
                <div class="spin-icon plus-minus-field" data-step=5 data-min=-90 data-default=0 data-max=90>
                    <!-- <div> -->
                    <input name="the_spin" type="number" class="the-spin" value="" readonly>
                    <div class="button-holder">
                        <button class="plus"><img src="dist/img/upArrowFill.svg" alt=""></button>
                        <button class="minus"><img src="dist/img/downArrowFill.svg" alt=""></button>
                    </div>
                    <!-- </div> -->

                    <div class="spin-title">
                        <img src="dist/img/rotateIcon.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="styles-container">
            <div class="styles-icon">
                <img src="dist/img/StyleIcon.png" alt="">
            </div>
            <div class="styles">
                <input type="button" class="style-1 style-buttons" value="pb-pitb">
                <input type="button" class="style-2 style-buttons" value="gb-ytb">
                <input type="button" class="style-3 style-buttons" value="bb-ptb">
                <input type="button" class="style-4 style-buttons" value="ob-lotb">
            </div>
        </div>
        <input class="save-word" type="submit">
    </form>
    <script src="dist/js/utils.js"></script>
    <script src="dist/js/main.js"></script>
    <script src="dist/js/drag-to-scroll.js"></script>
    <script src="dist/js/toggle.js"></script>
    <script src="dist/js/color-picker.min.js"></script>
    <script src="dist/js/plusMinus.js"></script>
</body>

</html>