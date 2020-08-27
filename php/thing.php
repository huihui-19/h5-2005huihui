<?php
$id = $_GET['id'];

$conn = mysqli_connect('localhost','root','root','music');
    
$sql = "SELECT * FROM `xq` WHERE `product_id`= '$id'";

$result = mysqli_query($conn,$sql);

$arr = mysqli_fetch_assoc($result);

echo json_encode($arr);
?>