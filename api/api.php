<?php

    $action = $_GET["action"]; /////////获取action url传参

    $name = $_POST["name"]; //////////获取参数 form传参

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