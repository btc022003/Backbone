<?php

    $action = $_GET["action"];

    $name = $_POST["name"];

    if($name)
    {
    }
    else
    {
        $name = "null";
    }

    switch($action)
    {
        case "getbook":
            echo '{"status":"y","name":"'.$name.'","inf":[{"title":"java"},{"title":"python"},{"title":"php"}]}';
            exit;
            break;
    }

    echo '{"status":"y","name":"'.$name.'","inf":"你妹啊！"}';
?>