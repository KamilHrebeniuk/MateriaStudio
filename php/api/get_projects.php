<?php
include "connect.php";

$conn = Database::getConnection();

try {
    $stmt = $conn->prepare("SELECT * FROM `projects`");
    $stmt->execute();

    foreach($stmt as $row)
    {
        $id = $row['ID'];
        $namePL = $row['NamePL'];
        $nameEN = $row['NameEN'];
        $descriptionPL = $row['DescriptionPL'];
        $descriptionEN = $row['DescriptionEN'];

        $projects[] = array('id'=> $id, 'namePL'=> $namePL, 'nameEN'=> $nameEN, 'descriptionPL'=> $descriptionPL, 'descriptionEN'=> $descriptionEN);

        echo json_encode($projects, JSON_UNESCAPED_SLASHES);
    }
    $stmt->closeCursor();
}
catch (PDOException $e) {
    echo $e->getMessage();
}