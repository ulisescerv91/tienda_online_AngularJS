 var myServices = angular.module('myServices', []);

//Factory *EJEMPLO
myServices.factory("mensajes", function(){
	//create object
    var objeto={};    
    //properties
    objeto.id_user= localStorage.id_user;    
    //methods
	objeto.getName= function(){
            return "hola";
        }
    return objeto;
});

//Service HACER LOGIN de ADMIN
/*
    $q -> nos ayuda  a enviar informacion al controlador(conocida como 'promise')
*/
myServices.service("products", ['$http','$q' ,function($http,$q){
    //declaramos  la PROMISe
    //properties
        //this.nombre="hola";
    //methods del Serivicio
    this.addItem=function(dataForm){                
        var defer = $q.defer()           
        $http({ 
                method:'POST',
                url: "private/addItem.php",
                data: dataForm //forms user object
                //QUE ES?
                //headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data) {                
                    if(!data.success){                                                  
                        defer.resolve(data);
                    }else{                        
                        defer.resolve(data);                        
                    }                                      
                })
            .error(function(data) {
                //Con esto enviamos informacion al controller
                  defer.reject('Error to take Data');
            });             
            //retornamos promise para que el controlador puedo manipular la informacion       
        return defer.promise;
    }   
}]);