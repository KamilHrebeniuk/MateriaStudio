<?php
include "connect.php";

echo "Test";

$conn = Database::getConnection();

try {
    $stmt = $conn->prepare("SELECT * FROM `projects`");
    $stmt->execute();

    echo '<table border="1">';
    foreach($stmt as $row)
    {
        echo '<tr>';
        echo '<td>'.$row['ID'].'<td/>'.$row['NamePL'].'<td>'.$row['DescriptionPL'].'</td>';
        echo '</tr>';
    }
    $stmt->closeCursor();
    echo '</ul>';
}
catch (PDOException $e) {
    echo $e->getMessage();
}