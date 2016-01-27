//check variables Login
// if(!localStorage.id_user || !localStorage.name_user || !localStorage.type_user)
//     //The user need to do LOGIN
//     window.location.href = '../';
/*CONTROLLERS*/
var storeCtrl = angular.module('storeCtrl', []);

//Panel View
storeCtrl.controller('panelCtrl', ['$scope','$http','mensajes', function($scope,$http,mensajes){		
	$scope.prueba="si"
}]);
//User login
storeCtrl.controller('loginCtrl', ['$scope','$http','admin', function($scope,$http,admin){	
	//Init variable MESSAGE to user
	$scope.showError=false;	
	//FUNCTIONS
	$scope.submit=function(){
		console.log("SUBMIT");		
		//here must be  a loader
		$scope.showError=true;
		//validate expression
		if($scope.txtName && $scope.txtPass){
			//Ejecutamos el metodo del servicio ADMIN
			//myPromise, recibe el PROMISE del service
			myPromise=admin.login($scope.txtName,$scope.txtPass);		
			//cuando ya tenga la informacion pobremos manipularla
			myPromise.then(function (data) {
				console.log(data)				
			})
			//console.log(admin.query);
		}
	}	
}]);
