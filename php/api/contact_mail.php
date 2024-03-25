<?php
function send_contact_mail_materia($name, $phone): bool
{
    ini_set("sendmail_from", "kontakt@materiastudio.design");
    $subject = 'Pojawił się nowy uczeń na lekcje próbną 30min!';
    $message = '
        <table style="width: 640px; font-family: \'Open Sans\', sans-serif;">
            <tr>
                <td style="padding: 10px 0;">Pojawiło się nowe zgłoszenie, oczekujące na nasz kontakt!</td>
            </tr>
            <tr>
                <td>Imię: ' . $name . '</td>
            </tr>
            <tr>
                <td>Telefon: ' . $phone . '</td>
            </tr>
        </table>';

    $headers  = "From:  <kontakt@omindu.pl>\n";
    $headers .= "FromName: Kontakt MateriaStudio\n";
    $headers .= "X-Sender: MateriaStudio.design <kontakt@materiastudio.design>\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= "X-Priority: 2\n";
    $headers .= "Importance: High\n";
    $headers .= "X-MSMail-Priority: High\n";
    $headers .= "Return-Path: kontakt@omindu.pl\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Priority: Urgent\n";

    $headers .= "Content-Type: text/html; charset=UTF-8\n";

    return mail("kamil.hrebeniuk@gmail.pl", $subject, $message, $headers);
}