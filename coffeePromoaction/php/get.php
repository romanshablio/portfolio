<?php
$mysql = new mysqli('localhost', 'login', 'pass', 'db'); //задает подключение в БД 1 параметр - хост, 2 - логин, 3 - пароль, 4 - название БД

$get = $mysql->query("SELECT `ID`, `Name`, `Phone`, `PromoCode`, `Review` FROM `users` WHERE NOT (Name='Admin')");


?>