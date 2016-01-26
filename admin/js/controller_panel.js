//App NAME
var appAdmin=angular.module('panel',[]);
//Factory
appAdmin.factory("mensajes", function(){
	//create object
    var objeto={};
    var descargasRealizadas = ["angular"];
    //propiedes
   	objeto.nombre= "nombre";
    //metodos
	objeto.getName= function(){
            return descargasRealizadas;
        }
    return objeto;
})
//controller Login Admin
appAdmin.controller('panelCtrl', ['$scope','$http','mensajes', function($scope,$http,mensajes){		
		$scope.show=true;
		$scope.pruebas=mensajes.getName() ;
		
}]);




