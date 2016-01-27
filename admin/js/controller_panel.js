//check variables Login
if(!localStorage.id_user || !localStorage.name_user || !localStorage.type_user)
    //The user need to do LOGIN
    window.location.href = '../';

//App NAME
var appAdmin=angular.module('panel',[]);
//controller Login Admin
appAdmin.controller('panelCtrl', ['$scope','$http','mensajes', function($scope,$http,mensajes){		
		$scope.show=true;        		
        $scope.pruebas=mensajes.nombre;
        
		
}]);




