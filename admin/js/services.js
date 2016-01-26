// var pruebaName = angular.module('pruebaName', ['ngResource']);

//Factory
appAdmin.factory("mensajes", function(){
	//create object
    var objeto={};
    var descargasRealizadas = ["angulawr"];
    //propiedes
   	objeto.nombre= "nombre";
    //metodos
	objeto.getName= function(){
            return descargasRealizadas;
        }
    return objeto;
})