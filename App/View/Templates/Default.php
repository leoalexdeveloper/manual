<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <base href="/">
    <script src="https://kit.fontawesome.com/028b76dd29.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<?php echo SITE . "Public/Css/" . ucfirst($controller) . "/" .ucfirst($controller) . ".css" ?>">
    <script src="<?php echo SITE . "Public/Js/" . ucfirst($controller) . "/" .ucfirst($controller) . ".js" ?>"></script>
</head>
<body>
    <?php REQUIRE_ONCE(dirname(__DIR__) . "/Html/" . ucfirst($controller) . "/Body.php"); ?>
    <?php REQUIRE_ONCE(dirname(__DIR__) . "/Html/" . ucfirst($controller) . "/Footer.php"); ?>
</body>
</html>