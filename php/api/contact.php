<?php

include "connect.php";
include "contact_mail.php";

// Get incoming data
$data = json_decode(file_get_contents('php://input'), true);

session_id($data['token']);
session_start();

// Transform values
$offer_agreement = 0;
$rules_agreement = 0;

if ($data['offer_agreement'] === 'on'){
    $offer_agreement = 1;
}

if ($data['rules_agreement'] === 'on'){
    $rules_agreement = 1;
}

// Encode
$public_key = openssl_get_publickey(file_get_contents('public.pem'));
$algo = 'aes256';
$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($algo));

// Name
$encryptedName = $eName = NULL;
openssl_seal($data['name'], $encryptedName, $eName, array($public_key), $algo, $iv);
$sealedName = base64_encode($encryptedName);
$envelopeName = base64_encode($eName[0]);

// Phone
$encryptedPhone = $ePhone = NULL;
openssl_seal($data['phone'], $encryptedPhone, $ePhone, array($public_key), $algo, $iv);
$sealedPhone = base64_encode($encryptedPhone);
$envelopePhone = base64_encode($ePhone[0]);

// Connect
$conn = Database::getConnection();

try {
    // Obligatory session time -> 16 minutes
    if($_SESSION['start_time'] > time() - 960) {
        // Obligatory number -> 25 actions in 15 minutes
        if ($_SESSION['actions_counter'] < 25) {
            $_SESSION['actions_counter'] += 1;
            // Obligatory number -> 1 try every 10 seconds
            if ($_SESSION['last_active'] < time() - 10) {
                $_SESSION['last_active'] = time();

                $stmt = $conn->prepare("INSERT INTO contact_form (Name, NameEnvelope, Phone, PhoneEnvelope, OfferAgreement, RulesAgreement) VALUES (:name, :nameEnvelope, :phone, :phoneEnvelope, :offer_agreement, :rules_agreement)");
                $stmt->execute(['name' => $sealedName, 'nameEnvelope' => $envelopeName, 'phone' => $sealedPhone, 'phoneEnvelope' => $envelopePhone, 'offer_agreement' => $offer_agreement, 'rules_agreement' => $rules_agreement]);

                $stmt->closeCursor();

                $status = "Ok";

                // Send mail to Omindu
                if(!send_contact_mail_materia($data['name'], $data['phone'])){
                    $status = "Error2";
                }

                echo json_encode(array("status" => $status, "token" => $_SESSION['SSID']));
            } else {
                echo json_encode(array("status" => "Too quick", "token" => $_SESSION['SSID']));
            }
        } else {
            echo json_encode(array("status" => "Too many actions", "token" => $_SESSION['SSID']));
        }
    } else {
        echo json_encode(array("status" => "Old session", "token" => $_SESSION['SSID']));
    }
}
catch (PDOException $e) {
    echo $e->getMessage();
}