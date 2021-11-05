<?php
// Recuperation de index.html
$name = htmlspecialchars($_POST['name']);
$age = htmlspecialchars($_POST['age']);
$email = htmlspecialchars($_POST['email']);
$password = htmlspecialchars($_POST['password']);
$phone = htmlspecialchars($_POST['phone']);
$city = htmlspecialchars($_POST['city']);

echo $name, ' ' , $age, ' ' ,$email, ' ' ,$password, ' ' ,$phone, ' ' ,$city;

//Connection SQL
//J'ai des doutes sur les informations de connection + mdp
$con = mysqli_connect("localhost","stagiaire10","stagiaire10","utilisateurs");


// database insert SQL code
$sql = "INSERT INTO `utilisateurs` (`id`, `name`, `age`, `email`, `password`, `phone`, `city`) VALUES ('0', '$name', '$age', '$email', '$password', '$phone', '$city');"



