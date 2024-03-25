<?php

session_start();
if(!empty($_SESSION['start_time']) || $_SESSION['start_time'] < time() - 960){
    session_destroy();
    session_start();
}

$_SESSION['SSID']= session_id();
$_SESSION['start_time'] = time();
$_SESSION['last_active'] = 0;
$_SESSION['actions_counter'] = 0;

echo json_encode(array("token" => $_SESSION['SSID'], "start_time" => $_SESSION['start_time']));