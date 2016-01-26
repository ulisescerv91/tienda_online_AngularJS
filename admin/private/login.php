<?php
	//DB Data
	//include("conexion.php");
	//DATA RECIVED		
	$objDatos = json_decode(file_get_contents("php://input"));
	$user=$objDatos->x;
	$pass=$objDatos->y;

	//data container
	$errors=array();
	$data=array();
	//variables EMPTY
	if(empty($user) || empty($pass) ){
		$errors['variable']='User or Password Incorect!';		
	}
	else{
		$con=mysqli_connect('localhost','root','','mystore');
		// Check connection
		if (mysqli_connect_errno()){
		  $errors['conexion']='Error conexion: '. mysqli_connect_error();
		}else{
			$sql="SELECT * FROM user_Adm WHERE name_user_adm='$user' and pass_user_adm='$pass'";
			if ($result=mysqli_query($con,$sql)){
				// Return the number of rows				
				if (mysqli_num_rows($result)==1)
					//Success found USER
					$row = mysqli_fetch_assoc($result);
				else
					$errors['user_status']='User no found ';	  
				/*IMPORTANTE Aqi podria ir otra IF en caso que se entonctrara mas de 1 usuario que coincidiera*/
			}else{
			  	$errors['query']='Error QUERY';
			}
			mysqli_close($con);
		}	
	}

	//Found errors
	if (!empty($errors))  {
		//SEND ERROR TO FRONT_END
		$data['success'] = false;
  		$data['errors']  = $errors;
	}else{		
		//report a SUCCESS search
	  	$data['success'] = true;	  				  
	  	// Start the USER session
		session_start();
		// Set session variables		
		$_SESSION["id"] = $row["id_user_adm"];				  
		$data['user_id'] = $_SESSION["id"];	  				  		
		$_SESSION["user"] = $row["name_user_adm"];				  				
		$data['user_name'] = $_SESSION["user"];	  				  
		$_SESSION["type"] = $row["type_user_adm"];				  
		$data['user_type'] = $_SESSION["type"];	  				  		
	}

	echo json_encode($data);
?>