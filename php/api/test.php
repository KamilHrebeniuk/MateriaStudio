<?php

echo "Test 12";

$headers  = "From:  <autoresponse@materiastudio.design>\n";
$headers .= "FromName: Kontakt MateriaStudio\n";
$headers .= "X-Sender: MateriaStudio.design <autoresponse@materiastudio.design>\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
$headers .= "X-Priority: 2\n";
$headers .= "Importance: High\n";
$headers .= "X-MSMail-Priority: High\n";
$headers .= "Return-Path: kontakt@materiastudio.design\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Priority: Urgent\n";

$headers .= "Content-Type: text/html; charset=UTF-8\n";

return mail("kamil.hrebeniuk@gmail.pl", "Test automat 2", "AAAAA 2", $headers);