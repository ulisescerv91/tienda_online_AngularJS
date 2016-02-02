//check variables Login
// if(!localStorage.id_user || !localStorage.name_user || !localStorage.type_user)
//     //The user need to do LOGIN
//     window.location.href = '../';
/*CONTROLLERS*/
var storeCtrl = angular.module('storeCtrl', []);

//Panel View
storeCtrl.controller('masterPanelCtrl', ['$scope','$http','mensajes', function($scope,$http,mensajes){	
	//Init variable MESSAGE to user
	//$scope.user_name=localStorage.name_user;	
	$scope.prueba="masterPanelCtrl"
}]);

//item
storeCtrl.controller('productos', ['$scope','$http','products', function($scope,$http,products){		
	$scope.item={};	
	//Setting variables 
	$scope.item.descount_y_n=0;
	$scope.item.descount=5;
	$scope.submit=function(){						
		myPromise=products.addItem($scope.item)	
		myPromise.then(function (data) {
			//informacion desde el SERVICEs
			if (data.errors)
				console.log(data.errors)								
			else	
				console.log(data)								
		})
	}	
}]);