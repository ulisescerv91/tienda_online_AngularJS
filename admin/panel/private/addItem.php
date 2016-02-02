<?php
	//DB Data
	//include("conexion.php");

	//DATA RECIVED		
	$data = array();
	$errors = array();
	// Getting posted data and decodeing json
	$_POST = json_decode(file_get_contents('php://input'), true);

	if( 
		isset($_POST['name']) && !empty($_POST['name']) && 
		isset($_POST['description']) && !empty($_POST['description']) &&
		isset($_POST['price']) && !empty($_POST['price']) &&
		isset($_POST['amount']) && !empty($_POST['amount']) &&
		isset($_POST['descount_y_n']) &&
		isset($_POST['descount']) && !empty($_POST['descount']) 
		){


		$con=mysqli_connect('localhost','root','','mystore');
		// Check connection
		if (mysqli_connect_errno())
		  $errors['conexion']='Error conexion: '. mysqli_connect_error();
		else{
			//Agregar el nuevo ITEM
			$sql="INSERT INTO items (name_item,description_item,price_item,amount_item,descount_y_n_item,descount_item) VALUES ( '$_POST[name]', '$_POST[description]','$_POST[price]','$_POST[amount]','$_POST[descount_y_n]','$_POST[descount]')";
			if (!$result=mysqli_query($con,$sql))							
			 	$errors['query1']='Error insertar ITEM';				
			else{
			 	//CUANDO YA AGREGO EL ITEM, regresaremos el id de este
			 	$sql="SELECT id_item FROM items   ORDER BY id_item DESC LIMIT 1";					
			 	//Query success
			 	if ($result=mysqli_query($con,$sql)){			 					 		
					$row = mysqli_fetch_assoc($result);
					//path donde se creara la ruta
					 $ruta="../../products/".$row['id_item'];
					if(!mkdir($ruta, 0777, true)) 
					    $errors['mkdir']=('Fallo al crear las carpetas...');					
				}		  				
			 	else
			 		$errors['query2']='Error Obtener ID de Item';								
			}
		}				
			mysqli_close($con);
	}else
		$errors['empty']="data empty";	

	//send type Errors or not
	if (!empty($errors)) {
		$data['errors']  = $errors;
	} else {
		$data['success'] = 'Form data is going well';
	}
	echo json_encode($data);
?>