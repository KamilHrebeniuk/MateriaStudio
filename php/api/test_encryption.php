<?php

$private_key = openssl_get_privatekey(file_get_contents('private.key'));
$public_key = openssl_get_publickey(file_get_contents('public.pem'));

$data = 'Data to Seal';

echo "data in:" .$data . "<br>";

$encrypted = $e = NULL;
$algo = 'aes256';
$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($algo));

openssl_seal($data, $encrypted, $e, array($public_key), $algo, $iv);

$sealed_data = base64_encode($encrypted);
$envelope = base64_encode($e[0]);

echo "sealed data:" .$sealed_data . "<br>";
echo "envelope:" .$envelope . "<br>";

$input = base64_decode($sealed_data);
$einput = base64_decode($envelope);

$plaintext = NULL;
openssl_open($input, $plaintext, $einput, $private_key, $algo, $iv);

echo "data out:" .$plaintext;