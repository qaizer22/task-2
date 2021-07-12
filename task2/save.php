<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


    // Database connection
    $conn = new mysqli('localhost','root','root','coop training');
	
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
        if( isset($_POST['name']) ){
            echo $_POST['name'];
            $name = $_POST['name'];
            
            echo '<script type="text/javascript">console.log('+$_POST['name']+')</script>';
            $conn->query("INSERT INTO `robot direction` (`direction`) VALUES ('$name');");
		
		echo "Registration successfully...";

		$conn->close();
            exit;
           }	
        
    }
    echo '<script type="text/javascript">console.log('+$name+')</script>';
?>