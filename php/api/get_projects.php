<?php
include "connect.php";

$conn = Database::getConnection();

try {
    $stmt = $conn->prepare("SELECT * FROM `projects`");
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results, JSON_UNESCAPED_SLASHES);

    $stmt->closeCursor();
}
catch (PDOException $e) {
    echo $e->getMessage();
}